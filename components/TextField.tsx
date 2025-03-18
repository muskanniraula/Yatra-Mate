import React from "react";
import { TextInput, StyleSheet, View, Text, ViewStyle, TextStyle } from "react-native";

interface TextFieldProps {
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  className?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  onFocus?: () => void;
  maxLength?: number;
  containerStyle?: ViewStyle;  // Style for the container
  inputStyle?: TextStyle;      // Style for the TextInput field
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  className,
  keyboardType = "default",
  secureTextEntry = false,
  maxLength,
  containerStyle,  // Apply container style
  inputStyle,      // Apply input field style
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}  // Combine default styles with passed inputStyle
          className={className}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
});
