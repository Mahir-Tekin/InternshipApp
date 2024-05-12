import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import advertsData from "../data/Adverts.json";  // Assuming the file export is default and contains an object with an 'adverts' key

const AdvertsScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('AdvertDetail', { advert: item })}  
      style={styles.adContainer}>
      <View style={styles.header}>
        <Image source={{ uri: item.profilePicture }} style={styles.profilePic} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Text style={styles.adTitle}>{item.adTitle}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search ads..."
      />
      <FlatList
        data={advertsData.adverts}  
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchBar: {
    height: 40,
    marginHorizontal: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  adContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  adTitle: {
    fontSize: 18,
    marginTop: 5,
  }
});

export default AdvertsScreen;
