import React from "react";
import { NavLink, To } from "react-router-dom";
import "./button.scss"


export const Button: React.FC<{
  children: React.ReactNode;
  theme?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: To;
  submit?: React.FormEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  form?: string;
}> = ({ form, disabled, children, theme = "buttonForForm", onClick, to, submit }) => {
  if (theme === "buttonForSort") {
    return <button onClick={onClick} className={"buttonForSort"}>{children}</button>;
  }
  if (theme === "buttonForDescr") {
    return <NavLink className={"buttonForDescr"} to={to}>{children}</NavLink>;
  }
  return <button form={form} disabled={disabled} type="submit" onSubmit={submit}  onClick={onClick} className={disabled  ? "buttonForForm" : "buttonForForm active"}>{children}</button>;
};
