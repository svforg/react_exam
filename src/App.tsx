import React, {useState} from 'react';
import css from './App.module.scss';
import {Settings} from './components/Settings/Settings';
import {Display} from './components/Display/Display';
import {restoresState, savesState} from "./functions/localStorage/localStorage";

type AppPropsType = {}
type StateLocalStorageType = {
    startValue: number
    maxValue: number
}

function App(props: AppPropsType) {

    const stateLocalStorage = restoresState<StateLocalStorageType>("counter-settings", {startValue: 0, maxValue: 5});

    let [error, setError] = useState<boolean>(false);

    let [startValue, setStartValue] = useState<number>(stateLocalStorage.startValue);
    const startValueHandler = (value: number) => {
        setStartValue(value);
    };

    let [maxValue, setMaxValue] = useState<number>(stateLocalStorage.maxValue);
    const maxValueHandler = (maxValue: number) => {
        setMaxValue(maxValue);
    };

    const saveSettings = (startValue: number, maxValue: number) => savesState<StateLocalStorageType>("counter-settings", {startValue: startValue, maxValue: maxValue});

    let [displayValue, setDisplayValue] = useState<string>(startValue.toString());
    const setIncrementValueUp = () => {
        let valueUp;

        if (parseInt(displayValue) + 1 === maxValue) {
            setError(true);
        }

        if (isNaN(parseInt(displayValue))) {
            valueUp = startValue;
        }
        else {
            valueUp = parseInt(displayValue);
            ++valueUp;
        }

        setDisplayValue(valueUp.toString())
    };
    const setIncrementDefault = () => {
        setError(false);
        setDisplayValue(startValue.toString());
    };

    const checkError = (startValue: number, maxValue: number) => {
        if ( startValue < 0 || startValue >= maxValue) {
            setDisplayValue("Incorrect value!");
            setError(true);
        }
        else {
            setDisplayValue("enter values and press 'set'");
            setError(false);
        }
    };

    return (
        <div className={css.App}>
            <div className={css.AppWrapper}>
                <Settings
                    checkError={checkError}
                    saveSettings={saveSettings}
                    maxValueHandler={maxValueHandler}
                    maxValue={maxValue}
                    startValueHandler={startValueHandler}
                    startValue={startValue}
                    error={error}/>
            </div>

            <div className={css.AppWrapper}>
                <Display
                    setIncrementDefault={setIncrementDefault}
                    setIncrementValueUp={setIncrementValueUp}
                    incrementValue={displayValue}
                    error={error}/>
            </div>
        </div>
    );
}

export default App;
