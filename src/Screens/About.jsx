import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

const About = () => {
  const theme = useColorScheme();
  const isDark = theme == 'dark';
  const bg = isDark ? 'black' : 'white';
  const tc = isDark ? 'white' : 'black';
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color: tc }]}>About Screen</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});
