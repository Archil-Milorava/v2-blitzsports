"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/", 
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          router.push("/"); // redirect to home page after login
        },
        onError: (ctx) => {
          setError(ctx.error.message);
          setLoading(false);
        },
      }
    );
  };

  const handleGoogleSignIn = async () => {
     await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          disabled={loading}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={`p-2 text-white rounded ${
            loading ? "bg-green-300" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <div>
        <button onClick={handleGoogleSignIn}>or with google</button>
      </div>
    </div>
  );
};

export default SigninPage;
