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

export default function StudentVerificationPage() {
  const [studentIdImage, setStudentIdImage] = useState<string | null>(null); // State for student ID image

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
      setStudentIdImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Tourism Student Verification</Text>
        <Text style={styles.subHeader}>Verify your student status</Text>

        {/* Institution Name */}
        <TextInput
          style={styles.input}
          placeholder="Enter your Institution Name"
          placeholderTextColor="#999"
        />

        {/* Upload Student ID */}
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          {studentIdImage ? (
            <Image source={{ uri: studentIdImage }} style={styles.studentIdImage} />
          ) : (
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          )}
        </TouchableOpacity>

        {/* Graduation Year */}
        <TextInput
          style={styles.input}
          placeholder="Pick Graduation Year"
          placeholderTextColor="#999"
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
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
  studentIdImage: {
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