import React from "react";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular as robotoRegular,
  Roboto_700Bold as robotoBold,
} from "@expo-google-fonts/roboto";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetails from "./screens/ReviewDetails";

const Stack = createStackNavigator();

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
