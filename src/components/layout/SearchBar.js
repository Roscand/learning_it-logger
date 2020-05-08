// dependencies //
import React, { useRef } from "react";
import PropTypes from "prop-types";

// redux //
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

// SearchBar component //
const SearchBar = ({ searchLogs }) => {
    const text = useRef("");

    const onChange = e => {
        searchLogs(text.current.value);
    };

    return (
        <nav style={{ marginBottom: "30px" }} className='blue'>
            <div className='nav-wrapper'>
                <form>
                    <div className='input-field'>
                        <input
                            type='search'
                            ref={text}
                            placeholder='Search Logs...'
                            onChange={onChange}
                        />
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

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
