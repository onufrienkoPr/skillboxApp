import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  padding: 20px 20px 20px 20px;
  border-bottom: 2px solid #9423f7;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const UserLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const UserButton = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
`;
