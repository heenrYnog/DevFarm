import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Text from '../../../shared/components/text/Text';
import { logout } from '../../../shared/functions/connection/auth';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = Dimensions.get('window');
  const topoHeight = (578 / 768) * width;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/topo.png')}
        style={[styles.topo, { height: topoHeight }]}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Tópicos sobre a fazenda:</Text>
        <Text style={styles.topic}>
          - Coleta de alimentos: A fazenda realiza a coleta de alimentos frescos e saudáveis,
          evitando o desperdício alimentar.
        </Text>
        <Text style={styles.topic}>
          - Doação para pessoas necessitadas: Os alimentos coletados são destinados a pessoas em
          situação de vulnerabilidade alimentar, promovendo a solidariedade e o combate à fome.
        </Text>
        <Text style={styles.topic}>
          - Sustentabilidade: A fazenda busca práticas sustentáveis em seu processo de produção e
          distribuição de alimentos, visando minimizar o impacto no meio ambiente.
        </Text>
        <Text style={styles.topic}>
          - Agricultura orgânica: Os alimentos são produzidos de forma orgânica, sem o uso de
          agrotóxicos, promovendo a saúde e a qualidade dos produtos.
        </Text>
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
  topo: {
    width: '100%',
    marginBottom: 20,
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
  topic: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Home;
