import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, SafeAreaView, ScrollView, Button, TouchableOpacity  } from "react-native";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, fetchAllUsers, increment, toggle } from './.././../store/favorites'


import { AntDesign } from "@expo/vector-icons";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles";

import { styles } from "./styles";
import { connect } from 'http2';
import { RootState } from '../../app/store';

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
  id: string;
}

const URL = 'http://10.0.2.2:3000'



export const StarIcon = (props: StarProps) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      onPress={() => dispatch(toggle(props.id))}
  >
    <AntDesign
      size={24}
      name={props.star ? "star" : "staro"}
      color={props.star ? Colors.starColor : Colors.textColor}  
    />
    </TouchableOpacity>
  )
}

const Vehicle = ({ id, model, make, year, image, star}: { id: string; model: string, year:number, make:string, image:string, star:any } ) => {
  const size = useScreenDimensions();

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
       
        <StarIcon id={id} star={star} />
      
      </View>
      <View style={styles.line} />
      <Text style={styles.makeYear}>
        {make} | {year}
      </Text>
    </View>
  </View>)
}
 
const Garage = ({ navigation }: any) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])
  
  const carList  = useSelector((state: RootState) => state.favorite.list);
  let carData = carList

  // console.log(carData)
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.list}>
        {carData ? (carData.map( car  => {
          // console.log(car)
        return (
          <>
          <Vehicle key={car.id} 
          id={car.id} 
          model={car.model}
          make={car.make}
          year={car.year}
          image={car.image.url}
          star={car.favorite}
          ></Vehicle>
          
          <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details", {car})}
            />
          </>
          
        )
      })) : ('Loading....')}
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Garage;
