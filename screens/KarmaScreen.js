import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useKarma } from '../context/KarmaContext';

export default function KarmaScreen() {
  const { karma, badges } = useKarma();

  return (
    <View style={styles.container}>
      <Text style={styles.karma}>Karma: {karma}</Text>
      <FlatList
        data={badges}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.badge}>{item}</Text>}
        ListHeaderComponent={<Text style={styles.title}>Badges</Text>}
        ListEmptyComponent={<Text>No badges yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  karma: {
    fontSize: 22,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  badge: {
    fontSize: 16,
    paddingVertical: 4,
  },
});
