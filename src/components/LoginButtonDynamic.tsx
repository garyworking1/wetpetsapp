"use client";

import dynamic from "next/dynamic";

const LoginButton = dynamic(() => import("@/components/LoginButton"), {
  ssr: false,
  loading: () => <div className="h-9 w-36 rounded-full bg-neutral-200" />,
});

export default function LoginButtonDynamic() {
  return <LoginButton />;
}
