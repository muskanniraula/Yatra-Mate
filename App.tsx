import React from "react";
import { SafeAreaView } from "react-native";
import { Slot } from "expo-router"; // Import Slot from expo-router
import "./global.css"; // Import global.css for Tailwind styles

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot /> {/* Render the current route */}
    </SafeAreaView>
  );
};

export default App;