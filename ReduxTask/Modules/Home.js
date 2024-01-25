import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, deleteData, increment} from '../Services/FormSlice';
import UserCard from '../Components/UserCard';

const HomeScreen = ({navigation}) => {
  const count = useSelector(state => state.form.value);
  const userDatalist = useSelector(state => state.form.data);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  handleEditClick = cardItem => {
    navigation.navigate('Form');
    navigation.navigate('Form', {
      item: cardItem,
      isEditOn: true,
    });
  };

  handleDeleteClick = cardItem => {
    dispatch(deleteData(cardItem))
  }

  useEffect(() => {
    setData([]);
  }, []);

  return (
    <View style={styles.container}>
      {userDatalist.length == 0 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>
            List is empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={userDatalist}
          keyExtractor={item => item.id}
          renderItem={({item}) => <UserCard item = {item} editClick = {handleEditClick} deleteClick={handleDeleteClick}/>}
         />
      )}
      <Button
        title="Add Data"
        onPress={() =>
          navigation.navigate('Form', {
            item: {},
            isEditOn: false,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  emptyView: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 20,
    width: '100%',
    marginLeft: 15,
  },
  threeDotPopUpview: {
    backgroundColor: 'white',
    flex: 0.4,
    justifyContent: 'center',
  },
  EditView: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'center',
  },
  deleteview: {},
});

export default HomeScreen;
