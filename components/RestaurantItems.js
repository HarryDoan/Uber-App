import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export const localRestaurant = [
  {
    image_url: require("../assets/images/restaurant.jpg"),
    name: "Farm House Kitchen Thai Restaurant",
    rating: 4.5,
    time: "30-45 * minutes",
    price: "$$$",
    address: "123 Main St, New York, NY 10001",
    phone: "123-456-7890",
    website: "www.farmhouse.com",
  },
  {
    image_url: require("../assets/images/restaurant.jpg"),
    name: "Farm House Kitchen Viet Restaurant",
    rating: 4.6,
    time: "20-30 * minutes",
    price: "$$$",
    address: "123 Main St, New York, NY 10001",
    phone: "123-456-7890",
    website: "www.farmhouse.com",
  },
  {
    image_url: require("../assets/images/restaurant.jpg"),
    name: "Farm House Kitchen Lao Restaurant",
    rating: 4.4,
    time: "30-40 * minutes",
    price: "$$$",
    address: "123 Main St, New York, NY 10001",
    phone: "123-456-7890",
    website: "www.farmhouse.com",
  },
  {
    image_url: require("../assets/images/restaurant.jpg"),
    name: "Farm House Kitchen Lao Restaurant",
    rating: 4.4,
    time: "30-40 * minutes",
    price: "$$$",
    address: "123 Main St, New York, NY 10001",
    phone: "123-456-7890",
    website: "www.farmhouse.com",
  },
  {
    image_url: require("../assets/images/restaurant.jpg"),
    name: "Farm House Kitchen Lao Restaurant",
    rating: 4.4,
    time: "30-40 * minutes",
    price: "$$$",
    address: "123 Main St, New York, NY 10001",
    phone: "123-456-7890",
    website: "www.farmhouse.com",
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={{ marginBottom: 20 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View key={index}
        style={{}}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo rating={restaurant.rating} name={restaurant.name} time={restaurant.time} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Image
        source={props.image}
        style={{ width: "95%", height: 180, borderRadius: 7 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        JustifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {props.name}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>{props.time}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#D3D1D1",
          height: 35,
          width: 35,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          position: "absolute",
          right: 10,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "bold" }}>{props.rating}</Text>
      </View>
    </View>
  );
};
