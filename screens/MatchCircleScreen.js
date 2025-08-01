import React from 'react';
import { View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { useKarma } from '../context/KarmaContext';

const peers = [
  { name: 'Dana', distance: '0.5km' },
  { name: 'Roni', distance: '1km' },
  { name: 'Avi', distance: '1.2km' },
  { name: 'Lior', distance: '2km' },
  { name: 'Sara', distance: '2.2km' },
  { name: 'Maya', distance: '3km' },
  { name: 'Noa', distance: '4km' },
  { name: 'Tal', distance: '5km' },
];

export default function MatchCircleScreen({ navigation }) {
  const { addKarma } = useKarma();

  const handlePress = (name) => {
    Alert.alert(
      `Start helping ${name}?`,
      '',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            addKarma(10);
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  const radius = 120;
  const centerX = 150;
  const centerY = 150;

  const renderBubbles = () =>
    peers.map((peer, index) => {
      const angle = (index / peers.length) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return (
        <TouchableOpacity key={peer.name} onPress={() => handlePress(peer.name)}>
          <Circle cx={x} cy={y} r={30} fill="#89CFF0" />
          <SvgText x={x} y={y} fontSize="10" textAnchor="middle" dy="4">
            {peer.name}
          </SvgText>
        </TouchableOpacity>
      );
    });

  return (
    <View style={styles.container}>
      <Svg height="300" width="300">
        {renderBubbles()}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
