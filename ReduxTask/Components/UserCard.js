import React from 'react';
import { StyleSheet } from 'react-native';

export default UserCard = ({item}) => {
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
          <Text style={{textAlign: 'center', fontSize: 14}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleDeleteClick(item);
          }}>
          <Text style={{textAlign: 'center', fontSize: 14}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({

});
