import React, { useState } from "react";

interface SortProps {
    addSorting: (value: string, sortBy: string) => void;
}

const Sort = ({ addSorting }: SortProps) => {
    const [sortSelect, setSortSelect] = useState("default");
    const [valueInput, setValueInput] = useState("");

    const addSortingHandler = () => {
        addSorting(valueInput, sortSelect);
    };

    return (
        <div>
            <span>Sort by: </span>
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
            <button onClick={addSortingHandler}>add sorting</button>
        </div>
    );
};

export default Sort;
