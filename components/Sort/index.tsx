import React, { useState } from "react";

interface SortProps {
    addSorting: (value: string) => void;
    removeSorting: () => void;
}

const Sort = ({ addSorting, removeSorting }: SortProps) => {
    const [sortSelect, setSortSelect] = useState("default");
    const [valueInput, setValueInput] = useState("");
    const [isActive, setIsActive] = useState(false);

    const addSortingHandler = () => {
        if (sortSelect !== "default") {
            addSorting(`_sort=${valueInput}:${sortSelect}`);
            setIsActive(true);
        }
    };

    const removeSortingHandler = () => {
        removeSorting();
        setIsActive(false);
    };

    return (
        <div>
            <span>Sort: </span>
            <input
                type="text"
                placeholder="value"
                onChange={(e) => setValueInput(e.target.value)}
                value={valueInput}
            />
            <select
                onChange={(e) => setSortSelect(e.target.value)}
                value={sortSelect}
            >
                <option value="default">Select</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
            <button
                onClick={isActive ? removeSortingHandler : addSortingHandler}
            >
                {isActive ? "Remove" : "Add"} Sorting
            </button>
        </div>
    );
};

export default Sort;
