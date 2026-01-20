import React from "react";

const PaginationComponent= ({page, totalPages, hasPreviousPage, hasNextPage})=>{
return(
    <div style={{ marginTop: "1rem" }}>
        <button onClick={hasPreviousPage} disabled={page === 1}>
          ←
        </button>

        <span style={{ margin: "0 1rem" }}>
          Page {page} of {totalPages}
        </span>

        <button onClick={hasNextPage} disabled={page === totalPages}>
          →
        </button>
      </div>
)
}
export default PaginationComponent;