import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TextOnboarding() {
  return (
    <>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>
          Travel Anywhere in the world without any hassle
        </Text>
      </View>
      <View style={styles.wrapDescription}>
        <Text style={styles.description}>
          If you to travel a lot, this is your place! Here you can travel with
          your favorite tour and enjoy...
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapTitle: {
    maxWidth: 250,
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "capitalize",
    lineHeight: 24,
  },
  wrapDescription: {
    maxWidth: 300,
    alignSelf: "center",
    marginTop: 16,
  },
  description: {
    fontSize: 13,
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 18,
    opacity: 0.6,
  },
});
