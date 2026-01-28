"use client";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children, ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-semibold";
  const style =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button className={`${base} ${style}`} {...props}>
      {children}
    </button>
  );
}
