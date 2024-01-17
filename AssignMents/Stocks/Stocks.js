import React, { createContext, useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabView} from 'react-native-tab-view';
import TabComponent from './Tab';
import StockHeaderView from './Header';
import GraphCard from './GraphCard';



function StockApp() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StockHeaderView/>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'lightgreen', flex: 1}}>
          <GraphCard/>
        </View>
        <View style={{flex: 1}}>
          <TabComponent />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default StockApp;
