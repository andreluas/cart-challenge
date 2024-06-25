import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Product from "../../components/Product";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/CartContext";

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Coca-cola",
      price: 19.9,
    },
    {
      id: "2",
      name: "Queijo 500g",
      price: 31.5,
    },
    {
      id: "3",
      name: "Batata Frita",
      price: 13.9,
    },
    {
      id: "4",
      name: "Chocolate",
      price: 4.5,
    },
    {
      id: "5",
      name: "Guarana lata",
      price: 5.9,
    },
    {
      id: "6",
      name: "Hamburguer",
      price: 35.4,
    },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("Cart")}
        >
          {cart.length >= 1 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}>{cart?.length}</Text>
            </View>
          )}
          <Feather name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingStart: 16,
    paddingEnd: 16,
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 50,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  },
});
