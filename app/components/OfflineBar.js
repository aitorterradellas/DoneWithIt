import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./Text";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineBar() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
}

export default OfflineBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    elevation: 1,
  },
  text: {
    color: colors.white,
    padding: 15,
    textAlign: "center",
  },
});
