"use client";

import { useEffect } from "react";

export default function ErrorAbout({ error, reset }: { error: Error; reset: () => void }) {

  useEffect(() => {
    console.error("Error in About Page:", error);
  }, []);

  return (
    <div><h1 className="text-center">something went wrong</h1>
    <button onClick={reset}>Try Again</button></div>
  );
}