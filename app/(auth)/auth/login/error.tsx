"use client";
import { FC, ReactElement } from "react";

const AuthLoginError: FC<{
  error: Error & { digest?: string };
  reset: () => void;
}> = ({ error, reset }): ReactElement => {
  return <div className="w-full">Ada error bang {error.message}</div>;
};

export default AuthLoginError;
