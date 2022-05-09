import React from "react";




export const CustomArea: React.FC<{
    label: React.ReactNode;
    classNameArea: string;
    classNameLabel: string;
    name?: string;
    value?: string | ReadonlyArray<string> | number;
    onChange?: React.ChangeEventHandler;
    disabled?: boolean;
  }> = ({ label, onChange, classNameLabel, classNameArea, name, value, disabled }) => {
    return (
        <>
        <label className={classNameLabel}>{label}</label>
        <textarea
            name={name} 
            value={value} 
            onChange={(e: any) => onChange(e.target.value)}
            disabled={disabled} 
            className={classNameArea} />
            </>
    );
  };