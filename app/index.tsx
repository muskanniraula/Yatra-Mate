import React from "react";
import { SafeAreaView, Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { router } from "expo-router"; // Import router from expo-router

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Logo and App Name */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo1.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appNameText}>YATRA MATE</Text>
          <Text style={styles.taglineText}>Your Local Travel Buddy!</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Continue as a User</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push("/RiderPanel/signup1")}
          >
            <Text style={styles.buttonText}>Continue as a Rider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a2145", // Dark navy blue background
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  taglineText: {
    fontSize: 16,
    color: "white",
    opacity: 0.8,
  },
  buttonsContainer: {
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1e3c67", // Slightly lighter blue
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2d4d7c",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  }
});