import React, { FC, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Aside from "../components/aside/Aside";
import UserPopup, { User } from "../components/userPopup/UserPopup";
import Content from "../pages/content/Content";
import Home from "../pages/home/Home";
import logoIcon from "./../assets/images/logo.png";
import userIcon from "./../assets/images/user.png";
import {
  AppContainer,
  Header,
  Logo,
  Main,
  UserButton,
  UserLogo,
} from "./AppStyle";

const App: FC = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [user] = useState<User>({
    name: "Artyom Onufrienko",
    email: "onufrienko.artem00@gmail.com",
  });

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  return (
    <>
      <AppContainer>
        <Header>
          <Link to="/">
            <Logo src={logoIcon} alt="Logo" />
          </Link>
          <UserButton onClick={() => togglePopup()}>
            <UserLogo src={userIcon} alt="User icon" />
          </UserButton>
          {isOpenPopup && <UserPopup user={user} onClose={togglePopup} />}
        </Header>
        <Main>
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:id" element={<Content />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
      </AppContainer>
    </>
  );
};

export default App;
