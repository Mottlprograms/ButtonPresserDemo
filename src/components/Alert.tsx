import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="btn btn-primary">{children}</div>;
};

export default Alert;
