import React, { FC, MouseEvent } from "react";
import ReactDOM from "react-dom";
import {
  CloseButton,
  PopupContent,
  PopupTitle,
  UserPopupContainer,
  UserPopupTitle,
} from "./UserPopupStyle";

export type User = {
  name: string;
  email: string;
};

type UserPopupProps = {
  user: User;
  onClose: () => void;
};

const UserPopup: FC<UserPopupProps> = ({ user, onClose }) => {
  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <UserPopupContainer onClick={handleOutsideClick}>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <PopupTitle>User Information</PopupTitle>
        <UserPopupTitle>Name: {user.name}</UserPopupTitle>
        <UserPopupTitle>Email: {user.email}</UserPopupTitle>
      </PopupContent>
    </UserPopupContainer>,
    document.body
  );
};

export default UserPopup;
