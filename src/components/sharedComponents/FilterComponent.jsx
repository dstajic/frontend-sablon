import React from "react";

const FilterComponent = ({ filter, setFilter }) => {
    const handleChange = (field, value) => {
        setFilter((prev) => ({
            ...prev,
            [field]: value || null
        }));
    };

    return (
        <div className="filter-section">
            <div className="filter-control">
                <span className="filter-label">filter-text</span>
                <input
                    type="text"
                    placeholder="filter-text"
                    value={filter.text || ""}
                    onChange={(e) => handleChange("text", e.target.value)}
                    className="filter-input"
                />
            </div>

            <div className="filter-control">
                <span className="filter-label">filter-number</span>
                <input
                    type="number"
                    min={1}
                    max={5}
                    placeholder="number"
                    value={filter.number ?? ""}
                    onChange={(e) =>
                        handleChange("number", e.target.value ? Number(e.target.value) : null)
                    }
                    className="filter-input"
                />
            </div>

            <div className="filter-control">
                <span className="filter-label">filter-dateTime</span>
                <input
                    type="datetime-local"
                    placeholder="dateTime"
                    value={filter.dateTime ? filter.dateTime.slice(0, 16) : ""}
                    onChange={(e) =>
                        handleChange(
                            "dateTime",
                            e.target.value
                                ?
                                new Date(e.target.value).toISOString()
                                :
                                null
                        )
                    }
                    className="filter-input"
                />
            </div>
        </div>
    );
};

export default FilterComponent;