import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Image style={styles.img} source={require('../assests/logo.png')} />
      <Image style={styles.img} source={require('../assests/user.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: '100%',
    elevation: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  img: {
    width: 40,
    height: 40,
  },
});

export default Header;
