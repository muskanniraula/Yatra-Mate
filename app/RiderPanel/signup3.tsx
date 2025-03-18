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

export default function RiderProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null); // State for profile image
  const [gender, setGender] = useState<"Male" | "Female" | null>(null); // State for gender selection

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
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Set the selected image URI
    }
  };

  // Function to handle gender selection
  const handleGenderSelect = (selectedGender: "Male" | "Female") => {
    setGender(selectedGender);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Rider Profile Setup</Text>
        <Text style={styles.subHeader}>Complete your profile to get started</Text>

        {/* Profile Picture */}
        <Text style={styles.sectionHeader}>Profile Picture</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          )}
        </TouchableOpacity>

        {/* Gender Selection */}
        <Text style={styles.sectionHeader}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "Male" && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect("Male")}
          >
            <Text
              style={[
                styles.genderButtonText,
                gender === "Male" && styles.selectedGenderText,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "Female" && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect("Female")}
          >
            <Text
              style={[
                styles.genderButtonText,
                gender === "Female" && styles.selectedGenderText,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>

        {/* Vehicle Details */}
        <Text style={styles.sectionHeader}>Vehicle Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your vehicle model"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your vehicle color"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your License Plate"
          placeholderTextColor="#999"
        />

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => router.push("/RiderPanel/signup4")} // Navigate to License Verification
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
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#102554",
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    height: 150,
  },
  uploadButtonText: {
    color: "#102554",
    fontSize: 16,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    padding: 15,
    width: "48%",
    alignItems: "center",
  },
  selectedGenderButton: {
    backgroundColor: "#102554",
  },
  genderButtonText: {
    color: "#102554",
    fontSize: 16,
  },
  selectedGenderText: {
    color: "white",
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