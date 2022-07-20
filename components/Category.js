import { View, Text, Image, ScrollView, Button } from "react-native";
import React, { useState } from "react";

// import Binance from 'binance-api-react-native'

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Category() {
  const [ data, setData ] = useState('')

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {items.map((item, index) => (
        <View style={{ alignItems: "center", marginRight: 30, marginTop: 5 }} key={index}>
        <Image
          source={item.image}
          style={{
            width: 50,
            height: 40,
            resizeMode: "contain",
          }}
        />
        <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
      </View>
      ))}
      
    </ScrollView>
  );
}
