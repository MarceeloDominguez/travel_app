import React, { useRef, useState } from "react";
import { View, Dimensions, Image, StyleSheet, Animated } from "react-native";
import ButtonsOnboarding from "../components/ButtonsOnboarding";
import TextOnboarding from "../components/TextOnboarding";
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
      <TextOnboarding />

      {/* botones para navegar y hacer el scroll */}
      <ButtonsOnboarding
        index={index}
        setIndex={setIndex}
        navigation={navigation}
        ITEM_WIDTH={ITEM_WIDTH}
        refProp={ref}
        items={imagesOnboarding}
      />
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
});
