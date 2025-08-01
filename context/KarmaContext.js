import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KarmaContext = createContext({
  karma: 0,
  badges: [],
  addKarma: () => {},
});

export const KarmaProvider = ({children}) => {
  const [karma, setKarma] = useState(0);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const k = await AsyncStorage.getItem('karma');
        const b = await AsyncStorage.getItem('badges');
        if (k !== null) setKarma(parseInt(k, 10));
        if (b !== null) setBadges(JSON.parse(b));
      } catch (e) {
        console.warn('Failed loading karma', e);
      }
    }
    load();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('karma', karma.toString());
    AsyncStorage.setItem('badges', JSON.stringify(badges));
  }, [karma, badges]);

  const addKarma = (amount) => {
    setKarma((prev) => {
      const newVal = prev + amount;
      if (newVal >= 10 && !badges.includes('Day Saver')) {
        setBadges((b) => [...b, 'Day Saver']);
      }
      return newVal;
    });
  };

  return (
    <KarmaContext.Provider value={{karma, badges, addKarma}}>
      {children}
    </KarmaContext.Provider>
  );
};

export default KarmaContext;
