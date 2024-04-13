import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Stay Connected</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.iconText}>📘 Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.iconText}>📸 Instagram</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRightText}>©2024 StrategicTitans. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#2E2E2E',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  socialIcon: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  iconText: {
    color: '#2E2E2E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  copyRightText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default Footer;
