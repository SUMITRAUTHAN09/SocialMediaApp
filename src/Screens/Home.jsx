import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

// ✅ moved outside component to avoid recreation on every render
const demoData = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'James',
    gmail: 'james01@gmail.com',
    description: 'Frontend developer who loves clean UI and dark mode.',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Emily',
    gmail: 'emily02@gmail.com',
    description: 'Creative designer with a passion for minimal layouts.',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Oliver',
    gmail: 'oliver03@gmail.com',
    description: 'Full-stack learner exploring React Native.',
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Sophia',
    gmail: 'sophia04@gmail.com',
    description: 'Tech enthusiast who enjoys building mobile apps.',
  },
  {
    id: 5,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'William',
    gmail: 'william05@gmail.com',
    description: 'Problem solver and JavaScript lover.',
  },
  {
    id: 6,
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Amelia',
    gmail: 'amelia06@gmail.com',
    description: 'UI/UX enthusiast focused on user experience.',
  },
  {
    id: 7,
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Harry',
    gmail: 'harry07@gmail.com',
    description: 'Backend explorer learning APIs and databases.',
  },
  {
    id: 8,
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Isla',
    gmail: 'isla08@gmail.com',
    description: 'Mobile-first designer who loves animations.',
  },
  {
    id: 9,
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'George',
    gmail: 'george09@gmail.com',
    description: 'Passionate about performance and clean code.',
  },
  {
    id: 10,
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Olivia',
    gmail: 'olivia10@gmail.com',
    description: 'React Native beginner building cool projects.',
  },
  {
    id: 11,
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Jack',
    gmail: 'jack11@gmail.com',
    description: 'Tech blogger and open-source contributor.',
  },
  {
    id: 12,
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Ella',
    gmail: 'ella12@gmail.com',
    description: 'Learning full-stack development step by step.',
  },
  {
    id: 13,
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Noah',
    gmail: 'noah13@gmail.com',
    description: 'JavaScript ninja who loves debugging.',
  },
  {
    id: 14,
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Grace',
    gmail: 'grace14@gmail.com',
    description: 'Design-focused developer with an eye for detail.',
  },
  {
    id: 15,
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'Leo',
    gmail: 'leo15@gmail.com',
    description: 'Tech explorer experimenting with mobile UI.',
  },
  {
    id: 16,
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
    name: 'Freya',
    gmail: 'freya16@gmail.com',
    description: 'Creative coder who loves smooth animations.',
  },
  {
    id: 17,
    image: 'https://randomuser.me/api/portraits/men/17.jpg',
    name: 'Theo',
    gmail: 'theo17@gmail.com',
    description: 'Problem-solving mindset with a love for logic.',
  },
  {
    id: 18,
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Mia',
    gmail: 'mia18@gmail.com',
    description: 'App developer focused on modern UI trends.',
  },
  {
    id: 19,
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Lucas',
    gmail: 'lucas19@gmail.com',
    description: 'Learning React Native and loving the journey.',
  },
  {
    id: 20,
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
    name: 'Lily',
    gmail: 'lily20@gmail.com',
    description: 'Creative thinker building beautiful mobile apps.',
  },
];

const Home = ({ navigation }) => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  const [text, setText] = useState('');
  const [submitText, setSubmitText] = useState('');

  const handleSubmit = () => {
    setSubmitText(text);
    setText('');
  };

  // ✅ header extracted for ListHeaderComponent to avoid FlatList + ScrollView nesting issue
  const ListHeader = () => (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={{
            color: textColor,
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'serif',
          }}
        >
          Social Media
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            width: 150,
            padding: 10,
            backgroundColor: 'orange',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'red',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ color: 'white', fontWeight: 'bold', fontFamily: 'serif' }}
          >
            Go To Profile
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={{ marginVertical: 10 }}>
        {demoData.map(item => (
          <View key={item.id} style={styles.avatarBox}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <Text style={{ color: textColor }}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Type something..."
        placeholderTextColor="gray"
        value={text}
        onChangeText={setText}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {submitText ? (
        <Text style={{ color: textColor, marginVertical: 6 }}>
          Result: {submitText}
        </Text>
      ) : null}
    </>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      {/* ✅ single FlatList handles all scrolling via ListHeaderComponent */}
      <FlatList
        data={demoData}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={ListHeader}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={{ color: textColor }}>Name: {item.name}</Text>
            <Text style={{ color: textColor }}>Email: {item.gmail}</Text>
            <Text style={{ color: textColor }}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  avatarBox: { alignItems: 'center', marginRight: 15 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginVertical: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
});
