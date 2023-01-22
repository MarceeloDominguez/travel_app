import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function HeaderHomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.nameUser}>Welcome, Marcelo</Text>
          <View style={styles.wrapLocation}>
            <Icon name="location-outline" size={14} />
            <Text style={styles.nameCity}>Nah Trang</Text>
          </View>
        </View>
        <View style={styles.wrapIcons}>
          <Icon
            name="notifications-outline"
            size={21}
            style={{ marginRight: 10 }}
            color="#ccc"
          />
          <Icon name="move-outline" size={21} color="#ccc" />
        </View>
      </View>
      <View style={styles.containerSearch}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="search-outline" size={20} style={{ opacity: 0.6 }} />
          <Text style={styles.placeHolder}>Search Destination...</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
  nameUser: {
    fontSize: 19,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  nameCity: {
    opacity: 0.5,
    letterSpacing: 0.5,
    marginLeft: 3,
  },
  wrapLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  wrapIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSearch: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#F7F5EB",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  placeHolder: {
    opacity: 0.6,
    marginLeft: 10,
    fontSize: 12,
  },
});
