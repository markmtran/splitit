import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const handleOpenCamera = () => {
    console.log("Camera opened!")
  }

  return (
    <View style={styles.container}>
      <Button title="Open Camera" onPress={handleOpenCamera} />
      <StatusBar style="auto" />
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
