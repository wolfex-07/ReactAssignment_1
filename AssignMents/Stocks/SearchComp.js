import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Call the parent's onSearch callback with the current searchText
    onSearch(searchText);
  }, [searchText, onSearch]);

  return (
    <View style={styles.container}>
       
         <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
         />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    // backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    margin: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
});

export default SearchBar;
