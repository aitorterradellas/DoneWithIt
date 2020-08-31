import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/expoPushTokens";
import { useEffect } from "react";
import { Notifications } from "expo";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const pushToken = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(pushToken);
    } catch (err) {
      console.log("Error getting a push token", err);
    }
  };
};
