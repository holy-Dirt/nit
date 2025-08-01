import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KarmaContext = createContext();

export function KarmaProvider({ children }) {
  const [karma, setKarma] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('karma').then(value => {
      if (value) setKarma(parseInt(value, 10));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('karma', String(karma));
  }, [karma]);

  const addKarma = points => setKarma(k => k + points);

  return (
    <KarmaContext.Provider value={{ karma, addKarma }}>
      {children}
    </KarmaContext.Provider>
  );
}

export function useKarma() {
  return useContext(KarmaContext);
}
