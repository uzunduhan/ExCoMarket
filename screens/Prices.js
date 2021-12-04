import React, {useEffect, useState, useLayoutEffect} from "react";
import {SafeAreaView, FlatList, View} from "react-native";
import {fetchCoinMarket} from "../utils/api";
import {CoinMarketItem} from "../components/CoinMarketItem";


const Prices = ({navigation}) => {
    useLayoutEffect(() => {
      navigation.setOptions({
          
      })
    }, [navigation])
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h'
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
        <View style={{height: 1, width: "100%", backgroundColor: "#EDEDED", marginVertical: 12}}/>
    );
  return (
    <SafeAreaView style={{ flex: 1,padding:16}}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={myData}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeparator}
            keyExtractor={item => item.id}
        >
        </FlatList>
    </SafeAreaView>
  );
};

export default Prices;
