"use server";
import type { NextPage } from "next";
import type { ReactElement } from "react";
import { AuthLoginModule } from "./_modules";

const AuthLoginPage: NextPage = (): ReactElement => {
  return <AuthLoginModule />;
};

export default AuthLoginPage;
