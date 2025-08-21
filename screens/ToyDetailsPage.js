import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { CartContext } from '../App';

const ToyDetailsPage = ({ route, navigation }) => {
  const { toy } = route.params;
  const { cart, setCart } = useContext(CartContext);
  const [confirmation, setConfirmation] = useState('');

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === toy.id);
    if (existingItem) {
      // Update quantity if item already exists
      setCart(
        cart.map((item) =>
          item.id === toy.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new item to cart
      setCart([...cart, { ...toy, quantity: 1 }]);
    }
    setConfirmation('Toy added to cart!');
  };

  return (
    <View style={styles.container}>
        <Image source={{ uri: toy.thumbnail }} style={styles.image} />
        <Text style={styles.name}>{toy.name}</Text>
        <Text style={styles.price}>${toy.price}</Text>
        <Text>{toy.longDescription}</Text>
        <Button title="Add to Cart" onPress={addToCart} />
        <Button title="See More Toys" onPress={() => navigation.navigate('ToysPage')} />
        {confirmation ? <Text style={styles.confirmation}>{confirmation}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    marginVertical: 10,
    color: '#6200EE',
  },
  confirmation: {
    marginTop: 10,
    color: 'green',
  },
  image: {
    width: '100%',
    height: 150,}
});

export default ToyDetailsPage;
