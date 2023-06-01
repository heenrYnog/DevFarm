import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: pink;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <TextNew>NovoText</TextNew>
    </SafeAreaView>
  );
};

export default App;
