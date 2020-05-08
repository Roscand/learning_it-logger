// dependencies //
import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

// redux //
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";

// LogItem component //
const LogItem = ({ log, deleteLog, setCurrent }) => {
    const { id, tech, date, attention, message } = log;
    const onDelete = () => {
        deleteLog(id);
        M.toast({ html: "Log deleted" });
    };

    return (
        <li className='collection-item'>
            <div>
                <a
                    href='#edit-log-modal'
                    className={`modal-trigger ${
                        attention ? "red-text" : "blue-text"
                    }`}
                    onClick={() => setCurrent(log)}>
                    {message}
                </a>
                <br />
                <span className='grey-text'>
                    <span className='black-text'>ID #{id}</span>
                    &nbsp;last updated by&nbsp;
                    <span className='black-text'>{tech}</span>
                    &nbsp;on&nbsp;
                    <Moment format='MMM Do YYYY, h:mm:ss a'>{date}</Moment>
                </span>
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
