// dependencies //
import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

// pages //

// components //

// App component //
const App = () => {
    useEffect(() => {
        M.AutoInit();
    });
    return <div className='App'>IT Logger</div>;
};

export default App;
