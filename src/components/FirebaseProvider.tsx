"use client";

import React, { useEffect, useState } from 'react';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getAuth, type Auth } from 'firebase/auth';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { FirebaseContext } from '@/hooks/useFirebase';

interface FirebaseServices {
  auth: Auth | null;
  db: Firestore | null;
  storage: FirebaseStorage | null;
  isReady: boolean;
}

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [firebaseServices, setFirebaseServices] = useState<FirebaseServices>({
    auth: null,
    db: null,
    storage: null,
    isReady: false,
  });

  useEffect(() => {
    try {
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      };

      let app: FirebaseApp;
      if (!getApps().length) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApp();
      }

      const auth = getAuth(app);
      const db = getFirestore(app);
      const storage = getStorage(app);

      setFirebaseServices({
        auth,
        db,
        storage,
        isReady: true,
      });

    } catch (error) {
      console.error("Firebase initialization failed:", error);
      setFirebaseServices(prev => ({ ...prev, isReady: false }));
    }
  }, []);

  return (
    <FirebaseContext.Provider value={firebaseServices}>
      {children}
    </FirebaseContext.Provider>
  );
};
