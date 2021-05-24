import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

class Menu extends Component {
  render() {
    return (
      <View>
     <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("lapor")}}><Text style={styles.text}>Lapor</Text></TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("history")}}><Text style={styles.text}>History</Text></TouchableOpacity>
      </View>

      
    )
  }
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "grey",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  button: {
    width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
  },
});