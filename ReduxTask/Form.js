import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement,editData,increment, incrementByAmount } from './FormSlice';


const FormScreen = ({ navigation, route }) => {
  const { item, isEditOn } = route.params;
  const [email, setEmail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);
  const [dob, setDob] = useState(item.dob);
  const dispatch = useDispatch()
  
  // const count = useSelector(state => state.form.value)
  
  const saveData = () => {
    const newData = { id: isEditOn ? item.id : Date.now(), email, phone, dob };
    if (isEditOn) {
       dispatch(editData(newData))
    } else {
      dispatch(incrementByAmount(newData))
      dispatch(increment())
    }
    navigation.navigate('Home', { newData });
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{ isEditOn ? 'Edit data':'Add data'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dob}
        onChangeText={(text) => setDob(text)}
      />
      <Button title="Save" onPress={saveData} />
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
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default FormScreen;
