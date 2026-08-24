"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response =
        await fetch(
          "/api/admin/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              password,
            }),
          }
        );

      const data =
        await response.json();

      if (!data.success) {
        setError(
          data.message ||
            "Invalid password"
        );

        return;
      }

      router.push(
        "/admin/analytics"
      );

      router.refresh();

    } catch {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)]">

          <div className="text-center mb-8">

            <div className="text-4xl mb-4">
              🔐
            </div>

            <h1 className="text-3xl font-bold">
              Admin Access
            </h1>

            <p className="text-white/50 mt-2">
              Enter your admin password
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="block text-sm text-white/60 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Enter admin password"
                required
                autoFocus
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
              />

            </div>

            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading
                ? "Checking..."
                : "Enter Dashboard"}
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}