import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular as robotoRegular,
  Roboto_700Bold as robotoBold,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackNavigator from "./routes/homeStack";
import AboutStackNavigator from "./routes/aboutStack";

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    robotoRegular,
    robotoBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="About" component={AboutStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
