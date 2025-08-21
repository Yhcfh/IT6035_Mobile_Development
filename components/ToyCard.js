import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ToyCard = ({ toy, onSelect }) => (
  <View style={styles.card}>
    <Image source={{ uri: toy.thumbnail }} style={styles.image} />
    <Text style={styles.name}>{toy.name}</Text>
    <Text style={styles.price}>${toy.price}</Text>
    <Text style={styles.description}>{toy.shortDescription}</Text>
    <Button title="Select" onPress={() => onSelect(toy)} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: '#6200EE',
    marginVertical: 5,
  },
  description: {
    marginBottom: 10,
    color: '#777',
  },
});

export default ToyCard;
