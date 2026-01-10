"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

      try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registrasi gagal");
        return;
      }

      alert("Registrasi berhasil, silakan login");
      router.push("/login");
    } catch (err) {
      setError("Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  };

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        {error && (
          <p className="mb-3 text-sm text-red-600 text-center">{error}</p>
        )}