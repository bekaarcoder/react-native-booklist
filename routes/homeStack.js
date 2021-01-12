import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#edddd4",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "BookReads",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()}
            >
              <SimpleLineIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Book Details" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
