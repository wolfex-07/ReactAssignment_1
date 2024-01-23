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
import {decrement, deleteData, increment} from './FormSlice';

const HomeScreen = ({navigation}) => {
  const count = useSelector(state => state.form.value);
  const userDatalist = useSelector(state => state.form.data);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  handleItemClick = item => {
    console.log('called', item);
    navigation.navigate('Form');
    navigation.navigate('Form', {
      item: item,
      isEditOn: true,
    });
  };

  handleDeleteClick = item => {
    console.log('delete',item)
    dispatch(deleteData(item))
  }

  useEffect(() => {
    setData([]);
  }, []);

  return (
    <View style={styles.container}>
      {userDatalist.length == 0 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>
            List is empty {userDatalist.length}
          </Text>
        </View>
      ) : (
        <FlatList
          data={userDatalist}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                handleItemClick(item);
              }}>
              <View style={styles.item}>
                <View style={{flex: 0.8, padding: 2}}>
                  <Text style={{color: 'white'}}>{item.email}</Text>
                  <Text style={{color: 'white'}}>{item.phone}</Text>
                  <Text style={{color: 'white'}}>{item.dob}</Text>
                </View>
                <View style={styles.threeDotPopUpview}>
                  <TouchableOpacity 
                   onPress={() => {
                    handleItemClick(item);
                   }}
                   style={styles.EditView}>
                    <Text style={{textAlign: 'center', fontSize: 14}}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    handleDeleteClick(item);
                   }}>
                    <Text style={{textAlign: 'center', fontSize: 14}}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
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
