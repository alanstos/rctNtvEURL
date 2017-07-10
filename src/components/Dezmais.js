import React, { Component, PropTypes } from 'react';
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

import Spinner from 'react-native-loading-spinner-overlay';

export default class Dezmais extends Component {

  constructor(props) {
    super(props);
    this.state = { lista : [],visible: false };
  }

  componentWillMount() {

    this.setState({visible: !this.state.visible});

    fetch("http://e-url-alan.herokuapp.com/encurtar/listar", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'}
        }).then((responseData) => {
          if (responseData.status == 200) {
            (responseData.json()).then((response) => {
              console.log(response);

              this.setState( {lista: response,visible: !this.state.visible });

            });
          }else {
            this.setState({visible: !this.state.visible});
            Alert.alert('Dados inválidos', responseData.status.toString());
          }
    }).catch((error) => {
        console.log(error);
        this.setState({visible: !this.state.visible});
    }).done();

  }

  render() {
    return (
        <ScrollView>
          <Spinner visible={this.state.visible} textContent={"Carregando..."} textStyle={{color: '#000'}} />

          {
            this.state.lista.map( (urls) =>
              (<Item key={urls.alias} urls={urls} />)
            )
          }

        </ScrollView>
    );
  }
}
