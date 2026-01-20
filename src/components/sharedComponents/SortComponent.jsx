import React from "react";

const SortComponent = ({ sortTypes, chosenType, onSortChange }) => {

    return (
        <div className="sort-component-wrapper">
            <span>SortBy:</span>
            <select
                className="sort-type-select"
                value={chosenType}
                onChange={(e) => onSortChange(e.target.value)}
            >
                {sortTypes.map(sortType => (
                    <option key={sortType.key} value={sortType.key}>{sortType.name}</option>
                ))}
            </select>
        </div>
    );
};
export default SortComponent;


{/* 
    Postavljenje u componentu - obavezno je u useEffect postvaviti u dependences
    <SortComponent
        sortTypes={sortTypes}
        chosenType={chosenType}
        onSortChange={(value) => {
        setChosenType(value);
        setPage(0);
        }}
    /> */}