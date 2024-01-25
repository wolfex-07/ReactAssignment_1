import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';

export default UserCard = ({item, editClick, deleteClick}) => {
  const [isEditViewOpen, setOptionClick] = useState(false);

  handleThreeDotClick = () => {
    setOptionClick(true)
  }

  handleEditClick = (item) => {
    setOptionClick(false)
    editClick(item)
  }

  return (
    <View style={styles.item}>
      <View style={{flex: 0.8, padding: 2}}>
        <Text style={{color: 'white'}}>{item.email}</Text>
        <Text style={{color: 'white'}}>{item.phone}</Text>
        <Text style={{color: 'white'}}>{item.dob}</Text>
      </View>
      {isEditViewOpen ? (
         <View style={styles.threeDotPopUpview}>
          <TouchableOpacity
            // onPress={() => editClick(item)}
            onPress={ () => handleEditClick(item)}
            style={styles.EditView}>
            <Text style={{textAlign: 'center', fontSize: 14}}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteClick(item)}>
            <Text style={{textAlign: 'center', fontSize: 14}}>Delete</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 0.2, padding: 0}}>
        <TouchableOpacity onPress={handleThreeDotClick}>
        <Image 
        style = {styles.imgStyle} 
        // src = 'https://static.thenounproject.com/png/2854151-200.png'
        src = 'https://w7.pngwing.com/pngs/376/124/png-transparent-three-dots-ui-set-icon-thumbnail.png'
        resizeMode='contain'
        />
        </TouchableOpacity>

      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    //padding: 2,
    height: 30,
    width: 20,
    alignSelf: 'flex-end',
    // backgroundColor: 'green',
  },
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
    backgroundColor: 'black',
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
    // transform: 'scaleX(1)'
    transform: 'scaleY(1)'
  },
  EditView: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'center',
  },
  deleteview: {},
});
