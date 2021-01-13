import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import Card from "../components/Card";

const Home = ({
  navigation,
  modalVisible,
  handleModalOpen,
  handleModalClose,
}) => {
  const [books, setBooks] = useState([
    {
      key: "1",
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.2,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg",
    },
    {
      key: "2",
      title: "Anxious People",
      author: "Fredrik Backman",
      rating: 3.5,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597575031l/49127718.jpg",
    },
    {
      key: "3",
      title: "American Dirt",
      author: "Jeanine Cummins",
      rating: 3,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579793054l/50634450._SY475_.jpg",
    },
    {
      key: "4",
      title: "Such a Fun Age",
      author: "Kiley Reid",
      rating: 4,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557181911l/43923951._SY475_.jpg",
    },
    {
      key: "5",
      title: "My Dark Vanessa",
      author: "Kate Elizabeth Russell",
      rating: 4,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583447793l/44890081._SY475_.jpg",
    },
    {
      key: "6",
      title: "The Glass Hotel",
      author: "Emily St. John Mandel",
      rating: 3.5,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564199892l/45754981.jpg",
    },
    {
      key: "7",
      title: "Transcendent Kingdom",
      author: "Yaa Gyasi",
      rating: 3,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571925550l/48570454.jpg",
    },
    {
      key: "8",
      title: "The Girl with the Louding Voice",
      author: "Abi Dar\u00e9",
      rating: 4.5,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581128232l/50214741.jpg",
    },
    {
      key: "9",
      title: "Dear Edward",
      author: "Ann Napolitano",
      rating: 3.5,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573865448l/45294613.jpg",
    },
    {
      key: "10",
      title: "Big Summer",
      author: "Jennifer Weiner",
      rating: 5,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585287049l/52755548.jpg",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.close}>
            <TouchableOpacity onPress={handleModalClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </View>
      </Modal>

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  close: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
});

export default Home;
