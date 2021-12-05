import React, {useEffect, useState} from "react";
import {SafeAreaView, FlatList, View, StatusBar, Platform, StyleSheet, Text} from "react-native";
import {fetchCoinMarket} from "../utils/coinApi";
import {CoinMarketItem} from "../components/CoinMarketItem";
import COLORS from "../utils/COLORS";
import { TouchableOpacity } from "react-native-gesture-handler";

const Prices = () => {
    const [myData,setMyData]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{
        fetchCoinMarket().then((data) => {
            setMyData(data)
            console.log(data)
        },
        (error) => {
            setError(error);
        })
    },[])
    const renderItem = ({ item }) => (
       <CoinMarketItem image={item.image} name={item.name} currentPrice={item.current_price} currentPriceChange={item.price_change_percentage_24h_in_currency.toFixed(2)}/>
    );
    const itemSeparator = () => (
        <View style={styles.itemSeparator}/>
    );

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.view}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={myData}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View>   
    </SafeAreaView>
  );
};

export default Prices;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:COLORS.black, 
        color: COLORS.white,
        paddingTop: Platform.OS === 'android' ? StatusBar.height : 0
    },
    itemSeparator: {
        height: 1, 
        width: "100%", 
        backgroundColor: COLORS.grey, 
        marginVertical: 12,
    },
    view: {
        backgroundColor:COLORS.black, 
        padding:16,
    },
    tabBar: {
        marginTop: 5,
        marginHorizontal: 5,
        backgroundColor: COLORS.greyDark,
    },
    text: {
        color: COLORS.white,
        fontSize: 16,
    },
});