import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import CardItems from "../components/CardItems";
import HeaderHomeScreen from "../components/HeaderHomeScreen";
import { useGetRestaurants } from "../hooks/useGetRestaurants";

const items = [
  { label: "Hotels", name: "hotels" },
  { label: "Attractions", name: "attractions" },
  { label: "Restaurants", name: "restaurants" },
];

export default function HomeScreen() {
  const [index, setIndex] = useState("hotels");
  const { dataMain, isLoading } = useGetRestaurants(index);

  return (
    <View>
      <HeaderHomeScreen />
      <View style={styles.containerButtons}>
        {items.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setIndex(item.name)}
            style={[
              styles.wrapButtons,
              { backgroundColor: index === item.name ? "#F7F5EB" : "#fff" },
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#4D77FF"
          style={styles.loading}
        />
      ) : (
        <>
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={dataMain}
            renderItem={({ item }) => <CardItems item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerFlatList}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtons: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 30,
  },
  wrapButtons: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  label: {
    textTransform: "capitalize",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  containerFlatList: {
    marginHorizontal: 20,
    height: 300,
  },
});
