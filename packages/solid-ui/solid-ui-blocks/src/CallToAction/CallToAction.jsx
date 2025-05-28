import React from 'react';
import {navigate} from 'gatsby';
import "./call-action.css";

export default function CallToAction(props) {

    const goToPage =()=> {
        navigate(props.link); //navigate to edit page
    }

    return (
        <div className={`call-action `+ props.bg}>
            <div className="container">
                <div className="cta-content">{props.content}</div>
                <button type="button" className="button-group-button level-1 css-18252t6" onClick={goToPage}>
                    <div className="css-12hibeq">{props.btname}</div>
                </button>
            </div>
        </div>
    )
}