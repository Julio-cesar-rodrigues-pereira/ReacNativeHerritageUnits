import React,{Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const Head = ()=>{
    return(
        <View>
            <Text style={styles.Text}>Herritage Units Brazil!</Text>
        </View>
    ) 

}
export default Head;
const styles = StyleSheet.create({
  Text:{
    color:"blue",
    textAlign:"center",
    fontSize:25,
    marginTop: 35,


  }  
})
