import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Menu from './components/Menu';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu
        color="#444"
        items={[
          'Name & Appearance',
          'Share List',
          'Select Reminders',
          'Show Completed',
          'Delete List',
          'Stop Local Server'
        ]}
        boxShadowColor="rgba(0, 0, 0, 0.8)"
        backgroundColor="#fff"
        seperatorColor="#22222210">
      </Menu>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  },
});
