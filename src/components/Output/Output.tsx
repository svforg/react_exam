import React from 'react';
import css from "./Output.module.css";

type OutputPropsType = {
    incrementValue: number
}

function Output(props: OutputPropsType) {

    const finalClassName = props.incrementValue > 4 ? css.red : "";

    return (
        <div className={finalClassName}>
            {props.incrementValue}
        </div>
    );
}

export default Output;
