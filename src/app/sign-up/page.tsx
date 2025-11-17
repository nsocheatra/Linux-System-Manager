"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
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

     <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
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
            Create An Account
          </h1>
          <p className="text-gray-400  text-sm text-center">
            Create an account to manage your Linux servers efficiently.
          </p>
        </div>
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex gap-3">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="mt-6 pt-6 border-t border-gray-700">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
                name="name"
                type="name"
                required
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Nong Socheatra"
                minLength={5}
              />
          </div>
          
           <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="user@example.com"
          />
        </div>
          <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-400">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
            minLength={8}
            placeholder="min 8 characters"
          />
        </div>

         <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            required
            className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="repeat password"
            minLength={8}
          />
        </div>
             <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg shadow-lg transition duration-200"
            >
              Create Account
            </button>
        </form>
         <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-blue-400 hover:text-blue-300 font-semibold transition">
                 Sign In 
              </Link>
            </p>
          </div>
      </div>
    </div>
    
    
  );
}