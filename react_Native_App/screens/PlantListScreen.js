import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import BottomNavBar from '../components/BottomNavBar';
import axios from 'axios';

const PlantListScreen = ({navigation}) => {
  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    try {
      const res = await axios.get(
        'https://addplant-zluv.vercel.app/api/v1/plants',
      );
      setPlants(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch plant data from API
    fetchPlants();
  }, []);

  const handlePlantPress = plant => {
    navigation.navigate('PlantDetails', {plant});
  };

  const renderPlantItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handlePlantPress(item)}>
      <Image source={{uri: item?.image}} style={styles.cardImage} />
      <View style={styles.cardTextBox}>
        <Text style={styles.plantName}>{item.plant_name}</Text>
        <Text style={styles.plantDesc}>{`${item.description.substring(
          0,
          60,
        )}....`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.filterContainer}>
        <Searchbar />
        <Image
          style={styles.filterImage}
          source={require('../assests/filter.png')}
        />
      </View>
      <Text style={styles.title}>List of Plants</Text>
      <View style={styles.cardContainer}>
        <FlatList
          data={plants}
          renderItem={renderPlantItem}
          keyExtractor={item => item.plant_id}
          numColumns={2}
        />
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: 'white',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  card: {
    width: 155,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  plantName: {
    fontWeight: '500',
    marginBottom: 5,
    color: 'black',
    textTransform: 'capitalize',
  },
  plantDesc: {
    color: 'gray',
    fontSize: 9,
    lineHeight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: 'black',
  },
  cardImage: {
    width: 155,
    height: 137,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
  },
  cardTextBox: {
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  filterImage: {
    width: 65,
    height: 65,
  },
});

export default PlantListScreen;
