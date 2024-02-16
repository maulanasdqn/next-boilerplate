import { FC, PropsWithChildren, ReactElement } from "react";

const AuthTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen h-full">
      {children}
    </main>
  );
};

export default AuthTemplate;
