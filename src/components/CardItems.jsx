import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function CardItems({ item }) {
  return (
    <View style={styles.container}>
      {item.photo ? (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image
            source={{ uri: item.photo?.images?.large?.url }}
            style={styles.image}
          />
          <View style={styles.wrapText}>
            <View style={{ maxWidth: "90%" }}>
              <Text numberOfLines={1} style={styles.title}>
                {item.name}
              </Text>
              <View style={styles.wrapLocation}>
                <Icon name="location-outline" size={12} />
                <Text numberOfLines={1} style={styles.nameLocation}>
                  {item.location_string}
                </Text>
              </View>
            </View>
            <View style={styles.wrapRating}>
              <Text style={styles.numberRating}>4.5</Text>
              <Icon name="star" size={12} color="#FF5F00" />
            </View>
          </View>
          <View style={styles.wrapPrice}>
            <Text style={styles.price}>$35</Text>
            <Text style={styles.person}>/person</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  title: {
    paddingHorizontal: 5,
    marginBottom: 5,
    maxWidth: "100%",
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  wrapLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    maxWidth: "95%",
  },
  card: {
    backgroundColor: "#F7F5EB",
    padding: 6,
    marginRight: 10,
    borderRadius: 15,
    elevation: 8,
    width: 230,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 15,
  },
  wrapText: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  wrapPrice: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  price: {
    fontWeight: "bold",
    color: "#4D77FF",
    fontSize: 13,
  },
  person: {
    left: 3,
    opacity: 0.5,
    fontSize: 12,
    textAlignVertical: "bottom",
  },
  nameLocation: {
    fontSize: 12,
    opacity: 0.5,
  },
  wrapRating: {
    flex: 1,
    maxWidth: "10%",
    alignItems: "center",
  },
  numberRating: {
    fontSize: 12,
    marginBottom: 5,
    opacity: 0.5,
  },
});
