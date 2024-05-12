import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const AdvertDetailsScreen = ({ route }) => {
  const { advert } = route.params;  // Directly using the passed advert object

  if (!advert) {
    return (
      <View style={styles.container}>
        <Text>No advert found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {advert.profilePicture && (
        <Image source={{ uri: advert.profilePicture }} style={styles.image} />
      )}
      <Text style={styles.companyName}>{advert.username}</Text>
      <Text style={styles.adTitle}>{advert.adTitle}</Text>
      <Text style={styles.adContent}>{advert.adContext}</Text>
    </View>
  );
}

export default AdvertDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1678',
    marginBottom: 10
  },
  adContent: {
    fontSize: 16,
    color: '#666'
  }
});
