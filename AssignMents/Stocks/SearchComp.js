import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({onSearch}) => {
  const [isFocused, setIsFocused] = useState(false);
  console.log('Rendering: Search Bar');
  let execNumber = 0;
  let counter = 0;
  
  const handleSearch = (text) => {
    console.log(text)
    execNumber += 1;
    delayedCallback(() => {
      if (execNumber == counter) {
        console.log('debounced')
        onSearch(text);
      }
    });
  }

  function delayedCallback(callback) {
    setTimeout(() => {
      counter += 1;
      callback();
    }, 500);
  }
  

  return (
    <View style={{...styles.container, padding: isFocused? 14 : 4}}>
       
         <TextInput
          style={styles.input}
          placeholder="Search Here"
          // value={searchText}
          onChangeText={(text) => handleSearch(text)}
          onFocus={(
          ) => {setIsFocused(true)}}
          onBlur={() => {setIsFocused(false)}}
         />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    flex: 1,
    padding: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginRight: 0,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
