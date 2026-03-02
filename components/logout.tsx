"use client";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setIsLoading(true);
    await authClient.signOut();
    router.push("/");
    setIsLoading(false);
  };
  return (
    <Button variant={"outline"} onClick={handleLogout} disabled={isLoading}>
      {isLoading ? "Logging out..." : "Logout"}
    </Button>
  );
}
