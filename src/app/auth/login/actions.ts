"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/@shared/supabase/server";
import { operationEnv } from "@/@shared/utils/env";

export async function loginWithGithub() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo:
        operationEnv === "local"
          ? `http://localhost:3000/auth/callback`
          : `https://seungrodotlee.vercel.app/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}

export async function logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }
}
