import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, SafeAreaView, ScrollView  } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles";

import { styles } from "./styles";

// Placeholder
const car = {
  model: "RS7 4.0",
  make: "Audi",
  year: 2015,
};

const image = require("../../../assets/placeholder.png");

interface StarProps {
  star: boolean;
}

const URL = 'http://localhost:3000'



export const StarIcon = (props: StarProps) => (
  <AntDesign
    size={24}
    name={props.star ? "star" : "staro"}
    color={props.star ? Colors.starColor : Colors.textColor}
  />
);

const Vehicle = ({ car: any  } ) => {
  const size = useScreenDimensions();

  return (<View style={styles.card}>
    <Image
      source={image}
      style={{
        width: "100%",
        height: size.width * 0.5,
      }}
    />
    <View style={styles.details}>
      <View style={styles.header}>
        <Text style={styles.model}>{car.model}</Text>
        <StarIcon star={true} />
      </View>
      <View style={styles.line} />
      <Text style={styles.makeYear}>
        {car.make} | {car.year}
      </Text>
    </View>
  </View>)
}


  

 
const Garage = () => {
 
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://10.0.2.2:3000/"
      );
      setFetchedData(response.data.items);
    };
    getData();
  }, []);

 
 

  let carData = fetchedData
  console.log(carData)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.list}>

        {carData ? (carData.map( car => {
        return (
          <Vehicle car={car}></Vehicle>
        )
      })) : ('Loading....')}
      
   
     

      </ScrollView>
    </SafeAreaView>
  );
};

export default Garage;
