import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('login'); // Navigate to login screen
  };
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: '#333',
        }}
      >
        Welcome to the Home Screen!
      </Text>
      <Button title="Log In" onPress={navigateToLogin} />
    </View>
  );
}
