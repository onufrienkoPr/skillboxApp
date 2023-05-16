import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import UserPopup, { User } from "../userPopup/UserPopup";
import logoIcon from "./../../assets/images/logo.png";
import userIcon from "./../../assets/images/user.png";
import { HeaderContainer, Logo, UserButton, UserLogo } from "./HeaderStyle";

const Header: FC = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [user] = useState<User>({
    name: "Artyom Onufrienko",
    email: "onufrienko.artem00@gmail.com",
  });

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logoIcon} alt="Logo" />
      </Link>
      <UserButton onClick={() => togglePopup()}>
        <UserLogo src={userIcon} alt="User icon" />
      </UserButton>
      {isOpenPopup && <UserPopup user={user} onClose={togglePopup} />}
    </HeaderContainer>
  );
};

export default Header;
