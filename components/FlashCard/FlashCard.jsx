import React, { useRef, useState } from "react";
import {
  Text,
  Animated,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

const FlashCard = ({ sideA, sideB }) => {
  const animate = useRef(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    Animated.timing(animate.current, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  return (
    <KeyboardAvoidingView>
      <Pressable onPress={handleFlip}>
        <Animated.View
          style={[
            styles.front,
            { transform: [{ rotateY: interpolateFront }] },
            styles.hidden,
          ]}
        >
          <Text style={styles.frontText}>{sideA}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.back, { transform: [{ rotateY: interpolateBack }] }]}
        >
          <Text style={styles.backText}>{sideB}</Text>
        </Animated.View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  front: {
    height: 400,
    width: 250,
    backgroundColor: "#0601B4",
    color: "#fff",
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    height: 400,
    width: 250,
    backgroundColor: "#D0D0D0",
    borderRadius: 16,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    color: "#000",
    fontSize: 20,
  },
  frontText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  hidden: {
    backfaceVisibility: "hidden",
  },
});

export default FlashCard;
