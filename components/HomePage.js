import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Cute Aesthetic Pillows');
  const [sortType, setSortType] = useState('Name');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const categories = {
    'Cute Aesthetic Pillows': [
      { name: 'Paw Pillow', price: '₱850.00', description: "Snuggle up with our adorable paw pillow.", image: require('../assets/Product1.jpg') },
      { name: 'Human Size Cuddling Kitty Pillow', price: '₱1,500.00', description: "Experience the ultimate comfort with our cuddling kitty pillow.", image: require('../assets/Product2.jpg') },
      { name: 'Cute Cloud Pillow', price: '₱850.00', description: "Drift into dreamland on a cloud of comfort.", image: require('../assets/Product3.jpg') },
      { name: 'Flower Pillow', price: '₱900.00', description: "Bring the beauty of nature indoors with our exquisite flower pillow.", image: require('../assets/Product4.jpg') },
    ],
  };

  const sortedItems = categories[selectedCategory].sort((a, b) => {
    if (sortType === 'Name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'Price') {
      return parseFloat(a.price.replace('₱', '').replace(',', '')) - parseFloat(b.price.replace('₱', '').replace(',', ''));
    }
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/Strategic Titans.jpg')} style={styles.logo} />
        <Text style={styles.header}>Welcome to our Store!</Text>
      </View>
      <View style={styles.menuContainer}>
        {Object.keys(categories).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.menuItem,
              selectedCategory === category && styles.selectedMenuItem,
            ]}
            onPress={() => handleCategoryChange(category)}
          >
            <Text style={styles.menuItemText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Sort by:</Text>
        <Picker
          selectedValue={sortType}
          style={styles.dropdownPicker}
          onValueChange={(itemValue) => handleSortChange(itemValue)}
        >
          <Picker.Item label="Name" value="Name" />
          <Picker.Item label="Price" value="Price" />
        </Picker>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{selectedCategory}</Text>
        {sortedItems.map((item) => (
          <TouchableOpacity 
            key={item.name} 
            style={styles.productContainer} 
            onPress={() => navigation.navigate('DetailsScreen', { item: item })}
          >
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>{item.price}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('LandingPage')}>
        <Text style={styles.logoutButton}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED4E5',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF1493',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFC0CB',
  },
  menuItemText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  selectedMenuItem: {
    backgroundColor: '#FF69B4',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#FF1493',
  },
  dropdownPicker: {
    flex: 1,
    height: 40,
    color: '#FF1493',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF1493',
  },
  productContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FF1493',
    paddingBottom: 20,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FF1493',
  },
  menuItemDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#FF1493',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 150,  // Adjust the width here to make the logo smaller
    height: 150, // Adjust the height here to make the logo smaller
    marginBottom: 20, // Add some margin to the bottom
  },
});

export default Home;
