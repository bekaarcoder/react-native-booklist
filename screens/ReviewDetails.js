import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Ratings from "../components/Ratings";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ route }) => {
  const { title, author, image, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          resizeMethod="scale"
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>
      <Ratings rating={rating} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 250,
  },
  title: {
    textAlign: "center",
    fontFamily: "robotoBold",
    fontSize: 24,
    marginVertical: 18,
  },
  author: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default ReviewDetails;
