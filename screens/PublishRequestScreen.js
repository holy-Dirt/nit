import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';

export default function PublishRequestScreen({ navigation }) {
  const [topic, setTopic] = useState('Math');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('Morning');
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState(null);

  const record = async () => {
    if (recording) {
      await recording.stopAndUnloadAsync();
      setAudioUri(recording.getURI());
      setRecording(null);
    } else {
      const { status } = await Audio.requestPermissionsAsync();
      if (status === 'granted') {
        const { recording: rec } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY,
        );
        setRecording(rec);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Topic</Text>
      <Picker selectedValue={topic} onValueChange={(v) => setTopic(v)} style={styles.picker}>
        <Picker.Item label="Math" value="Math" />
        <Picker.Item label="Science" value="Science" />
        <Picker.Item label="History" value="History" />
        <Picker.Item label="Art" value="Art" />
        <Picker.Item label="Music" value="Music" />
        <Picker.Item label="Sports" value="Sports" />
      </Picker>
      <Text style={styles.label}>Short Description</Text>
      <TextInput
        style={styles.input}
        maxLength={140}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Preferred Hours</Text>
      <Picker selectedValue={hours} onValueChange={(v) => setHours(v)} style={styles.picker}>
        <Picker.Item label="Morning" value="Morning" />
        <Picker.Item label="Afternoon" value="Afternoon" />
        <Picker.Item label="Evening" value="Evening" />
      </Picker>
      <Button title={recording ? 'Stop Recording' : 'Record'} onPress={record} />
      <Button title="Publish" onPress={() => navigation.navigate('MatchCircle')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginTop: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
  picker: { height: 50 },
});
