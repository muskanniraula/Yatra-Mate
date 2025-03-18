import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router"; // Import router from expo-router
import { Button, TextField } from "../../components";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
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
  const canProceed = fullName && phoneNumber && email && password && isChecked;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Sign Up</Text>
            <Text style={styles.subHeader}>sub-heading</Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}></View>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* Full Name */}
            <TextField
              label="Full Name"
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
            />

            {/* Phone Number */}
            <TextField
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="numeric" // Show numeric keyboard
            />

            {/* Email Address */}
            <TextField
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChangeText={handleEmailChange} // Use email validation onChange
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            {/* Password */}
            <TextField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true} // Hide password text
            />

            {/* Terms and Conditions */}
            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={[styles.checkbox, isChecked ? styles.checkboxChecked : {}]}
                onPress={() => setIsChecked(!isChecked)}
              >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.termsText}>Agree to Terms and Conditions</Text>
            </View>

            {/* Next Button */}
            <Button
              title="Next"
              onPress={() => router.push("/RiderPanel/signup2")}
              disabled={!canProceed} // Disable the button if any field is empty or checkbox is not checked
              className={`mt-5 ${!canProceed ? "bg-gray-300" : ""}`} // Apply gray color when disabled
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
    paddingBottom: 20, // Ensures there's space at the bottom
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
  progressBarContainer: {
    height: 3,
    backgroundColor: "#F0F0F0",
    width: "100%",
    marginBottom: 30,
  },
  progressBar: {
    height: 3,
    width: "25%", // Represents first step of a multi-step form
    backgroundColor: "#0a2145",
  },
  formContainer: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#25A969", // Green color for checked box
    borderColor: "#25A969",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
  },
  termsText: {
    fontSize: 16,
    color: "#555555",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
