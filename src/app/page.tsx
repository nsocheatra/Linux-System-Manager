"use client";

import { useRouter } from "next/navigation";
import SignInPage from "./sign-in/page";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <SignInPage />
    </>
  );
}