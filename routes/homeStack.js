import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

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
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={handleModalOpen}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      >
        {(props) => (
          <Home
            {...props}
            modalVisible={modalVisible}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Book Details" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
