import PropTypes from "prop-types";


function Catbtn({className, name}) {
    return (
        <button className={className}> {name} </button>
    )
}

Catbtn.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Catbtn