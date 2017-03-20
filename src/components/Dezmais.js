import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Item from './Item';

export default class Dezmais extends Component {

  constructor(props) {
    super(props);
    this.state = { lista : [] };
  }

  componentWillMount() {

    fetch("http://e-url-alan.herokuapp.com/encurtar/listar", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'}
        }).then((responseData) => {
          if (responseData.status == 200) {
            (responseData.json()).then((response) => {
              console.log(response);

              this.setState( {lista: response });
              
            });
          }else {
            Alert.alert('Dados inválidos', responseData.status.toString())
          }
    }).catch((error) => {
        console.log(error);
    }).done();    
    
  }

  render() {
    return (
        <ScrollView>
          
          { 
            this.state.lista.map( (urls) => 
              (<Item key={urls.alias} urls={urls} />) 
            ) 
          }

        </ScrollView>
    );
  }
}
