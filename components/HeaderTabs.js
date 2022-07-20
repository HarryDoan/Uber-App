import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs(props) {
  // const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center", }}>
      <HeaderButton
        title="Delivery"
        btnBackgroundColor= "black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnBackgroundColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.title ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.title)}
    >
      <Text
        style={{
          color: props.activeTab === props.title ? "white" : "black",
          fontSize: 16,
          fontWeight: "900",
        }}
      >
        {props.title}{" "}
      </Text>
    </TouchableOpacity>
  );
};
