import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Aside from "../components/aside/Aside";
import Header from "../components/header/Header";
import Content from "../pages/content/Content";
import Home from "../pages/home/Home";
import { AppContainer, Main } from "./AppStyle";

const App: FC = () => {
  return (
    <>
      <AppContainer>
        <Header />
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
