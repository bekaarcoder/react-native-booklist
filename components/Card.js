import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    marginHorizontal: 6,
    marginVertical: 10,
    padding: 8,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "#aaa",
  },
  cardContent: {
    marginVertical: 5,
    marginHorizontal: 3,
  },
});

export default Card;
