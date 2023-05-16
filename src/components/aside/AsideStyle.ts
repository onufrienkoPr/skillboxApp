import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 200px;
  height: calc(100vh - 90px);
  border-right: 2px solid #9423f7;
  padding: 25px;
`;

export const SidebarTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarListItem = styled.li`
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;
