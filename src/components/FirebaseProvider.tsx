"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

interface FirebaseServices {
  auth: Auth | null;
  db: Firestore | null;
  storage: FirebaseStorage | null;
  isReady: boolean;
}

// Step 1: Create a context for our Firebase services
const FirebaseContext = createContext<FirebaseServices>({
  auth: null,
  db: null,
  storage: null,
  isReady: false,
});

// Step 2: Create the Firebase provider component
export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [firebaseServices, setFirebaseServices] = useState<FirebaseServices>({
    auth: null,
    db: null,
    storage: null,
    isReady: false,
  });

  useEffect(() => {
    // This hook runs only on the client, so we can safely initialize Firebase here.
    try {
      // Your web app's Firebase configuration from .env.local
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      };

      console.log("Attempting to initialize Firebase with config:", firebaseConfig);

      // Initialize Firebase, but only once per app instance
      let app: FirebaseApp;
      if (!getApps().length) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApp();
      }

      // Get the services and update the state
      const auth = getAuth(app);
      const db = getFirestore(app);
      const storage = getStorage(app);

      setFirebaseServices({
        auth,
        db,
        storage,
        isReady: true,
      });

      console.log("Firebase initialized successfully.");

    } catch (error) {
      console.error("Firebase initialization failed:", error);
      // You can handle this error gracefully in your UI
      setFirebaseServices(prev => ({ ...prev, isReady: false }));
    }
  }, []); // Empty dependency array means this runs once on mount

  // Step 3: Provide the services to the children
  return (
    <FirebaseContext.Provider value={firebaseServices}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Step 4: Create a custom hook to easily access the services
export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
