import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      ></LottieView>
    </View>
  );
}

export default ActivityIndicator;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,
    elevation: 1,
  },
});
