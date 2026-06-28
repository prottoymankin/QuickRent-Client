'use client';

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: 'google'
    });
  }

  return (
    <Button 
      variant="outline"
      onClick={handleGoogleLogin}
    >
      <FcGoogle />
      Continue with Google
    </Button>
  );
};

export default GoogleLoginBtn;