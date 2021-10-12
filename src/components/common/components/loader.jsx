import React from "react";
import './style.css';

export const Loader = (props) => {
    return (
        props.isLoading ? <div>
            <svg className="spinner" width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                <g style={{width: '19px', height: '19px', transformOrigin: '9.5px 9.5px'}}>
                    <circle className="spinner__path" fill="none" stroke="#5181b8" stroke-dasharray="60"
                            stroke-dashoffset="60" stroke-width="2" cx="9.5" cy="9.5" r="8.5"></circle>
                </g>
            </svg>
        </div> : <></>
    );
};