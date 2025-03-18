import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { router } from "expo-router"; // Import router from expo-router

export default function VerificationPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Header */}
        <Text style={styles.header}>Phone Number Verification</Text>
        <Text style={styles.subHeader}>Please enter the verification code sent to +977-985******</Text>

        {/* Verification Code Input */}
        <View style={styles.codeContainer}>
          <TextInput
            style={styles.codeInput}
            placeholder="5"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.codeInput}
            placeholder="5"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.codeInput}
            placeholder="5"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.codeInput}
            placeholder="5"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => router.push("/RiderPanel/signup3")} // Navigate to Rider Profile Setup
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        {/* Resend OTP Link */}
        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#102554",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    color: "#556080",
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 24,
  },
  verifyButton: {
    backgroundColor: "#102554",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendContainer: {
    alignItems: "center",
  },
  resendText: {
    fontSize: 14,
    color: "#102554",
    fontWeight: "bold",
  },
});