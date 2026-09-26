import React, { createContext, useContext, useState, useMemo } from 'react';

const ReadingsContext = createContext(null);

const initialReadings = [
  {
    id: 'r1',
    date: 'Ontem',
    time: '18:00',
    systolic: 118,
    diastolic: 78,
    glucose: 92,
  },
  {
    id: 'r2',
    date: 'Hoje',
    time: '09:30',
    systolic: 120,
    diastolic: 80,
    glucose: 95,
  },
];

const initialMedications = [
  { id: 'm1', name: 'Medicação A', time: '10:00', done: true },
];

export function ReadingsProvider({ children }) {
  const [readings, setReadings] = useState(initialReadings);
  const [medications] = useState(initialMedications);
  const [userName] = useState('Maria');

  const addReading = ({ systolic, diastolic, glucose }) => {
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const newReading = {
      id: `r${Date.now()}`,
      date: 'Hoje',
      time,
      systolic: Number(systolic),
      diastolic: Number(diastolic),
      glucose: Number(glucose),
    };
    setReadings((prev) => [...prev, newReading]);
    return newReading;
  };

  const latest = readings[readings.length - 1];

  const trend = useMemo(() => {
    const last8 = readings.slice(-8);
    return {
      systolic: last8.map((r) => r.systolic),
      diastolic: last8.map((r) => r.diastolic),
      glucose: last8.map((r) => r.glucose),
    };
  }, [readings]);

  const value = {
    readings,
    medications,
    userName,
    latest,
    trend,
    addReading,
  };

  return (
    <ReadingsContext.Provider value={value}>
      {children}
    </ReadingsContext.Provider>
  );
}

export function useReadings() {
  const ctx = useContext(ReadingsContext);
  if (!ctx) {
    throw new Error('useReadings deve ser usado dentro de ReadingsProvider');
  }
  return ctx;
}
