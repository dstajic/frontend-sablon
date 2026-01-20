import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardRenderComponent from "./components/pages/CardRenderComponent";
import TableRenderComponent from "./components/pages/TableRenderComponent";
import FooterBlueprint from "./components/sharedComponents/FooterBlueprint";
import NavbarBlueprint from "./components/sharedComponents/NavBarBlueprint";
import CreateFormBlueprint from "./components/forms/CreateFormBlueprint";
import PopupTestPanel from "./components/popupTestPanel";
import "./styles/globals.scss";
import PaginatedSortedFiltertedExampleOfUseComponent from "./components/sharedComponents/PaginatedSortedFiltertedExampleOfUseComponent";
import UserContext from "./components/sharedComponents/userContext";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="app-container">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <NavbarBlueprint />
          <Routes>
            <Route path="/item1" element={<CardRenderComponent />}></Route>
            <Route path="/item2" element={<TableRenderComponent />}></Route>
            <Route path="/createItem" element={<CreateFormBlueprint />}></Route>
            <Route path="/popups" element={<PopupTestPanel />}></Route>
            <Route path="/paginatedPage"
              element={
                < PaginatedSortedFiltertedExampleOfUseComponent />
              }>

            </Route>
          </Routes>
          <FooterBlueprint />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
