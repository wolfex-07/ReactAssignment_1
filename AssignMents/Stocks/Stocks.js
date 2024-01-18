import React, { createContext, useContext, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView } from 'react-native-tab-view';
import TabComponent from './Tab';
import StockHeaderView from './Header';
import GraphCard from './GraphCard';
import StockDataContext from './Context';

function StockApp() {
  const [price1, setPrice1] = useState('No Balance');
  return (
    <StockDataContext.Provider value={[price1, setPrice1]}>
      <SafeAreaView style={styles.container}>
        <StockHeaderView />
        <GraphCard />
        <TabComponent />
      </SafeAreaView>
    </StockDataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef0f2',
  },
});

export default StockApp;
