import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, StyleSheet } from 'react-native';

const ApplicationScreen = () => {
  // Dummy data for applications
  const applications = [
    {
      id: '1',
      username: 'applicant1',
      profilePicture: 'https://via.placeholder.com/150',
      applicationTitle: 'Software Developer Position'
    },
    {
      id: '2',
      username: 'applicant2',
      profilePicture: 'https://via.placeholder.com/150',
      applicationTitle: 'Graphic Designer Role'
    },
    {
      id: '3',
      username: 'applicant3',
      profilePicture: 'https://via.placeholder.com/150',
      applicationTitle: 'Marketing Manager Application'
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.applicationContainer}>
      <View style={styles.header}>
        <Image source={{ uri: item.profilePicture }} style={styles.profilePic} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Text style={styles.applicationTitle}>{item.applicationTitle}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search applications..."
      />
      <FlatList
        data={applications}
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
  applicationContainer: {
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
  applicationTitle: {
    fontSize: 18,
    marginTop: 5,
  }
});

export default ApplicationScreen;
