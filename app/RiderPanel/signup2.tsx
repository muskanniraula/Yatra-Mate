import React, { useState, useRef } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TextInput, Image } from "react-native";
import { router } from "expo-router"; // Import router from expo-router
import { TextField, Button } from "../../components"; // Importing reusable components

export default function VerificationPage() {
  const [code, setCode] = useState(["", "", "", ""]);
  
  // References for input fields to handle auto-focus
  const inputRefs = useRef<(TextInput | null)[]>([]);

  // Handle code input change
  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input if the current input is filled
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Phone Number Verification</Text>
            <Text style={styles.subHeader}>sub-heading</Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}></View>
          </View>

          {/* Verification Image */}
          <View style={styles.imageContainer}>
            <Image 
              source={require("../../assets/images/otp.png")} 
              style={styles.verificationImage}
              resizeMode="contain"
            />
          </View>

          {/* Verification Title and Instructions */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.verificationTitle}>Verification Code</Text>
            <Text style={styles.verificationInstructions}>
              Please enter the verification code{"\n"}sent to +977-985*******
            </Text>
          </View>

          {/* Verification Code Input */}
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)} // Set the ref for each input
                placeholder={index === 0 ? "5" : ""}
                value={digit}
                onChangeText={(value) => handleCodeChange(index, value)}
                keyboardType="numeric" // Show numeric keyboard
                maxLength={1}
                style={styles.codeInput} // Custom input style
              />
            ))}
          </View>

          {/* Verify Button */}
          <Button
            title="Verify"
            onPress={() => router.push("/RiderPanel/signup3")}
            disabled={code.some((digit) => digit === "")} // Disable if any input is empty
          />

          {/* Resend OTP Link */}
          <TouchableOpacity style={styles.resendContainer}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  headerContainer: {
    paddingTop: 32,
    paddingBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  subHeader: {
    fontSize: 16,
    color: "#777777",
    marginTop: 5,
  },
  progressBarContainer: {
    height: 3,
    backgroundColor: "#F0F0F0",
    width: "100%",
    marginTop: 5,
  },
  progressBar: {
    height: 3,
    width: "50%", // Represents second step
    backgroundColor: "#0a2145",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  verificationImage: {
    width: 150,
    height: 150,
  },
  instructionsContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  verificationTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  verificationInstructions: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    lineHeight: 20,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  codeInput: {
    width: 55,
    height: 55,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    marginHorizontal: 8,
  },
  resendContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  resendText: {
    fontSize: 16,
    color: "#007AFF",
  },
});
