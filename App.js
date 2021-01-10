import React from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular as robotoRegular,
  Roboto_700Bold as robotoBold,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    robotoRegular,
    robotoBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
