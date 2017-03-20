import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.estiloTextoMain}>
          ENCURTADOR DE URL
        </Text>

        <TouchableOpacity style={ styles.estiloBotao } onPress={ _onPressCriar }>
          <Text style={styles.estiloTexto}>Criar</Text>
        </TouchableOpacity>   

        <TouchableOpacity style={ styles.estiloBotao } onPress={ _onPressDezMais }>
          <Text style={styles.estiloTexto}>Dez mais</Text>
        </TouchableOpacity>                
      </View>
    );
  }
}

const _onPressCriar = () => {
  Actions.Criar();
}

const _onPressDezMais = () => {
   Actions.Dezmais();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f8dd6',
  },
  estiloTextoMain : {
    color: '#FFF',
    fontWeight : 'bold',
    fontSize: 20,
    borderColor : '#FFF',
    borderWidth : 2,
    padding : 14
  },  
  estiloBotao : {
    marginTop : 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 5,    
  },
  estiloTexto : {
    color: '#1f8dd6',
    fontSize: 16,
    fontWeight : 'bold',
  },    
  
});

