import React from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";

const MyCubito = (props) => {
	return (
		<div
			className={`mycubito ${props.animation} d-flex justify-content-center align-items-center`}>
			cubito
		</div>
	);
};

MyCubito.propTypes = {
	animation: PropTypes.string,
};

export default MyCubito;
