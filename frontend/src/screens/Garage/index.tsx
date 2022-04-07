import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, SafeAreaView, ScrollView, Button  } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles";

import { styles } from "./styles";

// Placeholder
const car = {
  id: '1',
  model: "RS7 4.0",
  make: "Audi",
  year: 2015,
  image: {
    url: 'image'
  }
};

const image = require("../../../assets/placeholder.png");

interface StarProps {
  star: boolean;
}

const URL = 'http://10.0.2.2:3000'



export const StarIcon = (props: StarProps) => (
  <AntDesign
    size={24}
    name={props.star ? "star" : "staro"}
    color={props.star ? Colors.starColor : Colors.textColor}
  />
);

const Vehicle = ({ id, model, make, year, image}: { id: number; model: string, year:number, make:string, image:string } ) => {
  const size = useScreenDimensions();

  //console.log(image)

  return (<View style={styles.card}>
    <Image
      source={{
        uri: URL+image
      }}
      style={{
        width: "100%",
        height: size.width * 0.5,
      }}
    />
    <View style={styles.details}>
      <View style={styles.header}>
        <Text style={styles.model}>{model}</Text>
        <StarIcon star={true} />
      </View>
      <View style={styles.line} />
      <Text style={styles.makeYear}>
        {make} | {year}
      </Text>
    </View>
  </View>)
}


  

 
const Garage = ({ navigation }: any) => {
 
  const [fetchedData, setFetchedData] = useState<any[]>([]);

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.list}>

      

        {carData ? (carData.map( car => {
        return (
          <>
          <Vehicle key={car.id} 
          id={car.id} 
          model={car.model}
          make={car.make}
          year={car.year}
          image={car.image.url}
          
          ></Vehicle>
          
          
          
          <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", {carData})}
      />
          </>
          
        )
      })) : ('Loading....')}
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Garage;
