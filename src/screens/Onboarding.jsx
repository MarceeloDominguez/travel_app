import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { imagesOnboarding } from "../data/onboarding";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width - 24;
const ITEM_HEIGHT = height <= 640 ? height * 0.5 : height * 0.6;

export default function Onboarding({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const ref = useRef();

  return (
    <View>
      <View style={styles.wrapListItems}>
        <Animated.FlatList
          data={imagesOnboarding}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View>
                <Image source={{ uri: item.img }} style={styles.image} />
              </View>
            );
          }}
          //para hacer scroll con el botton
          ref={ref}
          onMomentumScrollEnd={(e) => {
            setIndex(Math.round(e.nativeEvent.contentOffset.x / ITEM_WIDTH));
          }}
        />
        <View style={styles.pagination}>
          {imagesOnboarding.map((_, index) => {
            return <View key={index} style={styles.dot} />;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateX: Animated.divide(
                      scrollX,
                      ITEM_WIDTH
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 16],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
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
            ref?.current?.scrollToOffset({
              offset: (index + 1) * ITEM_WIDTH,
              animated: true,
            });
            setIndex(index + 1);
            index === 3 && navigation.navigate("HomeScreen");
            index === 3 && setIndex(3);
          }}
        >
          <Text style={styles.textButton}>
            {index === 3 ? "Go Home" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapListItems: {
    marginHorizontal: 12,
    marginTop: 10,
    overflow: "hidden",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: ITEM_HEIGHT,
    elevation: 12,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#ccc",
    marginRight: 8,
  },
  dotIndicator: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    position: "absolute",
    top: -6 / 2,
    left: -6 / 2,
  },
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
