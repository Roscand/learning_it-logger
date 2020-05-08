// dependencies //
import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

// pages //

// components //
import SearchBar from "./components/layout/SearchBar";

// App component //
const App = () => {
    useEffect(() => {
        M.AutoInit();
    });

    return (
        <Fragment>
            <SearchBar />
        </Fragment>
    );
};

export default App;
