import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Graph from './AssignMents/Graph1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={() => navigation.navigate('Graph')}>
        <Text style={styles.buttonText}>Go to Graph</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
        options={{headerShown: false}}
         component={HomeScreen} />
        <Stack.Screen name="Graph"
        options={{headerShown: false}}
        component={Graph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    backgroundColor: 'teal',
    borderRadius: 20,
    width: 200,
    top: 30,
  },

  buttonText: {
    color: 'white',
    lineHeight: 100,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20
  },
});