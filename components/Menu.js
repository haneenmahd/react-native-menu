import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

import { BlurView } from 'expo-blur';

/**
 * @param {{ 
 *   items: string[], 
 *   color: string, 
 *   backgroundColor: string,
 *   boxShadowColor: string | undefined,
 *   fontWeight: string,
 *   seperatorColor?: string,
 *   children: React.ReactNode,
 * }}  
 * @returns Creates a Beautiful menu
 */

export default function Menu({ 
  items, 
  color, 
  backgroundColor,
  boxShadowColor,
  fontWeight,
  seperatorColor,
  children
}) {
  return (
    <BlurView dark intensity={100} style={styles.view}>
      <View  style={[styles.container, {
        backgroundColor: backgroundColor ? backgroundColor : null,
        shadowColor: boxShadowColor ? boxShadowColor : null
      }]}>
        {items.map((item, i) => (
          i !== items.length - 1 ? 
          <View key={i} style={[styles.list, {
              borderColor: seperatorColor ? seperatorColor : 'rgba(0, 0, 0, 0.06)',
          }]}>
            <Text style={{
              color: color ? color : null,
              fontWeight: fontWeight ? fontWeight : null,
            }} key={i}>{item}</Text>
          </View>
          : 
            <View key={i} style={styles.lastList}>
              <Text style={{
                color: color ? color : null,
              }} key={i}>{item}</Text>
            </View>
        ))}
        {children}
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  view: {
    height: "100%",
    width: "100%", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  container: {
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    backgroundColor: 'rgba(255, 255, 255, 0.60)',
    borderRadius: 20,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowRadius: 0,
    overflow: "hidden"
  },
  list: {
    justifyContent: 'center',
    height: 30,
    width: '100%',
    paddingLeft: '10%',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
    borderBottomWidth: 1.2,
    padding: 10,
    paddingBottom: '7%',
  },
  lastList: {
    justifyContent: 'center',
    height: 30,
    width: '100%',
    paddingLeft: '10%',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    paddingBottom: '7%',
  },
});
