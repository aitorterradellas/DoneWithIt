import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import colors from "../config/colors";
import SuccessIndicator from "../components/SuccessIndicator";
import ProgressIndicator from "../components/ProgressIndicator";

function UploadScreen({ progress = 0, visible = false, handleSuccess }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <ProgressIndicator
          visible={progress < 1}
          progress={progress}
          color={colors.primary}
        />
        <SuccessIndicator
          handleSuccess={handleSuccess}
          visible={progress >= 1}
        ></SuccessIndicator>
      </View>
    </Modal>
  );
}

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
