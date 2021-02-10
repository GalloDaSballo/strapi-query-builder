import { useEffect, useState } from "react";
import Filter from "../Filter";

const WhereClauseFilter = ({ addWhereClauseFilter }) => {
    const [filter1Value, setFilter1Value] = useState("");
    const [filter2Value, setFilter2Value] = useState("");
    const [selectValue, setSelectValue] = useState("OR");

    useEffect(() => {
        if (filter1Value && filter2Value) {
            addWhereClauseFilter(
                `_where${
                    selectValue === "OR" ? "[_or]" : ""
                }[0][${filter1Value}]&_where${
                    selectValue === "OR" ? "[_or]" : ""
                }[1][${filter2Value}]`,
            );
        }
    }, [filter1Value, filter2Value, selectValue, addWhereClauseFilter]);

    return (
        <div>
            <Filter
                addFilter={(value: string) => setFilter1Value(value)}
                removeFilter={() => setFilter1Value("")}
            />
            <select
                onChange={(e) => setSelectValue(e.target.value)}
                value={selectValue}
            >
                <option value="OR">OR</option>
                <option value="AND">AND</option>
            </select>
            <Filter
                addFilter={(value: string) => setFilter2Value(value)}
                removeFilter={() => setFilter2Value("")}
            />
        </div>
    );
};

export default WhereClauseFilter;
