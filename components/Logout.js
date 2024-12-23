"use client";

import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Logout() {
  const { logout, currentUser } = useAuth();
  const pathname = usePathname();

  const handleLogout = () => {
    console.log("Logout button clicked");
    try {
      logout(); // Logout the user
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  if (!currentUser) {
    console.log("No current user detected");
    return null;
  }

  const isHomePage = pathname === "/";

  return isHomePage ? (
    <Link href="/dashboard">
      <Button text="Go to Dashboard" />
    </Link>
  ) : (
    <Button text="Logout" clickHandler={handleLogout} />
  );
}
