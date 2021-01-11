import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReviewDetails = ({ route }) => {
  const { title, author } = route.params;

  return (
    <View style={styles.container}>
      <Text>
        {title} by {author}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default ReviewDetails;
