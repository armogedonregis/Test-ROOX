import React from "react";
import { Button } from "../../components/button";
import { CustomArea } from "../../components/CustomArea";
import { CustomInput } from "../../components/CustomInput";
import { Loader } from "../../components/loader";
import { Title } from "../../components/title";
import { withProfile } from "../../container/withProfile";
import "./profile.scss";


function Profile
({loading, disHandler, formHandler, 
  disable, handleChange, users, handleChangeAddress, validate }): JSX.Element {
        
  return (
      <>
          {loading ? <Loader /> :
      <div className="container__profile">
          <div className="profile__header">
            <Title children={"Профиль пользователя"} />
            <Button onClick={disHandler} theme="buttonForSort">Редактировать</Button>
          </div>
          <form id="form" onSubmit={formHandler} className="form__profile">
            <CustomInput 
                label={"Name"}
                disabled={disable} 
                type={"text"} 
                name={"name"} 
                value={users?.name} 
                onChange={handleChange('name')}
                validate={validate}
            /> 
            <CustomInput 
                label={"User name"} 
                disabled={disable}
                type={"text"} 
                name={"username"} 
                value={users?.username} 
                onChange={handleChange('username')}
                validate={validate}
            />
            <CustomInput 
                label={"E-mail"} 
                disabled={disable}
                type={"email"} 
                name={"email"} 
                value={users?.email} 
                onChange={handleChange('email')}
                validate={validate}
            />
            <CustomInput 
                label={"Street"} 
                disabled={disable}
                type={"text"} 
                name={"street"} 
                value={users?.address.street} 
                onChange={handleChangeAddress('street')}
                validate={validate}
            />
            <CustomInput 
                label={"City"} 
                disabled={disable}
                type={"text"} 
                name={"city"} 
                value={users?.address.city} 
                onChange={handleChangeAddress("city")}
                validate={validate}
            />
            <CustomInput 
                label={"Zip code"} 
                disabled={disable}
                type={"text"} 
                name={"zipcode"} 
                value={users?.address.zipcode} 
                onChange={handleChangeAddress('zipcode')}
                validate={validate}
            />
            <CustomInput 
                label={"Phone"} 
                disabled={disable}
                type={"tel"} 
                name={"phone"} 
                value={users?.phone} 
                onChange={handleChange('phone')}
                validate={validate}
            />
            <CustomInput 
                label={"Website"} 
                disabled={disable}
                type={"text"} 
                name={"website"} 
                value={users?.website} 
                onChange={handleChange('website')}
                validate={validate}
            />
            <CustomArea 
                label={"Comment"}
                name={"comment"}
                value={users?.comment}
                onChange={handleChange('comment')}
                disabled={disable} 
                classNameArea={"form__comment"} 
                classNameLabel={"form__comment__title"}            
            />
          </form>
          <div className="form__container_btn">
            <Button 
            form={"form"}
            disabled={disable}
            submit={formHandler}
            theme="ButtonForForm">Отправить</Button>
          </div>
      </div>
          }
      </>
  );
};

export default withProfile(Profile);