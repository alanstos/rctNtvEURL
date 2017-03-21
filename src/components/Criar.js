import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import axios from 'axios';

import {Actions, Scene, Router} from 'react-native-router-flux';

export default class Criar extends Component {

  constructor(props) {
    super(props);
    this.state = { url: '', alias: '', urlShort:'' };
  }

  _cadastrar = () => {

    console.log(this.state.url);
    console.log(this.state.alias);

    
    var dado = {
        url: this.state.url,
        CUSTOM_ALIAS: this.state.alias
        }; 

        console.log(dado)   ;

        console.log(  JSON.stringify( dado ) )   ;

    fetch("http://e-url-alan.herokuapp.com/encurtar/criacao", {
        method: "put",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( { 'url' : 'teste123', 'CUSTOM_ALIAS' : '123' ,} )
      })
    .then((responseData) => {
        console.log(responseData);
        if (responseData.status == 200) {
          (responseData.json()).then((response) => {

            console.log(response);
            
              this.setState( {urlShort: response.url });

          });
        }else {Alert.alert('Dados inválidos', responseData.status.toString())}
    }).catch((error) => {
        console.log(error);
    }).done();
  }  

  cadastrar = () => {
      Alert.alert('url', this.state.url + ' ' + this.state.alias);
      
  }  


  render() {
    return (

        <View>
          <View>
            <Text>URL</Text>
            <TextInput style={[styles.input]}
              placeholder="Digite aqui seu link"
              onChangeText={(text) => this.setState({url: text})}
            />   

            <Text>Alias</Text>
            <TextInput style={[styles.input]}
              placeholder="Seu alias personalizado"
              onChangeText={(text) => this.setState({alias: text})}
            />               

            <Button color={'#ffcc00'} title={'Gerar'} onPress={() => this._cadastrar() } />   
          </View>

          <View>
            <Text>{this.state.urlShort}</Text>
          </View>                    
        </View>          
    );
  }



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderColor: 'transparent',
  },
  form: {
    margin: 20
  },
  label: {
    color:'#ffcc00',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center'
  }
});

