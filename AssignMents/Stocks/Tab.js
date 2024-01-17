import * as React from 'react';
import {View, useWindowDimensions, FlatList, Text, TouchableOpacity} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import StockCards from './StockValueCard';
import SearchBar from './SearchComp';
import {useState} from 'react';

const DATA = [
 {
    img: 'stock1.jpg',
    cryptoshortname: 'BTC',
    price: 4500,
    capital: 123456789,
    netgrowth: 5,
  },
  {
    img: 'stock2.jpg',
    cryptoshortname: 'ETH',
    price: 3000,
    capital: 733298729,
    netgrowth: -2,
  },
  {
    img: 'stock3.jpg',
    cryptoshortname: 'AAPL',
    price: 150,
    capital: 8423982789,
    netgrowth: 1,
  },
  {
    img: 'stock4.jpg',
    cryptoshortname: 'GOOGL',
    price: 2500,
    capital: 4672362848,
    netgrowth: -1,
  },
  {
    img: 'stock5.jpg',
    cryptoshortname: 'AMZN',
    price: 3200,
    capital: 83758353983,
    netgrowth: 8,
  },
  {
    img: 'stock1.jpg',
    cryptoshortname: 'BTC',
    price: 4500,
    capital: 123456789,
    netgrowth: 5,
  },
  {
    img: 'stock2.jpg',
    cryptoshortname: 'ETH',
    price: 3000,
    capital: 733298729,
    netgrowth: -2,
  },
  {
    img: 'stock3.jpg',
    cryptoshortname: 'AAPL',
    price: 150,
    capital: 8423982789,
    netgrowth: 1,
  },
  {
    img: 'stock4.jpg',
    cryptoshortname: 'GOOGL',
    price: 2500,
    capital: 4672362848,
    netgrowth: -1,
  },
  {
    img: 'stock5.jpg',
    cryptoshortname: 'AMZN',
    price: 3200,
    capital: 83758353983,
    netgrowth: 8,
  },
  {
    img: 'stock1.jpg',
    cryptoshortname: 'BTC',
    price: 4500,
    capital: 123456789,
    netgrowth: 5,
  },
  {
    img: 'stock2.jpg',
    cryptoshortname: 'ETH',
    price: 3000,
    capital: 733298729,
    netgrowth: -2,
  },
  {
    img: 'stock3.jpg',
    cryptoshortname: 'AAPL',
    price: 150,
    capital: 8423982789,
    netgrowth: 1,
  },
  {
    img: 'stock4.jpg',
    cryptoshortname: 'GOOGL',
    price: 2500,
    capital: 4672362848,
    netgrowth: -1,
  },
  {
    img: 'stock5.jpg',
    cryptoshortname: 'AMZN',
    price: 3200,
    capital: 83758353983,
    netgrowth: 8,
  },
];

const stockData = DATA.map((item, index) => ({index, ...item}));
const renderItem = ({item}) => <TouchableOpacity>
  
</TouchableOpacity>;

const FirstRoute = () => {
  // const [filteredData, setFilteredData] = useState(DATA);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 60, backgroundColor: 'orange'}}>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={stockData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const SecondRoute = () => <View style={{flex: 1}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabComponent() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Market'},
    {key: 'second', title: 'Recent'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: 20}}
    />
  );
}
