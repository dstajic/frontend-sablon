import React, { useEffect, useState } from "react";
import ErrorPopupBlueprint from "./errorPopupBlueprint";
import "../../styles/paginatedComponentStyle.scss";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponent";
import PaginationComponent from "./PaginationComponet";

/*
  ============================
  BACKEND IMPORT (FUTURE USE)
  ============================

  import { getAllItemsPaginated } from "../services/itemsService";
*/

const PaginatedSortedFiltertedExampleOfUseComponent = () => {
  /*
    ============================
    MOCK DATA (DESIGN TESTING)
    ============================
  */
  const mockItems = [
    {
      id: 1,
      fullName: "George Orwell",
      biography: "English novelist and essayist.",
      dateOfBirth: "1903-06-25",
    },
    {
      id: 2,
      fullName: "Jane Austen",
      biography: "Known for romantic fiction.",
      dateOfBirth: "1775-12-16",
    },
    {
      id: 3,
      fullName: "Fyodor Dostoevsky",
      biography: "Russian novelist and philosopher.",
      dateOfBirth: "1821-11-11",
    },
    {
      id: 4,
      fullName: "Virginia Woolf",
      biography: "English modernist author.",
      dateOfBirth: "1882-01-25",
    },
    {
      id: 5,
      fullName: "Ernest Hemingway",
      biography: "American novelist and journalist.",
      dateOfBirth: "1899-07-21",
    },
    {
      id: 6,
      fullName: "Mark Twain",
      biography: "American writer and humorist.",
      dateOfBirth: "1835-11-30",
    },
  ];

  /*
    ============================
    STATE
    ============================
  */
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ text: null, number: null, dateTime: null })
  const [hasNextPage, setHasNextPage] = useState(null);
  const [hasPreviosPage, setHasPreviousPage] = useState(null);


  // Error popup state
  const [errorMessage, setErrorMessage] = useState(null);

  /*
    BACKEND STATE (FUTURE)
    ---------------------
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
  */

  /*
    ============================
    PAGINATION CONFIG
    ============================
  */
  const pageSize = 3;
  const totalPages = Math.ceil(mockItems.length / pageSize);

  /*
    ============================
    FRONTEND PAGINATION (MOCK)
    ============================
  */
  const paginateMockData = (currentPage) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Simulated frontend-only error example
    if (currentPage > totalPages || currentPage < 1) {
      setErrorMessage("Invalid page number");
      return;
    }

    setItems(mockItems.slice(startIndex, endIndex));
  };

  useEffect(() => {
    paginateMockData(page);
  }, [page]);


  /*
    ============================
    BACKEND PAGINATION (FUTURE)
    ============================

    const fetchAuthorsFromBackend = async (currentPage) => {
      try {
        setLoading(true);

        const data = await getAllAuthorsPaginated(currentPage, pageSize);

        setItems(data.items);
        setTotalPages(data.totalPages);
      } catch (err) {
        setErrorMessage("Failed to load authors from server");
      } finally {
        setLoading(false);
      }
    };
  */

  /*
    ============================
    EFFECT
    ============================
  */
  useEffect(() => {
    // FRONTEND ONLY
    paginateMockData(page);

    /*
      BACKEND VERSION
      ---------------
      fetchAuthorsFromBackend(page);
    */
  }, [page]);

  /*
    ============================
    NAVIGATION
    ============================
  */
  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    } else {
      setErrorMessage("You are already on the last page");
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    } else {
      setErrorMessage("You are already on the first page");
    }
  };

  /*
    ============================
    RENDER
    ============================
  */
  return (
    <div className="authorsPageContainer">
      <h2>Items</h2>

      {/* ERROR POPUP */}
      {errorMessage && (
        <ErrorPopupBlueprint
          message={errorMessage}
          timeOut={3}
          onClose={() => setErrorMessage(null)}
        />
      )}

      {/*
        BACKEND LOADING STATE (FUTURE)
        ------------------------------
        {loading && <p>Loading...</p>}
      */}
      {
        <div className="filter-sort-section">
          <FilterComponent filter={filter} setFilter={setFilter} />
          <SortComponent
            sortTypes={[
              { key: 1, name: "a" },
              { key: 2, name: "danas" },
              { key: 3, name: "Sutra" }
            ]}
            choosenType={"a"}
          />
        </div>
      }

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Item</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.biography}</td>
              <td>{item.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationComponent
        page={page}
        totalPages={totalPages}
        hasNextPage={nextPage}        //setHasNextPage kada se ubaci baza
        hasPreviousPage={prevPage}    //setHasPreviousPage kada se ubaci baza
      />
    </div>
  );
};

export default PaginatedSortedFiltertedExampleOfUseComponent;
