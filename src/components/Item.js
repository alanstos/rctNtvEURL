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
        <View  >
          <View >
          	<Text>{this.props.urls.alias}</Text>
            <Text>{this.props.urls.urlFinal}</Text>
            <Text>{this.props.urls.qtdAcesso}</Text>
            <Text>{this.props.urls.urlOriginal}</Text>
          </View>
        </View>
        
    );
  }
}


const styles = StyleSheet.create({
    item:{
      flexDirection: 'row',
      borderBottomWidth :2, 
      borderColor:'#CCC',
      paddingBottom: 5,
      paddingTop: 5,
    },
    barraFoto:{
      width: 100, 
      height: 100,
      
    },
    barraDetalhe:{
       padding:5,flex:1
    },    
    tituloDetalhe: {
       fontSize:20, color:'red',fontWeight : 'bold'
    },
    valorDetalhe:{
      fontWeight : 'bold'
    }

});

export default Item;