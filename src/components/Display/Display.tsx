import React from 'react';
import Output from "./../Output/Output";
import CustomButton from "./../CustomButton/CustomButton";
import css from "./Display.module.scss";

type DisplayPropsType = {
    setIncrementDefault: () => void
    setIncrementValueUp: () => void
    incrementValue: string
    error: boolean
}

export const Display: React.FC<DisplayPropsType> = (
    {
        setIncrementDefault,
        setIncrementValueUp,
        incrementValue,
        error,
    }
) => {

    return (
        <>
            <div className={`${css.AppInner} ${css.AppOutput}`}>
                <Output
                    error={error}
                    incrementValue={incrementValue}/>
            </div>

            <div className={css.AppInput}>
                <CustomButton
                    onClick={setIncrementValueUp}
                    disabled={error}>
                    inc
                </CustomButton>

                <CustomButton onClick={setIncrementDefault} disabled={parseInt(incrementValue) === 0}>
                    reset
                </CustomButton>
            </div>
        </>
    );
};


