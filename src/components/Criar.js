import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

import axios from 'axios';

import {Actions, Scene, Router} from 'react-native-router-flux';

import Spinner from 'react-native-loading-spinner-overlay';

export default class Criar extends Component {

  constructor(props) {
    super(props);
    this.state = { url: '', alias: '', urlShort:'',visible: false };
  }

  _cadastrar = () => {

    if (this.state.url == ''){
      Alert.alert('Ops', 'Eu preciso da URL');

    }else { 

      console.log('URL ok');

      let dado = {
          url: this.state.url,
          CUSTOM_ALIAS: this.state.alias
          }; 

      console.log(dado);

      this.setState({visible: !this.state.visible});

      fetch("http://e-url-alan.herokuapp.com/encurtar/criacao", {
          method: "put",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( dado )
        })
      .then((responseData) => {
          console.log(responseData);
          if (responseData.status == 200) {
            (responseData.json()).then((response) => {

              console.log(response);
              
              this.setState( {urlShort: response.url,visible: !this.state.visible });

            });
          }else {Alert.alert('Dados inválidos', responseData.status.toString())}
      }).catch((error) => {
          console.log(error);
          this.setState({visible: !this.state.visible});
      }).done();

    }
  } 

  render() {
    return (

        <ScrollView style={[styles.form]}>
          <View>
            <Text style={[styles.label]}>URL</Text>
            <TextInput style={[styles.input]}
              placeholder="Digite aqui seu link"
              onChangeText={(text) => this.setState({url: text})}
            />   

            <Text style={[styles.label]}>Alias</Text>
            <TextInput style={[styles.input]}
              placeholder="Seu alias personalizado"
              onChangeText={(text) => this.setState({alias: text})}
            />               

            <Button color={'#2d3e50'} title={'Gerar'} onPress={() => this._cadastrar() } />   
          </View>

          <View style={[styles.form]} >
            <Text style={[styles.urlShort]}>{this.state.urlShort}</Text>
          </View>     

          <Spinner visible={this.state.visible} textContent={"Gerando..."} textStyle={{color: '#000'}} />   
           
        </ScrollView>          
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
  urlShort :{
    fontSize: 16,
    color:'#d11818',
  },
  form: {
    margin: 20
  },
  label: {
    color:'#2d3e50',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center'
  }
});

