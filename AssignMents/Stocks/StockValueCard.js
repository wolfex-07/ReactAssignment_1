import React from 'react';
import {Text, View, StyleSheet, Image, Touchable, TouchableOpacity} from 'react-native';
import { memo } from 'react';


const StockCards = ({ stock, toSetPrice }) => {
  console.log('Rendering: Stocks Card', stock.price);

  const handleClick = (data) => {
    toSetPrice(data.price);
  };

  return (
    <TouchableOpacity onPress={() => handleClick(stock)}>
      <View style={styles.container}>
        <View style={styles.stockContainer}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUCiW7IU9ZYK8KRi_1JyMX-iW7wjtxjE3NW8Zmxq-xQ&s',
            }}
            style={{ height: 20, width: 20, marginRight: 6 }}
          />
          <DisplayUpToThreeChars text={stock.cryptoshortname} />
        </View>
        <Text style={styles.price}>${stock.price}</Text>
        <Text style={styles.change}>{stock.netgrowth}%</Text>
        <Text style={styles.capital}>${stock.capital}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(StockCards);


const DisplayUpToThreeChars = ({text}) => {
  return <Text>{text.slice(0, 3)}</Text>;
};

const styles = StyleSheet.create({
  container: {
    height: 50,

    marginHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    justifyContent: 'space-between',
    //backgroundColor: 'green',
  },
  stockContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    // backgroundColor: 'white',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 3,
  },
  change: {
    // backgroundColor: '',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 2,
    color: 'green',
  },
  capital: {
    // backgroundColor: 'blue',
    alignSelf: 'center',
    textAlign: 'left',
    flex: 5,
  },
});

// memo(StockCards);