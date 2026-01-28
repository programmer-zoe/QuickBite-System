export type UserRole = "Admin" | "Manager" | "Cashier";
export type UserStatus = "Active" | "Inactive";

export type UserRow = {
  id: number;
  name: string;
  email: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  created: string;
};
