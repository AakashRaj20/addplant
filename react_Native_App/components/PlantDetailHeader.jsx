import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PlantDetailHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            style={styles.navbtn}
            source={require('../assests/backbtn.png')}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>Plant Information</Text>
      </View>
      <Image style={styles.user} source={require('../assests/user.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  user: {
    width: 44,
    height: 44,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  navText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  navbtn: {
    width: 24,
    height: 24,
  },
});

export default PlantDetailHeader;
