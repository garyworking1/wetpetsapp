"use client";

import dynamic from "next/dynamic";

const PetList = dynamic(() => import("@/components/PetList"), {
  ssr: false,
  loading: () => <p className="text-center text-neutral-500">Loading pets...</p>,
});

export default function PetListDynamic() {
  return <PetList />;
}
