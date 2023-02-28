import BottomTabNavigator from './BottomTabNavigator';

import { useState} from 'react';

import {View, TextInput, TouchableOpacity, Alert, Button} from 'react-native';

import { Icon } from 'react-native-elements';

import { styles,text } from "./stylesheets/Styles";





export function Login(){
const [passwordSecure, setPasswordSecure] = useState(true);
const [username, setUsername] = useState(true);

const [password, setPassword] = useState(true);


function handlePassword(){
    alert(passwordSecure);

}



    return(

       <View style={styles.form}>
          <TextInput style={styles.TextiMput}
            placeholder = {'usuário'}
            textContentType ='emailAddress'
            name="username"
            value={username}

           />
        <TextInput style={styles.TextiMput}
            secureTextEntry={passwordSecure}
            placeholder = {'senha'}
            textContentType ='password'
            name='password'
            value={password}
           

           />
        <TouchableOpacity onPress={() =>{ setPasswordSecure(!passwordSecure);}}>
            <Icon name ='eye' type='font-awesome' size={20} color='white'/>
        </TouchableOpacity> 
        <Button title='Entrar' onPress={() =>handlePassword()}/>

        <BottomTabNavigator style={styles.footerPosition} />
       </View> 
       
       
    );
}
