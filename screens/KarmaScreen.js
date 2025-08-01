import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import KarmaContext from '../context/KarmaContext';

export default function KarmaScreen() {
  const { karma, badges } = useContext(KarmaContext);

  return (
    <View style={styles.container}>
      <Text style={styles.karma}>Karma: {karma}</Text>
      <FlatList
        data={badges}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.badge}>{item}</Text>}
        ListHeaderComponent={<Text style={styles.title}>Badges</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  karma: { fontSize: 22, marginBottom: 20 },
  title: { fontSize: 18, marginBottom: 10 },
  badge: { fontSize: 16, paddingVertical: 4 },
});
