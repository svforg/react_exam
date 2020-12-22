import React from 'react';
import css from "./Output.module.scss";

type OutputPropsType = {
    error?: boolean
    incrementValue: string
}

function Output(props: OutputPropsType) {

    const finalClassName = (props.error) ? css.red : "";

    return (
        <div className={finalClassName}>
            {props.incrementValue}
        </div>
    );
}

export default Output;
