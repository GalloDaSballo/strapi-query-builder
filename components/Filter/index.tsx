import { useState } from "react";

interface FilterProps {
    addFilter: (value: string) => void;
    removeFilter: () => void;
}

const Filter = ({ addFilter, removeFilter }: FilterProps) => {
    const [itemInput, setItemInput] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("default");
    const [isActive, setIsActive] = useState(false);

    const addFilterHandler = () => {
        if (selectedFilter !== "default") {
            addFilter(`${itemInput}_${selectedFilter}=${valueInput}`);
            setIsActive(true);
        }
    };

    const removeFilterHandler = () => {
        setIsActive(false);
        removeFilter();
    };

    return (
        <div>
            Filter by:{" "}
            <input
                type="text"
                placeholder="Item"
                onChange={(e) => setItemInput(e.target.value)}
                value={itemInput}
            />
            <select
                onChange={(e) => setSelectedFilter(e.target.value)}
                value={selectedFilter}
            >
                <option value="default">Select</option>
                <option value="ne">!=</option>
                <option value="eq">==</option>
                <option value="lt">&#60;</option>
                <option value="lte">&#60;=</option>
                <option value="gt">&#62;</option>
                <option value="gte">&#62;=</option>
                <option value="contains">contains</option>
                <option value="ncontains">!ncontains</option>
                <option value="containss">containss</option>
                <option value="ncontainss">!ncontainss</option>
                <option value="null">!/=null</option>
            </select>
            <input
                type="text"
                placeholder="Value"
                onChange={(e) => setValueInput(e.target.value)}
                value={valueInput}
            />
            <button onClick={isActive ? removeFilterHandler : addFilterHandler}>
                {isActive ? "Remove Filter" : "Add Filter"}
            </button>
        </div>
    );
};

export default Filter;
