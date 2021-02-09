import { useState } from "react";
import Filter from "../components/Filter/Filter";
import Limit from "../components/Limit/Limit";
import Sort from "../components/Sort/Sort";
import styles from "../styles/Index.module.scss";

export const Home = (): JSX.Element => {
    const [outputString, setOutputString] = useState("");

    const addFilterHandler = (item: string, filter: string, value: string) => {
        setOutputString((oldOutputString: string) =>
            oldOutputString.concat(
                `${
                    oldOutputString.length > 0 ? "&" : "?"
                }${item}_${filter}=${value}`,
            ),
        );
    };

    const addSortingHandler = (value: string, sortBy: string) => {
        setOutputString((oldOutputString: string) =>
            oldOutputString.concat(
                `${
                    oldOutputString.length > 0 ? "&" : "?"
                }_sort=${value}:${sortBy}`,
            ),
        );
    };

    const addLimitHandler = ({ start, limit }) => {
        const limitArray = [];

        if (start.trim() !== "") {
            limitArray.push(`_start=${start}`);
        }

        if (limit.trim() !== "") {
            limitArray.push(`_limit=${limit}`);
        }

        setOutputString((oldOutputString: string) => {
            const prefix = outputString.length > 0 ? "&" : "?";
            const limitString =
                limitArray.length === 2 ? limitArray.join("&") : limitArray[0];

            return oldOutputString + prefix + limitString;
        });
    };

    return (
        <main className={styles.container}>
            <div>
                <h1>Strapi Query Tool</h1>
            </div>
            <div>
                <Filter addFilter={addFilterHandler} />
                <Sort addSorting={addSortingHandler} />
                <Limit addLimit={addLimitHandler} />
            </div>
            <div>
                <p>Output:</p>
                <p>{outputString}</p>
            </div>
        </main>
    );
};

export default Home;
