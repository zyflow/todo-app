import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { styles } from "../css/styles";
import { ServiceItem } from "./ServiceItem";

export const ServiceList = ({ navigation }) => {
  const data = [
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Standarta uzkopšana",
      data: {
        steps: ["RoomSize", "PictureBlock", "AddressBlock"],
      },
    },
    {
      img: "https://www.greenassex.com/wp-content/uploads/2021/10/maid.jpg",
      name: "Ģenerāltīrīšana",
    },
    {
      img: "https://www.simplybusiness.co.uk/static/5f7cd5caa1ac61f237d8095bc21d715b/8b156/how-to-start-a-cleaning-business-in-the-uk.jpg",
      name: "Biroja uzkopšana",
    },
    {
      img: "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/ikbvkbww0wcm8lfu2glt",
      name: "Telpu dezinfekcija",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
    {
      img: "https://www.bhg.com.au/media/21117/cleaner.jpg?width=720&center=0.0,0.0",
      name: "Logu mazgāšana",
    },
  ];

  const itemList = data.map((item, key) => {
    return (
      <ServiceItem
        key={key}
        image={item.img}
        text={item.name}
        onClick={() => {
          navigation.navigate("Item", {
            itemId: 86,
            item,
            title: item.name,
          });
        }}
      />
    );
  });

  return <ScrollView style={styles.body}>{itemList}</ScrollView>;
};
