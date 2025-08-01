import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KarmaContext = createContext({
  karma: 0,
  badges: [],
  addKarma: () => {},
});

/**
 * ספק הקארמה הראשי של האפליקציה
 */
export function KarmaProvider({ children }) {
  const [karma, setKarma] = useState(0);
  const [badges, setBadges] = useState([]);

  /* טעינת מידע מה־AsyncStorage בעת העלייה */
  useEffect(() => {
    async function load() {
      try {
        const k = await AsyncStorage.getItem('karma');
        const b = await AsyncStorage.getItem('badges');
        if (k !== null) setKarma(parseInt(k, 10));
        if (b !== null) setBadges(JSON.parse(b));
      } catch (e) {
        console.warn('Failed loading karma/badges', e);
      }
    }
    load();
  }, []);

  /* שמירת המידע בכל שינוי */
  useEffect(() => {
    AsyncStorage.setItem('karma', karma.toString());
    AsyncStorage.setItem('badges', JSON.stringify(badges));
  }, [karma, badges]);

  /* פונקציה להוספת נקודות קארמה */
  const addKarma = (amount) => {
    setKarma((prev) => {
      const next = prev + amount;

      // דוגמה להענקת badge אוטומטית
      if (next >= 10 && !badges.includes('Day Saver')) {
        setBadges((b) => [...b, 'Day Saver']);
      }

      return next;
    });
  };

  return (
    <KarmaContext.Provider value={{ karma, badges, addKarma }}>
      {children}
    </KarmaContext.Provider>
  );
}

/**
 * Hook נוח לשימוש בקארמה מתוך קומפוננטה
 */
export function useKarma() {
  return useContext(KarmaContext);
}

export default KarmaContext;

