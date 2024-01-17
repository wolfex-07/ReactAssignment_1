import { Text, SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import Dots from './Dots';
import ExampleComponent from './axisComponent';
import Xcomponent from './xAxisComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function fetchData() {
    const usersData = [{ id: 1, bloodPressure: 200 }];
    const range = 200;
  
    for (let i = 0; i < range; i++) {
      const x = i - range / 2;
      const bloodPressure = Math.round( 100 * Math.sin((Math.PI * x) / (range / 2)) + 110); // Parabolic function
  
      usersData.push({ id: i, bloodPressure });
    }
  
    return usersData;
  }

const DATA = fetchData();

const Item = ({posn}) => (
    <View style={styles(posn.bloodPressure).item}>
        <Text style = {{textAlign: 'center', color: 'black', fontSize: 0}}>{}</Text>
    </View>
);

export default function Graph({navigation}) {
  return (
    <SafeAreaView style={styles().container}>
      <TouchableOpacity style={styles.buttonStyle1}
      onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
       <ExampleComponent/>
      <View style={styles().Mainview}> 
      <View style = {{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20,borderTopRightRadius: 0, borderBottomColor: 'black', borderBottomWidth: 0.5,flexDirection: 'row'}}>
        
      </View>
      <View style = {{flex: 1, backgroundColor: 'white', borderBottomColor: 'black', borderBottomWidth: 0.5,}}></View>
      <View style = {{flex: 1, backgroundColor: 'white', borderBottomColor: 'black', borderBottomWidth: 0.5,}}></View>
      <View style = {{flex: 1, backgroundColor: 'white', borderBottomColor: 'black', borderBottomWidth:0.5,}}></View>
      <View style = {{flex: 1, backgroundColor: 'white', borderBottomLeftRadius: 20,borderBottomRightRadius: 0}}></View>
      </View>
     <View style = {styles().GraphView}>
      <FlatList
        data={DATA}
        inverted
        // renderItem={({item}) => <Item posn={item}/>}
        renderItem={({item}) => <Dots posn = {item}/>}
        keyExtractor={item => item.id}
        horizontal={true}
        // contentContainerStyle=
       />
     </View>
     <Xcomponent/>
    </SafeAreaView>
  );
}

const styles = (posn) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  Mainview: {
     marginTop: 40,
     position: 'absolute',
     left: 10,
     backgroundColor: 'lightgrey',
     flexDirection: 'column',
     // width: '80%',
     right: 50,
     height: 300,
     borderWidth: 0,
     borderColor: 'black',
     borderTopLeftRadius: 20,
     borderBottomLeftRadius: 20,
     overflow: 'hidden',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  GraphView: {
    position: 'absolute',
    top: 40,
    left: 10,
    //width: '80%',
    right: 50,
    height: 300,
    borderRadius: 0,
    overflow: 'hidden',
  },
  buttonStyle1: {
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
  }
});