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

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

export default class Principal extends Component {

  componentDidMount() {
    AdMobRewarded.setTestDeviceID('EMULATOR');
    AdMobRewarded.setAdUnitID('ca-app-pub-2112706098723938/5545526807');



    AdMobRewarded.requestAd((error) => error && console.log(error));
  }

  componentWillUnmount() {
    AdMobRewarded.removeAllListeners();
  }

  showRewarded() {
    AdMobRewarded.showAd((error) => error && console.log(error));
  }


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
    fontSize: 22,
    borderColor : '#FFF',
    borderWidth : 2,
    padding : 16
  },
  estiloBotao : {
    marginTop : 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
    width:200,
    alignItems: 'center'
  },
  estiloTexto : {
    color: '#1f8dd6',
    fontSize: 16,
    fontWeight : 'bold',
  },

});
