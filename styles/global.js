import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: "robotoRegular",
    fontSize: 18,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 8,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: "#b3001b",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginVertical: 8,
  },
  errorText: {
    color: "#b3001b",
    marginLeft: 5,
    marginBottom: 5,
  },
});
