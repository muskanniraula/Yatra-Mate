import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView, // Add ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // For image upload
import { router } from "expo-router"; // For navigation

export default function LicenseVerificationPage() {
  const [licenseImage, setLicenseImage] = useState<string | null>(null); // State for license image

  // Function to handle image upload
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3], // Adjust aspect ratio as needed
      quality: 1,
    });

    if (!result.canceled) {
      setLicenseImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>License Verification</Text>
        <Text style={styles.subHeader}>Verify your driver's license</Text>

        {/* Driver's License Number */}
        <TextInput
          style={styles.input}
          placeholder="Enter your Driver's License Number"
          placeholderTextColor="#999"
        />

        {/* Upload License */}
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          {licenseImage ? (
            <Image source={{ uri: licenseImage }} style={styles.licenseImage} />
          ) : (
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          )}
        </TouchableOpacity>

        {/* Expiry Date */}
        <TextInput
          style={styles.input}
          placeholder="Pick Expiry Date"
          placeholderTextColor="#999"
        />

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => router.push("/RiderPanel/signup5")} // Navigate to Tourism Student Verification
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1, // Ensures the content can scroll
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20, // Add padding at the bottom
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
  input: {
    height: 50,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    height: 150, // Adjust height as needed
  },
  uploadButtonText: {
    color: "#102554",
    fontSize: 16,
  },
  licenseImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#102554",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});