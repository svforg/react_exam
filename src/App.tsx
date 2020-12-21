import React, {useState} from 'react';
import './App.css';
import {Settings} from './components/Settings/Settings';
import {Display} from './components/Display/Display';
import {restoresState, savesState} from "./functions/localStorage/localStorage";

type AppPropsType = {}
type StateLocalStorageType = {
    startValue: string
    maxValue: string
}

function App(props: AppPropsType) {

    const stateLocalStorage = restoresState<StateLocalStorageType>("counter-settings", {startValue: "0", maxValue: "5"});

    let [error, setError] = useState<boolean>(false);

    let [startValue, setStartValue] = useState<string>(stateLocalStorage.startValue);
    const startValueHandler = (value: string) => {
        setStartValue(value);

        if ((parseInt(value) < 0) || (parseInt(value) === parseInt(maxValue))) {
            setIncrementValue("Incorrect value!");
            setError(true);
        }
        else {
            setIncrementValue("enter values and press 'set'");
            setError(false);
        }
    };

    let [maxValue, setMaxValue] = useState<string>(stateLocalStorage.maxValue);
    const maxValueHandler = (value: string) => {
        setMaxValue(value);

        if (parseInt(value) === parseInt(startValue)) {
            setIncrementValue("Incorrect value!");
            setError(true);
        }
        else {
            setIncrementValue("enter values and press 'set'");
            setError(false);
        }
    };

    const saveSettings = (startValue: string, maxValue: string) => savesState<StateLocalStorageType>("counter-settings", {startValue: startValue, maxValue: maxValue});

    let [incrementValue, setIncrementValue] = useState<string>(startValue);
    const setIncrementValueUp = () => {
        let valueUp;

        if (parseInt(incrementValue) + 1 === parseInt(maxValue)) {
            setError(true);
        }

        if (isNaN(parseInt(incrementValue))) {
            valueUp = startValue;
        }
        else {
            valueUp = parseInt(incrementValue);
            ++valueUp;
        }

        setIncrementValue(valueUp.toString())
    };
    const setIncrementDefault = () => {
        setError(false);
        setIncrementValue(startValue);
    };

    return (
        <div className="App">
            <div className="App-wrapper">
                <Settings
                    saveSettings={saveSettings}
                    maxValueHandler={maxValueHandler}
                    maxValue={maxValue}
                    startValueHandler={startValueHandler}
                    startValue={startValue}
                    error={error}/>
            </div>

            <div className="App-wrapper">
                <Display
                    setIncrementDefault={setIncrementDefault}
                    setIncrementValueUp={setIncrementValueUp}
                    incrementValue={incrementValue}
                    error={error}/>
            </div>
        </div>
    );
}

export default App;
