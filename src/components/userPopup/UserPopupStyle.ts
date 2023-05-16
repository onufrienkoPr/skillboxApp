import styled from "styled-components";

export const UserPopupContainer = styled.div`
  position: relative;
`;

export const UserPopupButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
export const PopupContent = styled.div`
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 3px;
  background-color: transparent;
  color: #888;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;

export const PopupTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const UserPopupTitle = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;
