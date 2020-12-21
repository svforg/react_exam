import React from 'react';
import Output from "./../Output/Output";
import CustomButton from "./../CustomButton/CustomButton";

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
            <div className="App-inner App-output">
                <Output
                    error={error}
                    incrementValue={incrementValue}/>
            </div>

            <div className="App-input">
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


