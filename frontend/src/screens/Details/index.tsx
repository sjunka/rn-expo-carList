import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, SafeAreaView, ScrollView  } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { Colors } from "../../styles";
import { StarIcon } from '../Garage';

import { styles } from "./styles";

const URL = 'http://10.0.2.2:3000'

const DetailsVehicle = ({ id, model, make, year, image}: { id: number; model: string, year:number, make:string, image:string } ) => {
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
        <StarIcon star={true} />
      </View>
      <View style={styles.line} />
      <Text style={styles.makeYear}>
        {make} | {year}
      </Text>
    </View>
  </View>)
}

export default DetailsVehicle;
