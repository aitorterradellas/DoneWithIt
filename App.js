import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import OfflineBar from "./app/components/OfflineBar";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { AppLoading, Notifications } from "expo";
import navigation from "./app/navigation/rootNavigation";
import { Button } from "react-native";
import Screen from "./app/components/Screen";

import logger from "./app/utility/logger";
logger.start();

export default function App() {
  logger.log(new Error("Error in app"));

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineBar></OfflineBar>
      <NavigationContainer
        ref={navigation.navigationRef}
        theme={navigationTheme}
      >
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
