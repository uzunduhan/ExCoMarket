import {Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import COLORS from "../utils/COLORS";

export const CoinMarketItem=(props)=>{
    return(
       <TouchableOpacity style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: props.image}}
            >
            </Image>
            <Text style={styles.name}>
               {props.name}
            </Text>
            <View style={styles.view1}>
                <Text
                    style={styles.change}>
                    {props.currentPrice} ₺
                </Text>
                <View style={styles.view2}>
                    {props.currentPriceChange>0?(
                        <Ionicons
                           name="trending-up-outline"
                           size={12}
                           color={COLORS.green}
                        />
                    ):(
                        <Ionicons
                           name="trending-down-outline"
                           size={12}
                           color={COLORS.red}
                        />
                    )}
                    <Text
                        style={styles.trendingUpDown, {color:props.currentPriceChange>0?COLORS.green:COLORS.red}}>
                       {props.currentPriceChange}%
                    </Text>
                </View>
            </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection:"row",
    },
    image: {
        height:20,
        width:20,
        backgroundColor:COLORS.white,
    },
    name: {
        marginLeft:8,
        fontSize:16,
        fontWeight:"bold",
        color:COLORS.white,
    },
    view1: {
        marginLeft:"auto",
        flexDirection:"column"
    },
    view2: {
        alignItems:"center",
        justifyContent:"flex-end",
        flexDirection:"row"
    },
    change: {
        textAlign:"right",
        fontSize:12,
        fontWeight:"bold",
        color:COLORS.white,
    },
    trendingUpDown: {
        marginLeft:2,
        fontSize:12,
        fontWeight:"bold",
    }
});