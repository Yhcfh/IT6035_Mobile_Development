import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcomeText}>Welcome to the Toys Give Away App!</Text>
    <Button title="View Toys" onPress={() => navigation.navigate('ToysPage')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LandingPage;
