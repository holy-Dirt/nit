import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { Audio } from 'expo-av';

export default function PublishRequestScreen({ navigation }) {
  const [topic, setTopic] = useState('Math');
  const [desc, setDesc] = useState('');
  const [hours, setHours] = useState('Morning');
  const [recording, setRecording] = useState();

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true });
      const { recording: rec } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(rec);
    } catch (err) {
      console.log('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) return;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecording(uri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Topic</Text>
      <Picker selectedValue={topic} onValueChange={setTopic} style={styles.picker}>
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
        value={desc}
        onChangeText={setDesc}
      />

      <Text style={styles.label}>Preferred Hours</Text>
      <Picker selectedValue={hours} onValueChange={setHours} style={styles.picker}>
        <Picker.Item label="Morning" value="Morning" />
        <Picker.Item label="Afternoon" value="Afternoon" />
        <Picker.Item label="Evening" value="Evening" />
      </Picker>

      <Button
        title={recording && recording.getURI ? 'Stop Recording' : 'Record'}
        onPress={recording && recording.getURI ? stopRecording : startRecording}
      />

      <Button
        title="Publish"
        onPress={() => navigation.navigate('MatchCircle')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  picker: { height: 50 },
});
