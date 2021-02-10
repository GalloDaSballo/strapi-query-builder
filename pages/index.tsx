import { useCallback, useState } from "react";
import Filter from "../components/Filter";
import Limit from "../components/LimitAndMax";
import Sort from "../components/Sort";
import WhereClauseFilter from "../components/WhereClauseFilter";
import styles from "../styles/Index.module.scss";

export const Home = (): JSX.Element => {
    const [outputStringArray, setOutputStringArray] = useState([
        null,
        null,
        null,
    ]);

    const [resourceUrl, setResourceUrl] = useState("");

    const nullifyValue = (index: number) => {
        setOutputStringArray((oldStringArray) => {
            const newStringArray = [...oldStringArray];
            newStringArray[index] = null;
            return newStringArray;
        });
    };

    const setValue = (value: string, index: number) => {
        setOutputStringArray((oldStringArray) => {
            const newStringArray = [...oldStringArray];
            newStringArray[index] = value;
            return newStringArray;
        });
    };

    const joinOutputString = () => {
        let output = `${resourceUrl}?`;

        outputStringArray.forEach((outputString, index) => {
            if (outputString) {
                if (index === 0) {
                    output += `${outputString}`;
                } else {
                    output += `&${outputString}`;
                }
            }
        });

        return output;
    };

    return (
        <main
            className={styles.container}
            style={{ width: "720px", margin: "0 auto" }}
        >
            <div>
                <h1>Strapi Query Tool</h1>
            </div>
            <input
                type="text"
                onChange={(e) => setResourceUrl(e.target.value)}
                value={resourceUrl}
                placeholder="Resource URL (https://localhost:3000/blogs)"
                style={{ width: "83%", margin: "10px 0" }}
            />
            <div>
                <Filter
                    addFilter={(value: string) => setValue(value, 0)}
                    removeFilter={() => nullifyValue(0)}
                />
                <Sort
                    addSorting={(value: string) => setValue(value, 1)}
                    removeSorting={() => nullifyValue(1)}
                />
                <Limit
                    addLimit={(value: string) => setValue(value, 2)}
                    removeLimit={() => nullifyValue(2)}
                />
                <p>Advance filtering</p>
                <WhereClauseFilter
                    addWhereClauseFilter={useCallback(
                        (value: string) => setValue(value, 0),
                        [],
                    )}
                />
            </div>
            <div style={{ padding: "50px 0" }}>
                <p>Output:</p>
                <p>{joinOutputString()}</p>
            </div>
        </main>
    );
};

export default Home;
