import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";

const AddForm = ({ addBook }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          author: "",
          rating: "",
          image: "",
        }}
        onSubmit={(values, actions) => {
          addBook(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Book Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Author"
              onChangeText={props.handleChange("author")}
              value={props.values.author}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Image URL"
              onChangeText={props.handleChange("image")}
              value={props.values.image}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="#72a98f"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddForm;
