import React from 'react';
import { 
  View, Text, Image, ScrollView, TouchableOpacity, StyleSheet 
} from 'react-native';

export default function NewsDetailScreen({ route, navigation }) {
  const { title, description, content, image, link } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      {/* Imagem grande */}
      {image && <Image source={{ uri: image }} style={styles.bigImage} />}

      {/* Título */}
      <Text style={styles.title}>{title}</Text>

      {/* Texto */}
      <Text style={styles.text}>
        {content || description || "Sem conteúdo disponível."}
      </Text>

      {/* Link estilizado azul */}
      <TouchableOpacity onPress={() => navigation.navigate("NewsWebView", { url: link })}>
        <Text style={styles.link}>Ler notícia completa</Text>
      </TouchableOpacity>

      {/* Imagem secundária */}
      {image && <Image source={{ uri: image }} style={styles.smallImage} />}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  bigImage: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    marginBottom: 16,
  },
  smallImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  link: {
    marginTop: 18,
    fontSize: 16,
    color: "#2A6BE4",
    fontWeight: "600",
  },
});
