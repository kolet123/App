import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our Home Page</Text>
      <Text style={styles.infoText}>You are logged in!</Text>
      {/* Add any additional content or actions here */}
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Text:{
    fontSize: 16,
    fontWeight: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 100,
  },
});

export default HomePage;
