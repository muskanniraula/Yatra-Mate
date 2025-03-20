import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import { Button } from "../../components";

export default function ForgotPasswordConfirmationPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Check Your Email</Text>
          <Text style={styles.subHeader}>We've sent a password reset link to your email address.</Text>
        </View>

        {/* Confirmation Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../../assets/images/otp.png")} 
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* Back to Login Button */}
        <Button
          title="Back to Login"
          onPress={() => router.push("/UserPanel/UserLogin")}
          className="mt-5"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContainer: {
    paddingTop: 32,
    paddingBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: "#777777",
    marginBottom: 15,
    textAlign: "left",
  },
  illustrationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    height: 200,
  },
  illustration: {
    width: "100%",
    height: "100%",
  },
});