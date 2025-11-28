import React, { useEffect, useState } from 'react';
import { 
  View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator 
} from 'react-native';

const API_KEY = 'pub_f4640d50645744b29c904a5b9905c92d';

export default function HomeScreen({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=pt&q=technology`
        );

        const data = await response.json();

        if (data.results) {
          setNews(data.results);
        } else {
          setErrorMsg('Nenhuma notícia encontrada.');
        }

      } catch (e) {
        setErrorMsg('Erro de rede');
      }
      setLoading(false);
    }
    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("NewsDetail", {
          title: item.title,
          description: item.description,
          content: item.content,
          image: item.image_url,
          link: item.link
        })
      }
    >
      {item.image_url ? (
        <Image source={{ uri: item.image_url }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {item.description || "Sem descrição disponível"}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Carregando notícias...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    padding: 12,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  imagePlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  info: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 13, color: '#666', marginTop: 4 },
});
