"use client";

import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useFirebase } from "@/hooks/useFirebase";

const provider = new GoogleAuthProvider();

export default function LoginButton() {
  const { auth, db, isReady } = useFirebase();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (isReady && auth) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }
  }, [isReady, auth]);

  const handleSignIn = async () => {
    if (!auth || !db) {
      console.error("Auth or DB service not ready.");
      return;
    }
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }, { merge: true });
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  if (user) {
    return (
      <button
        onClick={handleSignOut}
        className="rounded-full bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-300"
      >
        Sign Out
      </button>
    );
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleSignIn();
      }}
      className="inline-block rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-500"
    >
      Sign in with Google
    </a>
  );
}
