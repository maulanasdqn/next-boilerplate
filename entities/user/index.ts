export type TUser = {
  id: string;
  fullname: string;
  image?: string;
  email: string;
  role: {
    id: string;
    name: string;
    permissions: Array<string>;
  };
};
