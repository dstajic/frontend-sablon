import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbarBlueprintStyle.scss";
import UserContext from "./UserContext";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {user ? (
        <>
          <div className="logged-out-user-section">
            <button id="login-button" onClick={() => navigate("/login")}>Login</button>
          </div>
        </>
      )
        :
        (
          <>
            <div className="link-section">
              <Link className="link" to="/item1"><p>Item1</p></Link>
              <Link className="link" to="/item2"><p>Item2</p></Link>
              <Link className="link" to="/createItem"><p>Create item</p></Link>
              <Link className="link" to="/popups"><p>Popups</p></Link>
              <Link className="link" to="/paginatedPage"><p>Paginated Items</p></Link>
            </div>
            <div className="logged-in-user-section">
              <LogoutButton />
            </div>

          </>

        )}

    </div>

  );
};
export default Navbar;
