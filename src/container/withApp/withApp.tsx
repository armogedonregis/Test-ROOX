import { useState, useEffect } from "react";
import { User } from "../../interfaces";
import { useAxios } from "../../utils/Api";
import React from "react";

export function withApp(Component) {
    return function() {
      const [users, setUsers] = useState<User[]>([]);
      const [direction, setDirection] = useState<Boolean>(true);

      const sortCity = () => {
      const copyCity = users.concat();

      let sortData;
      if (direction) {
        sortData = copyCity.sort(
          (a: User, b: User) => {return a.address.city > b.address.city ? -1 : 1}
          )
        } sortData = copyCity.reverse();
      setUsers(sortData);
      setDirection(!direction);
    };

    const sortCompany = () => {
      const copyCompany = users.concat();

      let sortData;
      if (direction) {
        sortData = copyCompany.sort(
          (a: User, b: User) => {return a.company.name > b.company.name ? -1 : 1}
          )
        } sortData = copyCompany.reverse();
      setUsers(sortData);
      setDirection(!direction);
    };
  
  const { response, loading } = useAxios({
    url: '/users',
  });

  useEffect(() => {
    if (response !== null) {
      setUsers(response);
    }
  }, [response]);  

  return ( 
  <Component
    users={users}
    sortCity={sortCity}
    sortCompany={sortCompany}
    loading={loading} 
  />
  );
};
}