import React from 'react';
import {useSelector} from "react-redux";
import {restoresState, savesState} from "../functions/localStorage";
import {selectAll} from "../redux/counterSelectors";
import {
    loadStorageValueAC,
    setDisplayValueAC, setErrorAC,
    setMaxValueAC,
    setStartValueAC,
    useDispatch
} from "../redux/counterActions";
import {Settings} from "../components/presentational/Settings/Settings";
import {Display} from "../components/presentational/Display/Display";

type StateLocalStorageType = {
    startValue: string
    maxValue: string
}

export const Counter: React.FC = () => {

    const {
        startValue,
        maxValue,
        displayValue,
        error,
    } = useSelector(selectAll);

    const dispatch = useDispatch();

    const stateLocalStorage = restoresState<StateLocalStorageType>("counter-settings", {startValue: "0", maxValue: "5"});

    !startValue && !maxValue && dispatch(loadStorageValueAC(stateLocalStorage.startValue, stateLocalStorage.maxValue));

    const startValueHandler = (value: string) => {
        dispatch(setStartValueAC(value));
    };
    const maxValueHandler = (maxValue: string) =>  {
        dispatch(setMaxValueAC(maxValue));
    };
    const saveSettings = () => {
        savesState<StateLocalStorageType>("counter-settings", {startValue, maxValue});
        dispatch(setDisplayValueAC(startValue));
    };

    const setIncrementValueUp = () => {
        let cnt = parseInt(displayValue);

        if (isNaN(cnt)) {

            dispatch(setDisplayValueAC(startValue));
        } else {
            cnt += 1;
            dispatch(setDisplayValueAC(cnt.toString()));

            const max = parseInt(maxValue);
            cnt === max && dispatch(setErrorAC(true));
        }
    };
    const setIncrementDefault = () => {
        dispatch(setErrorAC(false));
        dispatch(setDisplayValueAC(startValue.toString()));
    };

    const checkError = (startValue: string, maxValue: string) => {
        const min = parseInt(startValue);
        const max = parseInt(maxValue);

        if ( min < 0 || min >= max ) {
            dispatch(setDisplayValueAC("Incorrect value"));
            dispatch(setErrorAC(true));
        }
        else {
            dispatch(setErrorAC(false));
            dispatch(setDisplayValueAC("Enter values and press \'SET\'"));
        }
    };

    return <>
        <Settings
            startValue={startValue}
            maxValue={maxValue}
            checkError={checkError}
            saveSettings={saveSettings}
            maxValueHandler={maxValueHandler}
            startValueHandler={startValueHandler}
            error={error}/>

        <Display
            incrementValue={displayValue}
            setIncrementDefault={setIncrementDefault}
            setIncrementValueUp={setIncrementValueUp}
            error={error}/>
    </>
};