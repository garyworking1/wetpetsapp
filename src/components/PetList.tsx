"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { useFirebase } from "./FirebaseProvider";

interface Pet {
  id: string;
  name: string;
  bio: string;
}

export default function PetList() {
  const { db, isReady } = useFirebase();
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPets() {
      if (!db) {
        // This case should be handled by the loading state driven by isReady,
        // but this satisfies the type checker.
        setLoading(false);
        return;
      }
      try {
        const petsCollectionRef = collection(db, "pets");
        const querySnapshot = await getDocs(petsCollectionRef);
        const petsData = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          name: doc.data().name,
          bio: doc.data().bio,
        }));
        setPets(petsData);
      } catch (err) {
        console.error("Error fetching pets:", err);
        setError("Failed to fetch pets. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, [isReady, db]);

  if (loading) {
    return <p className="text-center text-neutral-500">Loading pets...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Pets from Firestore</h2>
      {pets.length > 0 ? (
        <ul className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white p-4">
          {pets.map((pet) => (
            <li key={pet.id} className="py-3">
              <h3 className="font-semibold">{pet.name}</h3>
              <p className="text-sm text-neutral-600">{pet.bio}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-neutral-500">No pets found in the database.</p>
      )}
    </div>
  );
}
