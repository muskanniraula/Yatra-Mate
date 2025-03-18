import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { Button, TextField } from "../../components";

export default function LicenseVerificationPage() {
  const [licenseImage, setLicenseImage] = useState<string | null>(null);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLicenseImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <Text style={styles.header}>License Verification</Text>
          <Text style={styles.subHeader}>Verify your driver's license</Text>
          
          {/* Progress bar */}
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>

          <View style={styles.formContainer}>
            {/* License Number - Using the original TextField component */}
            <Text style={styles.sectionHeader}>Driver's License Number</Text>
            <TextField
              placeholder="Enter your Driver's License Number"
              value={licenseNumber}
              onChangeText={setLicenseNumber}
            />

            {/* License Image Upload */}
            <Text style={styles.sectionHeader}>Upload License Image</Text>
            <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
              {licenseImage ? (
                <Image source={{ uri: licenseImage }} style={styles.licenseImage} />
              ) : (
                <Text style={styles.uploadText}>Tap to upload image</Text>
              )}
            </TouchableOpacity>

            {/* Expiry Date - Using the original TextField component */}
            <Text style={styles.sectionHeader}>Expiry Date</Text>
            <TextField
              placeholder="Pick Expiry Date"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />

            {/* Save Button - Using the original Button component */}
            <Button
              title="Save"
              onPress={() => router.push("/RiderPanel/signup5")}
              className="mt-5"
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
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
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
    height: 4,
    backgroundColor: "#f0f0f0",
    marginBottom: 25,
    width: '100%',
  },
  progressBar: {
    height: '100%',
    width: '80%',
    backgroundColor: "#102554",
  },
  formContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 50,
  },
  uploadText: {
    color: "#000",
    fontSize: 16,
  },
  licenseImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
});