import React from 'react';
import CustomButton from "../../shared/CustomButton/CustomButton";
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
    const finalClassName = (error) ? `${css.AppOutput} ${css.error}` : css.AppOutput;

    return (
        <div className={css.AppWrapper}>

            <div className={finalClassName}>
                    {incrementValue}
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
        </div>
    );
};


