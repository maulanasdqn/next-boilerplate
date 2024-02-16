"use client";
import { Button } from "@/components/atoms/button";
import { signIn } from "next-auth/react";
import { FC, ReactElement } from "react";

export const AuthLoginModule: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4">
        <Button
          onClick={() => signIn("google")}
          variant={"primary"}
          size={"md"}
        >
          Google
        </Button>
        or
        <Button
          onClick={() => signIn("github")}
          variant={"secondary"}
          size={"md"}
        >
          Github
        </Button>
      </div>
    </section>
  );
};
