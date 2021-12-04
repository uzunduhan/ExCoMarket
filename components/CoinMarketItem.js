import {Text,TouchableOpacity,Image,View} from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export const CoinMarketItem=(props)=>{
    return(
       <TouchableOpacity style={{
           alignItems:"center",
           flexDirection:"row",
       }}>
               <Image
                   style={{
                       height:20,
                       width:20
                   }}
                   source={{uri: props.image}}
               >
               </Image>
           <Text style={{
               marginLeft:8,
               fontSize:16,
               fontWeight:"bold",
           }}>
               {props.name}
           </Text>
           <View style={{
               marginLeft:"auto",
               flexDirection:"column"
           }}>
               <Text
                   style={{
                       textAlign:"right",
                       fontSize:12,
                       fontWeight:"bold"
                   }}>
                   {props.currentPrice} ₺
               </Text>
               <View style={{
                   alignItems:"center",
                   justifyContent:"flex-end",
                   flexDirection:"row"
               }}>
                   {props.currentPriceChange>0?(
                       <Ionicons
                           name="trending-up-outline"
                           size={12}
                           color={"#006600"}
                       />
                   ):(
                       <Ionicons
                           name="trending-down-outline"
                           size={12}
                           color={"#C70039"}
                       />
                   )}
                   <Text
                       style={{
                           marginLeft:2,
                           fontSize:12,
                           fontWeight:"bold",
                           color:props.currentPriceChange>0?"#006600":"#C70039"
                       }}>
                       {props.currentPriceChange}%
                   </Text>
               </View>
           </View>
       </TouchableOpacity>
    )

}
