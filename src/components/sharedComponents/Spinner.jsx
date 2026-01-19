import "../../styles/spinnerStyle.scss";
import React from "react";
const Spinner = ({text}) => {
    return(
        <>
        <div className="spinner" />
        <div className={text ? "spinner-text": "spinner-text-hidden"} >{text}</div>
        </>

    )
}

export default Spinner;
