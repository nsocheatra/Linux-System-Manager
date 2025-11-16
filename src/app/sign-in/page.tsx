"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="System Admin Logo"
            className="mx-auto mb-4"
            width={160}
            height={40}
          />
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Welcome to System Admin
          </h1>
          <p className="text-gray-400  text-sm text-center">
            Linux Server Management Portal
          </p>
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex gap-3">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="sample@email.com"
              />
          </div>
          <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>
             <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg shadow-lg transition duration-200"
            >
              Sign in
            </button>
        </form>
         <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-blue-400 hover:text-blue-300 font-semibold transition">
                Create
              </Link>
            </p>
          </div>
      </div>
    </div>

    //  <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
    //    <h1 className="text-2xl font-bold">Welcome to System</h1>

    //    {error && <p className="text-red-500">{error}</p>}

    //    <form onSubmit={handleSubmit} className="space-y-4">
    //      <input
    //       name="email"
    //       type="email"
    //       placeholder="Email"
    //       required
    //       className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
    //     />
    //     <input
    //       name="password"
    //       type="password"
    //       placeholder="Password"
    //       required
    //       className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
    //     />
    //     <button
    //       type="submit"
    //       className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
    //     >
    //       Sign In
    //     </button>
    //   </form>
    // </main>
  );
}
