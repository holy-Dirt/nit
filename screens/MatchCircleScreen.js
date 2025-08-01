import React, { useContext } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import KarmaContext from '../context/KarmaContext';

const peers = [
  { name: 'Alice', distance: '200m' },
  { name: 'Bob', distance: '300m' },
  { name: 'Cathy', distance: '250m' },
  { name: 'Dan', distance: '1km' },
  { name: 'Eve', distance: '500m' },
  { name: 'Frank', distance: '2km' },
  { name: 'Grace', distance: '800m' },
  { name: 'Heidi', distance: '1.2km' },
];

export default function MatchCircleScreen({ navigation }) {
  const { addKarma } = useContext(KarmaContext);

  const handlePress = (name) => {
    Alert.alert('Start helping', `Start helping ${name}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          addKarma(10);
          navigation.navigate('Home');
        },
      },
    ]);
  };

  const radius = 120;
  const center = 150;

  return (
    <View style={styles.container}>
      <Svg height={300} width={300}>
        {peers.map((p, index) => {
          const angle = (index / peers.length) * 2 * Math.PI;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <TouchableOpacity
              key={p.name}
              onPress={() => handlePress(p.name)}
              style={{ position: 'absolute', left: x - 20, top: y - 20 }}
            >
              <Circle cx={20} cy={20} r={20} fill="skyblue" />
              <SvgText x={20} y={25} fontSize="10" fill="black" textAnchor="middle">
                {p.name}
              </SvgText>
            </TouchableOpacity>
          );
        })}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
