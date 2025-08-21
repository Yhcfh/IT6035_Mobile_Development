import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title, onCartPress }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onCartPress}>
      <Text style={styles.cartButton}>Shopping Cart</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#6200EE',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
  },
  cartButton: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Header;
