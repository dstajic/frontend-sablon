import { useState, useEffect } from "react";
import React from "react";
import "../../styles/tableRenderComponentStyle.scss";
// import { getAllItems } from "../services/itemService"; // server-related (commented)

const ListPageBlueprint = () => {
  const [items, setItems] = useState([]);

  const renderItems = async () => {
    try {
      // 🔴 SERVER CALL (commented)
      // const data = await getAllItems();

      // 🟢 MOCK DATA (30 items)
      const data = [
        {
          id: 1,
          text: "Item 1",
          text2: "Description 1",
          link: "https://example.com/1",
        },
        {
          id: 2,
          text: "Item 2",
          text2: "Description 2",
          link: "https://example.com/2",
        },
        {
          id: 3,
          text: "Item 3",
          text2: "Description 3",
          link: "https://example.com/3",
        },
        {
          id: 4,
          text: "Item 4",
          text2: "Description 4",
          link: "https://example.com/4",
        },
        {
          id: 5,
          text: "Item 5",
          text2: "Description 5",
          link: "https://example.com/5",
        },
        {
          id: 6,
          text: "Item 6",
          text2: "Description 6",
          link: "https://example.com/6",
        },
        {
          id: 7,
          text: "Item 7",
          text2: "Description 7",
          link: "https://example.com/7",
        },
        {
          id: 8,
          text: "Item 8",
          text2: "Description 8",
          link: "https://example.com/8",
        },
        {
          id: 9,
          text: "Item 9",
          text2: "Description 9",
          link: "https://example.com/9",
        },
        {
          id: 10,
          text: "Item 10",
          text2: "Description 10",
          link: "https://example.com/10",
        },
        {
          id: 11,
          text: "Item 11",
          text2: "Description 11",
          link: "https://example.com/11",
        },
        {
          id: 12,
          text: "Item 12",
          text2: "Description 12",
          link: "https://example.com/12",
        },
        {
          id: 13,
          text: "Item 13",
          text2: "Description 13",
          link: "https://example.com/13",
        },
        {
          id: 14,
          text: "Item 14",
          text2: "Description 14",
          link: "https://example.com/14",
        },
        {
          id: 15,
          text: "Item 15",
          text2: "Description 15",
          link: "https://example.com/15",
        },
        {
          id: 16,
          text: "Item 16",
          text2: "Description 16",
          link: "https://example.com/16",
        },
        {
          id: 17,
          text: "Item 17",
          text2: "Description 17",
          link: "https://example.com/17",
        },
        {
          id: 18,
          text: "Item 18",
          text2: "Description 18",
          link: "https://example.com/18",
        },
        {
          id: 19,
          text: "Item 19",
          text2: "Description 19",
          link: "https://example.com/19",
        },
        {
          id: 20,
          text: "Item 20",
          text2: "Description 20",
          link: "https://example.com/20",
        },
        {
          id: 21,
          text: "Item 21",
          text2: "Description 21",
          link: "https://example.com/21",
        },
        {
          id: 22,
          text: "Item 22",
          text2: "Description 22",
          link: "https://example.com/22",
        },
        {
          id: 23,
          text: "Item 23",
          text2: "Description 23",
          link: "https://example.com/23",
        },
        {
          id: 24,
          text: "Item 24",
          text2: "Description 24",
          link: "https://example.com/24",
        },
        {
          id: 25,
          text: "Item 25",
          text2: "Description 25",
          link: "https://example.com/25",
        },
        {
          id: 26,
          text: "Item 26",
          text2: "Description 26",
          link: "https://example.com/26",
        },
        {
          id: 27,
          text: "Item 27",
          text2: "Description 27",
          link: "https://example.com/27",
        },
        {
          id: 28,
          text: "Item 28",
          text2: "Description 28",
          link: "https://example.com/28",
        },
        {
          id: 29,
          text: "Item 29",
          text2: "Description 29",
          link: "https://example.com/29",
        },
        {
          id: 30,
          text: "Item 30",
          text2: "Description 30",
          link: "https://example.com/30",
        },
      ];

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
      <div className="tableScrollWrapper">
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
                  <a href={item.link} target="_content" rel="noreferrer">
                    {item.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPageBlueprint;
