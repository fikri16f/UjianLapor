import React, { Component } from 'react'
import {SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import axios from 'axios'
class History extends Component {
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

componentDidMount(){
  this.getData();
 }

 componentDidUpdate(){
   this.getData();
 }

 getData = ()=>{
  axios.get('http://192.168.18.53:8080/lapor/add/',this.state)
.then((response)=>{
  //console.log(response)
    let data = response.data;
    this.setState({data:data});
})
.catch(function(error){
console.log(error);
})
}

  render() {
    return (
      <View>
        <Text style={styles.title}>Status : {item.kejadian}</Text>
        <Text style={styles.title}>Jam : {item.timeStamp}</Text>
        <Text style={styles.title}>Alamat : {item.alamat}</Text>
        <Text style={styles.title}>Gambar : {item.gambarBukti}</Text>
      </View>
    )
  }
}

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal:10,
    marginVertical:10
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    margin: 20
  }

});