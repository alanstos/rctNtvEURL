import React, { Component , PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import Criar from './src/components/Criar';
import Dezmais from './src/components/Dezmais';

export default class rctNtvEURL extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop:50}}>
        <Scene key='Principal' component={Principal} initil title="E-url" />
        <Scene key='Criar' component={Criar} initil title="Criar" />
        <Scene key='Dezmais' component={Dezmais} initil title="Dez mais" />
      </Router>
    );
  }
}

AppRegistry.registerComponent('rctNtvEURL', () => rctNtvEURL);
