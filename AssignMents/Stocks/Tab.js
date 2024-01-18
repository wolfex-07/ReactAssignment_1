import * as React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import StockCards from './StockValueCard';
import SearchBar from './SearchComp';
import {useState, useMemo} from 'react';
import {memo} from 'react';
import StockDataContext from './Context';
import {useContext} from 'react';

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

const FirstRoute = () => {
  const [_, setPrice] = useContext(StockDataContext);
  const [mainData, setData] = useState(stockData);

  const renderItem = ({item}) => (
    <StockCards stock={item} toSetPrice={value => handlePriceSet(value)} />
  );

  console.log('Rendering: Tab Bar 1.');
  const handleSearch = text => {
    const dataCopy = stockData.filter(item =>
      item.cryptoshortname.toLowerCase().includes(text.toLowerCase()),
    );
    setData(dataCopy);
  };

  const handlePriceSet = value => {
    console.log('value at parent', value);
    setPrice(value);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{height: 60, backgroundColor: '#eef0f2'}}>
        <SearchBar onSearch={text => handleSearch(text)} />
      </View>
      {
        // console.log('rerenders view')
      }
      <FlatList
        data={mainData}
        renderItem={renderItem}
        keyExtractor={item => item.index}
      />
    </View>
  );
};

memo(FirstRoute);

const SecondRoute = () => <View style={{flex: 1}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBar}
    labelStyle={styles.label}
  />
);

export default function TabComponent() {
  const layout = useWindowDimensions();
  console.log('tabcomponent renders');
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Market'},
    {key: 'second', title: 'Recent'},
  ]);

  return (
    <TabView
      style={styles.tabView}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: 20}}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  tabView: {
    margin: 20,
    marginTop: 20,
    marginBottom: 0,
    padding: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderRadius: 20,
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 0,
    overflow: 'hidden', // Change the background color as needed
  },
  indicator: {
    backgroundColor: 'lightgrey', // Change the indicator color as needed
  },
  label: {
    color: 'black', // Change the text color as needed
  },
});

memo(TabComponent);
