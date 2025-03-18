import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { Button, TextField } from "../../components";

export default function StudentVerificationPage() {
  const [studentIdImage, setStudentIdImage] = useState<string | null>(null);
  const [institutionName, setInstitutionName] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setStudentIdImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Tourism Student Verification</Text>
        <Text style={styles.subHeader}>Verify your student status</Text>
        
        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>

        {/* Institution Name */}
        <Text style={styles.sectionHeader}>Institution Name</Text>
        <TextField
          placeholder="Enter your Institution Name"
          value={institutionName}
          onChangeText={setInstitutionName}
        />

        {/* Upload Student ID */}
        <Text style={styles.sectionHeader}>Upload Student ID</Text>
        <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
          {studentIdImage ? (
            <Image source={{ uri: studentIdImage }} style={styles.studentIdImage} />
          ) : (
            <Text style={styles.uploadText}>Upload Image</Text>
          )}
        </TouchableOpacity>

        {/* Graduation Year */}
        <Text style={styles.sectionHeader}>Graduation Year</Text>
        <TextField
          placeholder="Pick Graduation Year"
          value={graduationYear}
          onChangeText={setGraduationYear}
        />

        {/* Save Button */}
        <Button
          title="Save"
          onPress={() => router.push("/RiderPanel/RiderDashboard")}
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
    width: '100%',
    backgroundColor: "#102554",
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
  studentIdImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
});