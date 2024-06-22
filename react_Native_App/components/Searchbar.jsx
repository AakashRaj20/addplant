import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const Searchbar = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assests/search.png')} style={styles.search} />
      <TextInput
        style={styles.input}
        placeholder="Search Plants"
        placeholderTextColor="black"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '75%',
  },
  search: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: 'black',
  },
});

export default Searchbar;
