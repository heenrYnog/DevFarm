import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import { logout } from '../../../shared/functions/connection/auth';

const Orders = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Pedidos de Clientes:</Text>
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Pedido 1</Text>
          <Text style={styles.orderDetails}>Cliente: João da Silva</Text>
          <Text style={styles.orderDetails}>Itens: 2 sacolas de verduras</Text>
        </View>
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Pedido 2</Text>
          <Text style={styles.orderDetails}>Cliente: Maria Souza</Text>
          <Text style={styles.orderDetails}>Itens: 1 sacola de verduras</Text>
        </View>
      </ScrollView>
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  order: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderDetails: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Orders;
