import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity  } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles";

import { styles } from "./styles";
import { toggle } from '../../store/favorites';

const URL = 'http://10.0.2.2:3000'

interface StarProps {
  star: boolean;
  id: string;
  onPress(): any;
}

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

const DetailsVehicle = ( props:any ) => {

  const VehicleData = props.route.params.car

  console.log(props.route.params.car)

  const size = useScreenDimensions();
  const dispatch = useDispatch()

  return (<View style={styles.card}>
    <Image
      source={{
        uri: URL+VehicleData.image.url
      }}
      style={{
        width: "100%",
        height: size.width * 0.5,
      }}
    />
    <View style={styles.details}>
      <View style={styles.header}>
        <Text style={styles.model}>{VehicleData.model}</Text>
        <StarIcon onPress={ () => dispatch(toggle(VehicleData.id))} id={VehicleData.id} star={VehicleData.favorite} />
      </View>
      <View style={styles.line} />
      <Text style={styles.makeYear}>
        {VehicleData.make} | {VehicleData.year}
      </Text>
    </View>
  </View>)
}

export default DetailsVehicle;
