import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import { Button, TextField } from "../../components";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Email validation function
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Condition to check if the button should be active
  const canProceed = email && !emailError;

  const handleResetPassword = () => {
    // Add logic to send reset password email
    router.push("/UserPanel/U-ForgotPasswordConfirmation");
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
            <Text style={styles.header}>Forgot Password</Text>
            <Text style={styles.subHeader}>Enter your email to reset your password</Text>
          </View>

          {/* Login Illustration */}
          <View style={styles.illustrationContainer}>
            <Image
              source={require("../../assets/images/otp.png")} 
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* Email Address */}
            <TextField
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChangeText={handleEmailChange}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            {/* Reset Password Button */}
            <Button
              title="Reset Password"
              onPress={handleResetPassword}
              disabled={!canProceed}
              className={`mt-5 ${!canProceed ? "bg-gray-300" : ""}`}
            />

            {/* Back to Login */}
            <TouchableOpacity 
              style={styles.forgotPasswordContainer} 
              onPress={() => router.push("/UserPanel/UserLogin")}
            >
              <Text style={styles.forgotPasswordText}>Back to Login</Text>
            </TouchableOpacity>
          </View>
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
  formContainer: {
    flex: 1,
  },
  forgotPasswordContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: "#777777",
    fontSize: 14,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  }
});