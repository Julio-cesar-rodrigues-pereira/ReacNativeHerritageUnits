import React from 'react';

import {Text, View, Button} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { styles,text } from "./stylesheets/Styles";

import Icon from 'react-native-vector-icons/MaterialIcons';


 export default function BottomTabNavigator() {
return (    
<View style={styles.footer}>
<Icon
  name='location-on'
  type='evilicon'
  color='#517fa4'
  size={70}
/>

</View>
 
       
);

}
