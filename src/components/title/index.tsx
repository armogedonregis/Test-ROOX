import React from "react";
import "./title.scss";


export const Title: React.FC<{
    children: React.ReactNode;
  }> = ({children}) => {
    return (
        <h2 className="title__component">{children}</h2>
    )
};