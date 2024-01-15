import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Core/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testing EXPO with React Native</Text>
      <Text>Conversion to Typescript</Text>
      <StatusBar style="auto" />
      <Button onPress={() => Alert.alert('helloooooo')}>
        <Text>Hello World</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
