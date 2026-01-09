import { useState, useEffect } from "react";
import React from "react";
import "../../styles/tableRenderComponentStyle.scss";
//import { getAll } from "../services/itemService";

const ListPageBlueprint = () => {
  const [items, setItems] = useState([]);

  const renderItems = async () => {
    try {
      // const data = await getAllItems();
      const data = []; // placeholder
      console.log(data);
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    renderItems();
  }, []);

  return (
    <div className="listPageContainer">
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Text 2</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.text}</td>
              <td>{item.text2}</td>
              <td>
                <a href={item.link} target="_content">
                  {item.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPageBlueprint;
