import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ContactUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>Have a question or just want to say hi?</Text>
      <Text style={styles.text}>Feel free to reach out to us!</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>📧 Email: 20211356@nbsc.edu.ph</Text>
        <Text style={styles.infoText}>📞 Phone: +639915095217</Text>
        <Text style={styles.infoText}>🏠 Address: Alae, Lunocan, Manolo Fortich, Bukidnon</Text>
      </View>
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
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666666',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
});

export default ContactUs;
