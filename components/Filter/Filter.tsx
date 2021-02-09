import { useState } from "react";

interface FilterProps {
    addFilter: (item: string, filter: string, value: string) => void;
}

const Filter = ({ addFilter }: FilterProps) => {
    const [itemInput, setItemInput] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("default");

    const addFilterHandler = () => {
        if (selectedFilter !== "default") {
            addFilter(itemInput, selectedFilter, valueInput);
        }
    };

    return (
        <div>
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
            </select>
            <input
                type="text"
                placeholder="Value"
                onChange={(e) => setValueInput(e.target.value)}
                value={valueInput}
            />

            <button onClick={addFilterHandler}>add</button>
        </div>
    );
};

export default Filter;
