import React from "react";
import * as Progress from "react-native-progress";

function ProgressIndicator({ visible, progress, color }) {
  if (!visible) return null;
  return <Progress.Bar progress={progress} color={color} />;
}

export default ProgressIndicator;
