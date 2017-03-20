import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

 class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.item} >
          <View >
          	<Text>Alias: {this.props.urls.alias}</Text>
            <Text>URL: {this.props.urls.urlFinal}</Text>
            <Text>Qtd. Acesso: {this.props.urls.qtdAcesso}</Text>
            <Text>Original: {this.props.urls.urlOriginal}</Text>
          </View>
        </View>
        
    );
  }
}


const styles = StyleSheet.create({
    item:{
      borderBottomWidth :2, 
      borderColor:'#CCC',
      paddingBottom: 5,
      paddingTop: 5,
    }
});

export default Item;