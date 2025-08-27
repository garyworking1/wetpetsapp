import LoginButtonDynamic from "@/components/LoginButtonDynamic";

export default function TestAuthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Auth Test Page</h1>
      <p>This page only renders the login button to isolate it for testing.</p>
      <div className="rounded-xl border-4 border-dashed border-red-400 p-8">
        <LoginButtonDynamic />
      </div>
    </main>
  );
}
