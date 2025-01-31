import { ReactNode } from "react";

interface Prop {
  className: string;
  children: ReactNode;
  handleClick: () => void;
}

export default function Buttons({ children, className, handleClick }: Prop) {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
