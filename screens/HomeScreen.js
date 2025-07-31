import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ברוך הבא ל־Nit-Need-It</Text>
      <Button
        title="מעבר ללוח הבקשות"
        onPress={() => navigation.navigate('LearnerDashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});
