import { User } from "../../interfaces";
import React from "react";
import "./item.scss";
import { Button } from "../button";
import { useLocation } from "react-router-dom";



export const Item: React.FC<User> = 
({ id, name, address, company }) => {

  let url = useLocation();

    return (
        <div className="item_container">
            <div className="text__container">
                <p className="article">ФИО:</p>
                    <p className="item__text">{name}</p>
            </div>
            <div className="text__container">
                <p className="article">город:</p>
                    <p className="item__text">{address.city}</p>
            </div>
            <div className="item__btn">
                <div className="text__container">
                    <p className="article">компания:</p>
                        <p className="item__text">{company.name}</p>
                </div>
                <Button theme={"buttonForDescr"}
                 to={`${url.pathname}user/` + id}>Подробнее</Button>
            </div>
        </div>
    )
};
