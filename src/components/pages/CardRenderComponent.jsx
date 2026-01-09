import React, { useState, useEffect } from "react";
//import { getAll } from "../services/itemService";
import "../../styles/cardRenderComponentStyle.scss";

const CardListBlueprint = () => {
  const [items, setItems] = useState([]);

  const renderItems = async () => {
    try {
      // const data = await getAllItems();
      const data = [
        { id: 1, title: "Item 1", subtitle: "Subtitle 1", link: "#" },
        { id: 2, title: "Item 2", subtitle: "Subtitle 2", link: "#" },
      ]; // placeholder
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
    <div className="cardListContainer">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <h4 className="cardTitle">{item.title}</h4>
          <p className="cardSubtitle">{item.subtitle}</p>
          {item.link && (
            <a href={item.link} target="_blank" className="cardLink">
              {item.link}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardListBlueprint;
