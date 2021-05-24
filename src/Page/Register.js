import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { laporAction, userAction } from '../redux/Action'
import axios from 'axios'



export default class Register extends Component {

constructor(props) {
    super(props);
    this.state = {
        //samakan dengan field pada entity eclipse
        id:0,
        nama:"",
        email:"",
        password:"",
        hp:"",
        alamat:"",
      }

}



// handleInputdata(){
//     axios.post("http://192.168.31.139:8080/user/add/", this.props.dataRegis)
//     .then((response) => {
//         alert(JSON.stringify(response.data));
//         this.props.navigation.navigate("home");
//     }).catch(err => {
//         console.log(err);
//     })
// }

handleInputdata (){

    axios.post('http://192.168.16.31:8080/user/add/',this.state)
    .then( (response) => {
      console.log(response.data)
      alert(response.data)
      this.props.navigation.navigate("home")
    })
    .catch(function (error) {
    // handle error
     console.log(error);
    })
   
  }

    render() {
        return (
            <View>
                <Text> Nama </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nama Lengkap"
                    onChangeText={(data)=>{this.setState({nama:data})}}
                />
                <Text> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(data)=>{this.setState({email:data})}}
                />

                <Text> Password </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(data)=>{this.setState({password:data})}}
                />

                <Text> NO HP </Text>
                <TextInput
                    style={styles.input}
                    placeholder="No.HP"
                    onChangeText={(data)=>{this.setState({hp:data})}}
                />
                <Text> Alamat </Text>
                <TextInput
                    style={styles.input}
                    placeholder="alamat"
                    onChangeText={(data)=>{this.setState({alamat:data})}}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleInputdata.bind(this)}><Text style={styles.text}>Simpan</Text></TouchableOpacity> 
                {/* <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputData()}}><Text style={styles.text}>Simpan</Text></TouchableOpacity> */}
            </View>
        )
    }
}

// const mapStateToProps = (state) => ({
//         dataRegis: state.userReducer
// })

// const mapDispatchToProps = {
//     userAction
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Register)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:20,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    }
  });