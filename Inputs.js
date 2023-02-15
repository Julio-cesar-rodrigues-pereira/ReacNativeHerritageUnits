import Head from './Head';
import React, {Component} from "react";
import {View,Text, TouchableOpacity, TextInput, StyleSheet, Button, Alert} from 'react-native'

class Inputs extends Component {
    render(){
        return(
        <View style = {styles.conatiner}>
            <Head />
            <TextInput style = {styles.Input} placeholder="Usario"/>
            <TextInput style = {styles.Input} placeholder="senha" textContentType='password'/>
            <TouchableOpacity>
                <Button
                    title="entrar"
                    onPress={()=>{
                        Alert.alert('Login Button Pressed');
                    }}
                    />
                
                
                 
            </TouchableOpacity>
        </View>
        )  
    }
}
export default Inputs;

const styles = StyleSheet.create({
    container:{
        paddingTop:35,
        marginTop:35,

    
    },
    Input:{
        margin:35,
        borderColor:'#bbf1cc',
        borderWidth: 1
    }
})
