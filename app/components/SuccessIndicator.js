import React from "react";
import LottieView from "lottie-react-native";

function SuccessIndicator({ visible = false, handleSuccess }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop={false}
      source={require("../assets/animations/done.json")}
      onAnimationFinish={handleSuccess}
    ></LottieView>
  );
}

export default SuccessIndicator;
