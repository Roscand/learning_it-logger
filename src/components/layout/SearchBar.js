// dependencies //
import React from "react";

// SearchBar component //
const SearchBar = () => {
    return (
        <nav style={{ marginBottom: "30px" }} className='blue'>
            <div className='nav-wrapper'>
                <form>
                    <div className='input-field'>
                        <input type='search' />
                        <label htmlFor='search' className='label-icon'>
                            <i className='material-icons'>search</i>
                        </label>
                        <i className='material-icons'>close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default SearchBar;
