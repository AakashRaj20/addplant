// PlantDetailsScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import PlantDetailHeader from '../components/PlantDetailHeader';
import BottomNavBar from '../components/BottomNavBar';

const PlantDetailsScreen = ({route}) => {
  const {plant} = route.params;
  //console.log(plant.image);
  return (
    <View style={styles.container}>
      <PlantDetailHeader />
      <Image style={styles.plantImg} source={{uri: plant.image}} />
      <Text style={styles.plantName}>{plant.plant_name}</Text>
      <View style={styles.locationContainer}>
        <Image
          style={styles.locationImg}
          source={require('../assests/location.png')}
        />
        <Text style={styles.location}>{plant.location}</Text>
      </View>
      <ScrollView>
        <Text style={styles.description}>{plant.description}</Text>
        <Pressable style={styles.btn} title="Submit">
          <Text style={styles.btnText}>Submit</Text>
        </Pressable>
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
  },
  plantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'start',
    color: 'black',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: 'black',
    marginBottom: 32,
  },
  plantImg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 17,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'start',
  },
  locationImg: {
    width: 14,
    height: 16,
    marginRight: 5,
  },
  location: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: '#00000066',
    marginBottom: 15,
  },
  btn: {
    backgroundColor: '#009444',
    borderRadius: 10,
    padding: 18,
    marginBottom: 100,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PlantDetailsScreen;
