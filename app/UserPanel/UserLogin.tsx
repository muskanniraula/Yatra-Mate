import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import { Button, TextField } from "../../components";

export default function RiderLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const canProceed = email && password && !emailError;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Login</Text>
            <Text style={styles.subHeader}>sub-heading</Text>
          </View>

          {/* Login Illustration */}
          <View style={styles.illustrationContainer}>
            <Image
              source={require("../../assets/images/login.png")} 
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

            {/* Password */}
            <TextField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            {/* Forgot Password */}
            <TouchableOpacity 
              style={styles.forgotPasswordContainer} 
              onPress={() => router.push("/UserPanel/U-ForgotPassword")}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <Button
              title="Login"
              onPress={() => router.push("/UserPanel/UserDashboard")}
              disabled={!canProceed}
              className={`mt-5 ${!canProceed ? "bg-gray-300" : ""}`}
            />
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
    alignItems: "flex-end",
    marginTop: 10,
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