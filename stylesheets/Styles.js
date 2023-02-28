import { TextInput } from 'react-native';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center', 
    },
   text:{
    fontSize: 50,
    color: '#fcc',
   },
   textInput:{
    

   },
   form:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fc1',
    width: 410,
    height:320,
    
   },

   TextiMput:{
    fontSize: 20,
    backgroundColor: '#bba',
    marginBottom: 20,
    width: 260,
    height: 50
   },
   footer:{
      backgroundColor:  '#f1c',
      height: 70,
      width:410

   },
   footerPosition:{
      bottom:0,
      paddingTop:0,
   }
})

