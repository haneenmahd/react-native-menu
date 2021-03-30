import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BlurView } from "expo-blur";

import { LinearGradient } from 'expo-linear-gradient';

// You can import from local files
import Menu from './components/Menu';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <BlurView intensity={100} style={styles.container}>
      <LinearGradient
        colors={['#FF3CAC', '#784BA0', '#2B86C5']}
        style={{
          flex: 1
        }}>
        <Menu color="#fafafa" items={['Name & Appearance', 'Share List', 'Select Reminders', 'Show Completed', 'Delete List']} />
      </LinearGradient>
    </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
    backgroundColor: '#ecf0f1',
  },
});
