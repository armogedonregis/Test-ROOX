import { useState, useEffect } from "react";
import { User } from "../../interfaces";
import { useAxios } from "../../utils/Api";
import React from "react";
import { useParams } from "react-router-dom";

export function withProfile(Component) {
    return function() {
        
        const {id} = useParams();
        const [users, setUsers] = useState<User>();
        const [disable, setDisable] = useState<boolean>(true);
        const [validate, setValidate] = useState(false);
    
        const {response, loading} = useAxios({
            url: `/users/${id}`,
          });
        
          useEffect(() => {
            if (response !== null) {
                setUsers(response);
            }
          }, [response]);
    
      
          const handleChange = (fieldName: string) => (fieldValue: any) => {
            setUsers({         
                      ...users,
                    [fieldName]: fieldValue,
              });
      };
    
      const handleChangeAddress = (fieldName: string) => (fieldValue: any) => {
        setUsers({ 
            ...users,
            address: {
                ...users.address,
                [fieldName]: fieldValue
            },
    
          });
    };
    
        const disHandler = () => {
              setDisable(!disable);        
        }
        const validates = () => {

          let input = users;
          let isValid = true;
    
          if (!input["name"]) {
            isValid = false;
          }

          if (!input["username"]) {
            isValid = false;
          }

          if (!input["email"]) {
            isValid = false;
          }

          if (!input.address["street"]) {
            isValid = false;
          }

          if (!input.address["city"]) {
            isValid = false;
          }

          if (!input.address["zipcode"]) {
            isValid = false;
          }

          if (!input["phone"]) {
            isValid = false;
          }

          if (!input["website"]) {
            isValid = false;
          }
          return isValid;
      };
        const formHandler = (e) => {
            e.preventDefault();

            if(validates()) {

              const fields = Array.prototype.slice.call(e.target)
              .filter((el: { name: string; }) => el.name)
              .reduce((form: Object, el: { name: string; value: string; }) => ({
                ...form,
                [el.name]: el.value,
              }), {})
              console.log(fields)
              setValidate(false);
            } else {
              setValidate(true);
            }
    };

  return ( 
  <Component
    loading={loading}
    disHandler={disHandler}
    formHandler={formHandler}
    disable={disable}
    handleChange={handleChange}
    users={users}
    handleChangeAddress={handleChangeAddress}
    validate={validate}
  />
  );
};
}