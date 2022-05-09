import "./layout.scss";
import React from "react";

interface WrapperProps {
    children: React.ReactChild | React.ReactNode;
  }
  
  
  export const Layout: React.FC<WrapperProps> = ({ children }) => {
    return <div className="layout">{children}</div>;
  };
  