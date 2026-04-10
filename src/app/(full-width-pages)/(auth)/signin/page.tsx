import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Solaris Analytics - Next.js Dashboard Template",
  description: "This is Next.js Signin Page Solaris Analytics Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
