import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TextInput } from 'react-native';
import { CartContext } from '../App';

const ShoppingCartPage = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
    setCart([]); // Clear cart
  };

  const cancelOrder = () => {
    setCart([]); // Clear cart
    alert('Order cancelled!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <TextInput
              style={styles.quantityInput}
              keyboardType="numeric"
              value={String(item.quantity)}
              onChangeText={(value) => updateQuantity(item.id, value)}
            />
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      <Button title="Place Order" onPress={placeOrder} />
      <Button title="Cancel Order" onPress={cancelOrder} />
      <Button title="See More Toys" onPress={() => navigation.navigate('ToysPage')} />
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
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  // Ensure items are vertically aligned
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemName: {
    flex: 2,  // Take more space for the name
    fontSize: 16,
  },
  itemPrice: {
    flex: 1,  // Make sure price has enough space
    fontSize: 16,
    textAlign: 'center',
  },
  quantityInput: {
    flex: 1,  // Allow the input to take up space
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 5,
    textAlign: 'center',
    width: 60,
  },
  total: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default ShoppingCartPage;
