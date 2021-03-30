import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, PanResponder, Animated } from 'react-native';

import { BlurView } from 'expo-blur';

export default function Menu({ items, color, backgroundColor }) {
  return (
    <BlurView dark intensity={100} style={styles.container}>
      {items.map((item, i) => (
        <View style={[styles.list, {
          backgroundColor: backgroundColor ? backgroundColor : null
        }]}>
          <Text style={{
            color: color ? color : null
          }} key={i}>{item}</Text>
        </View>
      ))}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.60)',
    borderRadius: 20,
    transform: 'translate(-50%, -50%)',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      height: 20,
      width: 20,
    },
    shadowRadius: 30,
  },
  list: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: '10%',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: '7%',
  },
});
