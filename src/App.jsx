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
import Login from "./components/pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  //UseEffect ZA PROMENU USERA:

  //  useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       const payload = JSON.parse(atob(token.split(".")[1]));
  //       setUser(payload);
  //     } catch (error) {
  //       console.error("Invalid token:", error);
  //       localStorage.removeItem("token");
  //     }
  //   }
  // }, []); 

  return (
    <div className="app-container">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <NavbarBlueprint />
          <Routes>
            <Route path="/item1" element={<CardRenderComponent />} />
            <Route path="/item2" element={<TableRenderComponent />} />
            <Route path="/createItem" element={<CreateFormBlueprint />} />
            <Route path="/popups" element={<PopupTestPanel />} />
            <Route path="/paginatedPage"
              element={
                < PaginatedSortedFiltertedExampleOfUseComponent />
              } />
            <Route path="/login" element={<Login />} />
          </Routes>
          <FooterBlueprint />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
