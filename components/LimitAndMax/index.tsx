import React, { useState } from "react";

interface LimitProps {
    addLimit: (value: string) => void;
    removeLimit: () => void;
}

const Limit = ({ addLimit, removeLimit }: LimitProps) => {
    const [limitInput, setLimitInput] = useState("");
    const [startInput, setStartInput] = useState("");

    const [isActive, setIsActive] = useState(false);

    const addLimitHandler = () => {
        const limitArray = [];

        if (startInput.trim() !== "") {
            limitArray.push(`_start=${startInput}`);
        }

        if (limitInput.trim() !== "") {
            limitArray.push(`_limit=${limitInput}`);
        }

        addLimit(
            limitArray.length === 2 ? limitArray.join("&") : limitArray[0],
        );
        setIsActive(true);
    };

    const removeLimitHandler = () => {
        removeLimit();
        setIsActive(false);
    };

    return (
        <div>
            Limit:{" "}
            <input
                type="text"
                placeholder="Start"
                onChange={(e) => setStartInput(e.target.value)}
                value={startInput}
            />
            <input
                type="text"
                placeholder="Limit"
                onChange={(e) => setLimitInput(e.target.value)}
                value={limitInput}
            />
            <button onClick={isActive ? removeLimitHandler : addLimitHandler}>
                {isActive ? "Remove" : "Add"} Limit And Start
            </button>
        </div>
    );
};

export default Limit;
