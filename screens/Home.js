import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [books, setBooks] = useState([
    {
      key: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg",
    },
    {
      key: "2",
      title: "Anxious People",
      author: "Fredrik Backman",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597575031l/49127718.jpg",
    },
    {
      key: "3",
      title: "American Dirt",
      author: "Jeanine Cummins",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579793054l/50634450._SY475_.jpg",
    },
    {
      key: "4",
      title: "Such a Fun Age",
      author: "Kiley Reid",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557181911l/43923951._SY475_.jpg",
    },
    {
      key: "5",
      title: "My Dark Vanessa",
      author: "Kate Elizabeth Russell",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583447793l/44890081._SY475_.jpg",
    },
    {
      key: "6",
      title: "The Glass Hotel",
      author: "Emily St. John Mandel",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564199892l/45754981.jpg",
    },
    {
      key: "7",
      title: "Transcendent Kingdom",
      author: "Yaa Gyasi",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571925550l/48570454.jpg",
    },
    {
      key: "8",
      title: "The Girl with the Louding Voice",
      author: "Abi Dar\u00e9",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581128232l/50214741.jpg",
    },
    {
      key: "9",
      title: "Dear Edward",
      author: "Ann Napolitano",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573865448l/45294613.jpg",
    },
    {
      key: "10",
      title: "Big Summer",
      author: "Jennifer Weiner",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585287049l/52755548.jpg",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
