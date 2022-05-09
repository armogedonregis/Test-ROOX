import React from "react";
import { Item } from "../item";
import "./list.scss";
import { Loader } from "../loader";
import { Title } from "../title";

export default function List({loading, users}): JSX.Element {
    return (
      <div className="list_container">
          {!loading && <div>
            <Title children={"Список пользователей"} />
          </div>}
          {loading ? <Loader /> : users.map(item => {
              return (
                <Item key={item.id} {...item} />
              )
          })}
          {!loading && <div className="list_users">
            <p>Найдено {users.length} пользователей</p>
          </div>}
      </div>
    );
  };
