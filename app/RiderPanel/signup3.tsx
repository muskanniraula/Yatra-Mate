import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { TextField, Button } from "../../components"; // Importing reusable components

export default function RiderProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [gender, setGender] = useState<"Male" | "Female" | null>("Male"); // Default to Male as shown in image
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");

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
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleGenderSelect = (selectedGender: "Male" | "Female") => {
    setGender(selectedGender);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Rider Profile Setup</Text>
        <Text style={styles.subHeader}>sub-heading</Text>
        
        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>

        {/* Profile Picture */}
        <Text style={styles.sectionHeader}>Profile Picture</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          )}
        </TouchableOpacity>

        {/* Gender Selection with Radio Buttons */}
        <Text style={styles.sectionHeader}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity 
            style={styles.radioOption}
            onPress={() => handleGenderSelect("Male")}
          >
            <View style={styles.radioButtonContainer}>
              <View style={[
                styles.radioButtonOuter, 
                gender === "Male" && styles.radioButtonOuterSelected
              ]}>
                {gender === "Male" && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={styles.radioButtonText}>Male</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.radioOption}
            onPress={() => handleGenderSelect("Female")}
          >
            <View style={styles.radioButtonContainer}>
              <View style={[
                styles.radioButtonOuter, 
                gender === "Female" && styles.radioButtonOuterSelected
              ]}>
                {gender === "Female" && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={styles.radioButtonText}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Vehicle Details */}
        <TextField
          label="Model"
          placeholder="Enter your vehicle model"
          value={model}
          onChangeText={setModel}
        />

        <TextField
          label="Color"
          placeholder="Enter your vehicle color"
          value={color}
          onChangeText={setColor}
        />

        <TextField
          label="License Plate"
          placeholder="Enter your License Plate"
          value={licensePlate}
          onChangeText={setLicensePlate}
        />

        {/* Save Button */}
        <Button
          title="Save"
          onPress={() => router.push("/RiderPanel/signup4")}
          className="mt-5"
        />
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
    width: '60%', // Adjust based on progress
    backgroundColor: "#102554",
  },
  sectionHeader: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
    height: 50,
  },
  uploadButtonText: {
    color: "#000",
    fontSize: 16,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  genderContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  radioOption: {
    marginRight: 30,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonOuterSelected: {
    borderColor: "#102554",
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#102554",
  },
  radioButtonText: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#000",
  },
});
