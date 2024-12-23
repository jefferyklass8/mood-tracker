"use client";

import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState("");

  const { signup, login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || password.length < 6) {
      setError("Please enter a valid email and password (min 6 characters).");
      return;
    }
    setAuthenticating(true);
    setError("");
    try {
      if (isRegister) {
        console.log("Signing up a new user");
        await signup(email, password);
      } else {
        console.log("Logging in existing user");
        await login(email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center flex-1 gap-4"
    >
      <h3 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
        {isRegister ? "Register" : "Log In"}
      </h3>
      <p className="font-mono">You're one step away!</p>
      {error && <p className="text-red-500">{error}</p>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
          disabled={authenticating}
        />
      </div>
      <p className="text-center">
        {isRegister ? "Already have an account? " : "Don't have an account? "}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-indigo-600"
        >
          {isRegister ? "Sign in" : "Sign up"}
        </button>
      </p>
    </form>
  );
}
