import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios' 

class Lapor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //samakan dengan field pada entity eclipse
            id:0,
            namaPelapor:"",
            kejadian:"",
            alamat:"",
            keterangan:"",
            gambarBukti:null,
            timeStamp:"",
            resourcePath: {},
          }
    }

    selectPicture = async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        aspect: 1,
        allowsEditing: true,
      });
      if (!cancelled) this.setState({ gambarBukti: uri });
    };
  
    takePicture = async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      const { cancelled, uri } = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
      });
      this.setState({ gambarBukti: uri });
    };

    handleSimpandata (){

        axios.post('http://192.168.18.53:8080/lapor/add/',this.state)
        .then( (response) => {
          console.log(response.data)
          alert(response.data)
          this.props.navigation.navigate("menu")
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
       
      }

  render() {
    return (
        <View>
        <Text> Nama Pelapor</Text>
        <TextInput
            style={styles.TeksInput}
            placeholder="Nama Pelapor"
            onChangeText={(data)=>{this.setState({namaPelapor:data})}}
        />
        <Text> Kejadian </Text>
        <Picker
        style={{ height: 50, width: 150 }}
        onValueChange={(data)=>{this.setState({kejadian:data})}}
      >
        <Picker.Item label="Perampokan" value="Perampokan" />
        <Picker.Item label="Bencana" value="Bencana" />
        <Picker.Item label="Pembunuhan" value="Pembunuhan" />
      </Picker>

        <Text> Alamat </Text>
        <TextInput
            style={styles.TeksInput}
            placeholder="Alamat"
            onChangeText={(data)=>{this.setState({alamat:data})}}
        />

        <Text> Keterangan </Text>
        <TextInput
            style={styles.TeksInput}
            placeholder="Keterangan"
            onChangeText={(data)=>{this.setState({keterangan:data})}}
        />

        <Image style={styles.image} source={{ uri: this.state.gambarBukti}} />
        <View style={styles.row}>
          <Button onPress={this.selectPicture}>Gallery</Button>
          <Button onPress={this.takePicture}>Camera</Button>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleSimpandata.bind(this)}><Text style={styles.text}>Simpan</Text></TouchableOpacity> 
        {/* <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputData()}}><Text style={styles.text}>Simpan</Text></TouchableOpacity> */}
    </View>
    )
  }
}

export default Lapor

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    button: {
      width: 250,
      height: 60,
      backgroundColor: '#3740ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom:12    
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      color: '#fff'
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    image: { 
      width: 100, 
      height: 100, 
      backgroundColor: 'gray' },
  });