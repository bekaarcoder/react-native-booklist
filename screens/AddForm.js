import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import FlatButton from "../components/FlatButton";

const BookSchema = yup.object({
  title: yup.string().required().min(3),
  author: yup.string().required().min(3),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a num 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

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
        validationSchema={BookSchema}
        onSubmit={(values, actions) => {
          addBook(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={
                props.touched.title && props.errors.title
                  ? globalStyles.errorInput
                  : globalStyles.input
              }
              placeholder="Book Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            {props.touched.title && props.errors.title && (
              <Text style={globalStyles.errorText}>{props.errors.title}</Text>
            )}

            <TextInput
              style={
                props.touched.author && props.errors.author
                  ? globalStyles.errorInput
                  : globalStyles.input
              }
              placeholder="Author"
              onChangeText={props.handleChange("author")}
              value={props.values.author}
              onBlur={props.handleBlur("author")}
            />
            {props.touched.author && props.errors.author && (
              <Text style={globalStyles.errorText}>{props.errors.author}</Text>
            )}

            <TextInput
              style={globalStyles.input}
              placeholder="Image URL"
              onChangeText={props.handleChange("image")}
              value={props.values.image}
            />
            <TextInput
              style={
                props.touched.rating && props.errors.rating
                  ? globalStyles.errorInput
                  : globalStyles.input
              }
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            {props.touched.rating && props.errors.rating && (
              <Text style={globalStyles.errorText}>{props.errors.rating}</Text>
            )}

            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddForm;
