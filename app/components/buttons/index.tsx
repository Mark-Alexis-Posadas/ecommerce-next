import { ReactNode } from "react";

interface Prop {
  className: string;
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, className, onClick }: Prop) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
