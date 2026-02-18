import React, { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import { demoData } from "./Home";

const Profile = ({ navigation }) => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  const textColor = isDarkMode ? "white" : "black";
  const backgroundColor = isDarkMode ? "black" : "white";

  const [currentIndex, setCurrentIndex] = useState(0);

  const switchIDs = () => {
    if (currentIndex < demoData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // restart from first profile
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <View style={styles.container}>
        <Text style={[styles.text, { color: textColor }]}>Profile Screen</Text>

        <Button
          title="Go To About"
          onPress={() => navigation.navigate("About")}
        />
      </View>

      {/* Showing only current selected profile */}
      <View style={styles.card}>
        <Image
          src={demoData[currentIndex].image}
          style={[styles.img, { borderColor: isDarkMode ? "white" : "black" }]}
        />
        <Text style={[styles.text, { color: textColor }]}>
          {demoData[currentIndex].name}
        </Text>

        <Text style={[styles.text, { color: textColor }]}>
          {demoData[currentIndex].description}
        </Text>

        <Pressable onPress={switchIDs} style={styles.button}>
          <Text style={{ color: "white" }}>Press To See Profile's</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    width: "full",
    height: 300,
    borderWidth: 2,
    borderBottomColor: "red",
    borderRadius: 30,
  },
});
