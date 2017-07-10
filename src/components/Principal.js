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

    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser',
      (type, amount) => console.log('rewardedVideoDidRewardUser', type, amount)
    );
    AdMobRewarded.addEventListener('rewardedVideoDidLoad',
      () => console.log('rewardedVideoDidLoad')
    );
    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad',
      (error) => console.log('rewardedVideoDidFailToLoad', error)
    );
    AdMobRewarded.addEventListener('rewardedVideoDidOpen',
      () => console.log('rewardedVideoDidOpen')
    );
    AdMobRewarded.addEventListener('rewardedVideoDidClose',
      () => {
        console.log('rewardedVideoDidClose');
        AdMobRewarded.requestAd((error) => error && console.log(error));
      }
    );
    AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication',
      () => console.log('rewardedVideoWillLeaveApplication')
    );

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

      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-2112706098723938/5545526807"
        testDeviceID="EMULATOR"
         didFailToReceiveAdWithError={(error) => console.log(error)}
         />

         <PublisherBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-2112706098723938/9417323202"
  testDeviceID="EMULATOR"
  didFailToReceiveAdWithError={(error) => console.log(error)}
  admobDispatchAppEvent={(error) => console.log(error)} />

        <Text style={styles.estiloTextoMain}>
          ENCURTADOR DE URL
        </Text>

        <Text onPress={this.showRewarded} style={styles.button}>
     Show Rewarded Video and preload next
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
  button: {
    color: '#333333',
    marginBottom: 15,
  },
});
