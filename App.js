import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeLayout from './src/components/Layouts/HomeLayout';

export default function App() {
  return (
    <ScrollView>
      <HomeLayout />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
