import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import About from "../screens/About";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const AboutStackNavigator = ({ navigation }) => {
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
        component={About}
        options={{
          headerTitle: "About",
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
    </Stack.Navigator>
  );
};

export default AboutStackNavigator;
