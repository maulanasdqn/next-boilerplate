"use client";
import type { FC, ReactElement } from "react";
import { Button } from "@/components/atoms";

export const AuthLoginModule: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center gap-y-6">
      <div className="flex items-center gap-x-4">
        <Button variant={"primary"} size={"md"}>
          Google
        </Button>
        or
        <Button variant={"secondary"} size={"md"}>
          Github
        </Button>
      </div>
    </section>
  );
};
