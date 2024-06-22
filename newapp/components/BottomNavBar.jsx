// BottomNavBar.js

import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const BottomNavBar = ({navigation}) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <Image style={styles.icons} source={require('../assests/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icons} source={require('../assests/create.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icons} source={require('../assests/heart.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginHorizontal: 25,
    marginBottom: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  icons: {
    width: 24,
    height: 24,
  },
});

export default BottomNavBar;
