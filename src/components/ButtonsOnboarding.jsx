import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonsOnboarding({
  index,
  setIndex,
  navigation,
  ITEM_WIDTH,
  refProp,
  items,
}) {
  return (
    <View style={styles.wrapButtons}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={[styles.button, { backgroundColor: "#F7F5EB" }]}
      >
        <Text style={[styles.textButton, { color: "#202020" }]}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          refProp?.current?.scrollToOffset({
            offset: (index + 1) * ITEM_WIDTH,
            animated: true,
          });
          setIndex(index + 1);
          index === items.length - 1 && navigation.navigate("HomeScreen");
          index === items.length - 1 && setIndex(items.length - 1);
        }}
      >
        <Text style={styles.textButton}>
          {index === items.length - 1 ? "Go Home" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#4D77FF",
    width: 120,
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    letterSpacing: 0.3,
    fontWeight: "700",
  },
});
