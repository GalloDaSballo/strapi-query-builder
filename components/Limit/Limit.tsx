import { stringify } from "querystring";
import React, { useState } from "react";

interface LimitProps {
    addLimit: ({ start, limit }: { start: string; limit: string }) => void;
}

const Limit = ({ addLimit }: LimitProps) => {
    const [limitInput, setLimitInput] = useState("");
    const [startInput, setStartInput] = useState("");

    const addLimitHandler = () => {
        addLimit({ start: startInput, limit: limitInput });
    };

    return (
        <div>
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

            <button onClick={addLimitHandler}>Add Limit And Start</button>
        </div>
    );
};

export default Limit;
