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
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userAction } from '../redux/Action'
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props)
    }

    handleLogin(){
        axios.get(`http://192.168.18.53:8080/user/${this.props.dataNama}`)
        .then((response)=>{
            alert("Selamat Datang " + response.data.nama)
            this.props.userAction("id",response.data.id)
            this.props.userAction("nama",response.data.nama)
            this.props.userAction("email",response.data.email)
            this.props.userAction("hp",response.data.hp)
            this.props.userAction("alamat",response.data.alamat)
            this.props.userAction("isLogin",true)

            this.props.navigation.replace("menu")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View>
                <Text> Nama </Text> 
                <TextInput
                    style={styles.TeksInput}
                    placeholder="Input Nama"
                    onChangeText={(value)=>{this.props.userAction("nama",value)}}
                />                
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.handleLogin()}}><Text style={styles.text}>Login</Text></TouchableOpacity>
            
            </View>
    // <View style={styles.container}>
      
 
      
    //   <View style={styles.inputView}>
    //     <TextInput
    //       style={styles.TextInput}
    //       placeholder="Email"
    //       placeholderTextColor="red"
    //     //   onChangeText={(email) => setEmail(email)}
    //     onChangeText={(value)=>{this.props.userAction("email",value)}}
    //     />
      
    //     <TextInput
    //       style={styles.TextInput}
    //       placeholder="Password."
    //       placeholderTextColor="red"
    //       secureTextEntry={true}
    //     //   onChangeText={(password) => setPassword(password)}
    //     onChangeText={(value)=>{this.props.userAction("password",value)}}
    //     />
    //   </View>
 
    //   <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.handleLogin()}}>
    //     <Text style={styles.loginText} >LOGIN</Text>
    //   </TouchableOpacity>
    // </View>
  );
            
    }
}

const mapStateToProps = (state) => ({
    dataNama:state.userReducer.nama
})

const mapDispatchToProps = {
    userAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });