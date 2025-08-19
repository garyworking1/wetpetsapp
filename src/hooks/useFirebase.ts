"use client";

import { createContext, useContext } from 'react';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';

interface FirebaseServices {
  auth: Auth | null;
  db: Firestore | null;
  storage: FirebaseStorage | null;
  isReady: boolean;
}

export const FirebaseContext = createContext<FirebaseServices>({
  auth: null,
  db: null,
  storage: null,
  isReady: false,
});

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
