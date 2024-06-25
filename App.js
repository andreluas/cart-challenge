import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import CartProvider from "./src/context/CartContext";

export default function Cart() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}
