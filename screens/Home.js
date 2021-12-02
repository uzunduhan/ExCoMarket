import React from "react";
import { Text, SafeAreaView } from "react-native";
  
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
    </SafeAreaView>
  );
};
  
export default Home;