import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean; // Optional disabled prop
  className?: string; // For Tailwind CSS classes
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, disabled, className }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]} // Apply disabled style when 'disabled' is true
      onPress={onPress}
      disabled={disabled} // Disable the button interaction when 'disabled' is true
    >
      <Text style={styles.buttonText} className="text-white text-base font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1C3D62", // Slightly lighter blue
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#1C3D62",
  },
  disabled: {
    backgroundColor: "#94A0AD", // Gray color when disabled
    borderColor: "#94A0AD", // Optional: make the border gray too
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
