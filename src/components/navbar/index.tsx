import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../button";
import { Layout } from "../../container/layout";
import "./navbar.scss";

interface Props {
    sortCity: React.MouseEventHandler;
    sortCompany: React.MouseEventHandler;
}

const Navbar: React.FC<Props> = ({sortCity, sortCompany}) => {
    return (
        <Layout>
            <div className="container_nav">
                <div className="nav__sort">
                    <p>Сортировка</p>
                    <Button onClick={sortCity} theme="buttonForSort">по городу</Button>
                    <Button onClick={sortCompany} theme="buttonForSort">по компании</Button>
                </div>
            <Outlet />
            </div>
        </Layout>
    )
};

export default Navbar;