import React from "react";
import "./customInput.scss";



export const CustomInput: React.FC<{
    label: React.ReactNode;
    type: string;
    name: string;
    value?: string | ReadonlyArray<string> | number;
    onChange?: React.ChangeEventHandler;
    disabled?: boolean;
    validate?: boolean;
  }> = ({ label, onChange, type, name, value, disabled, validate }) => {

    return (
    <label className="titleField">{label} 
      <input 
        disabled={disabled} 
        className={validate && !value ? "textField validate" : "textField"}
        onChange={(e: any) => onChange(e.target.value)} 
        value={value} 
        name={name} 
        type={type}
      />  
    </label>
    );
  };