import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUs = () => {
  const persons = [
    {
      name: 'Joyce M. Palomera',
      position: 'Founder & CEO',
      image: require('../assets/joyce.jpg'),
      bio: 'Joyce is the visionary behind our company. With a strong background in business and leadership, she drives our mission forward.'
    },
    {
      name: 'Roniel R. Barrio',
      position: 'Head of Technology',
      image: require('../assets/roniel.jpg'),
      bio: 'Roniel leads our technology team with a passion for innovation. He ensures our products are at the forefront of technology.'
    },
    {
      name: 'Baby Jane Q. Tabaranza',
      position: 'CFO',
      image: require('../assets/baby jane.jpg'),
      bio: 'Bjane manages our finances with precision and strategic insight. She ensures our financial stability and growth.'
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Amazing Team StrategicTitans</Text>
      {persons.map((person, index) => (
        <View key={index} style={styles.personContainer}>
          <Image source={person.image} style={styles.image} />
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.position}>{person.position}</Text>
          <Text style={styles.bio}>{person.bio}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  personContainer: {
    alignItems: 'center',
    marginBottom: 50,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  position: {
    fontSize: 18,
    marginBottom: 5,
    color: '#666666',
  },
  bio: {
    textAlign: 'center',
    color: '#444444',
  },
});

export default AboutUs;
