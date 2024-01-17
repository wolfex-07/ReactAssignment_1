import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
    TouchableOpacity,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StockHeaderView = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.headerViewBg}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              style={styles.circularButton}
              onPress={() => alert('This is a button!')}>
              <Image
                style={styles.dropdownImg}
                
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rightHeaderButtonsBgView}>
            <TouchableOpacity
              style={styles.circularbuttonWithLightBg}
              onPress={() => alert('This is a button!')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rightHeadersButton}
              onPress={() => alert('This is a button!')}>
              <Image
                style={styles.dropdownImg}
               
              />
            </TouchableOpacity>
            <Image
              style={styles.rightHeadersButton}
              
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StockHeaderView;

const styles = StyleSheet.create({
  headerViewBg: {
    // backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: 60,
    borderBottomColor: '#eeeff3',
    borderBottomWidth: 1,
  },
  circularButton: {
    top: 10,
    left: 20,
    backgroundColor: '#6272eb',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
    rightHeaderButtonsBgView: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginRight: 0,
    height: 58,
  },

  rightHeadersButton: {
    top: 10,
    backgroundColor: '#6272eb',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  dropdownImg: {
    marginTop: 12,
    marginLeft: 0,
    height: 15,
    width: 18,
    alignSelf: 'center',
    backgroundColor: 'white',
    resizeMode: 'contain',
  },
  buttonText: {
    lineHeight: 37,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '500',
    color: '#7682ee',
  },
  circularbuttonWithLightBg: {
    top: 10,
    backgroundColor: '#e9ebfe',
    height: 40,
    width: 40,
    borderRadius: 20,
    color: 'black',
  },
});
