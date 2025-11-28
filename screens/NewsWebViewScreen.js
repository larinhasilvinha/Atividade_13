import React from 'react';
import { Platform, View, Text, Linking, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function NewsWebViewScreen({ route }) {
  const { url } = route.params;

  if (Platform.OS === 'web') {
    return (
      <View style={styles.center}>
        <Text>Clique para abrir a notícia:</Text>
        <Button title="Abrir" onPress={() => Linking.openURL(url)} />
      </View>
    );
  }

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
