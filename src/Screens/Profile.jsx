import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

const Profile = ({ navigation }) => {
  const theme = useColorScheme();
  const isDarkMode = theme == 'Dark';
  const textColor = isDarkMode ? 'black' : 'white';
  const backgroundColor = isDarkMode ? 'white' : 'black';

  return (
    <SafeAreaView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>

        <Button
          title="Go To About"
          onPress={() => navigation.navigate('About')}
          style={{ fontFamily: 'serif' }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.profileCon}></View>
        <Text style={[styles.text, { fontFamily: 'serif', color: textColor }]}>
          Danious
        </Text>
        <Text style={[styles.text, { color: textColor }]}>
          Discription: This page is for profile section and this is the demo
          model of the First app
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  text: { fontSize: 20, marginBottom: 10, fontFamily: 'serif' },
  profileCon: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 100,
  },
});
