import React from 'react';
import { View, FlatList } from 'react-native';
import { toys } from '../data/toys';
import ToyCard from '../components/ToyCard';
import Header from '../components/Header';

const ToysPage = ({ navigation }) => {
  const handleSelect = (toy) => {
    navigation.navigate('ToyDetailsPage', { toy });
  };

  return (
    <View>
      <Header title="Toys" onCartPress={() => navigation.navigate('ShoppingCartPage')} />
      <FlatList
        data={toys}
        renderItem={({ item }) => <ToyCard toy={item} onSelect={handleSelect} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default ToysPage;
