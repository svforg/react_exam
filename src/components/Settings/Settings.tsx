import React, {ChangeEvent} from 'react';
import CustomButton from "./../CustomButton/CustomButton";
import CustomInput from "./../CustomInput/CustomInput";

type SettingsPropsType = {
    saveSettings: (startValue: number, maxValue: number) => void
    checkError: (startValue: number, maxValue: number) => void
    maxValueHandler: (maxValue: number) => void
    maxValue: number
    startValueHandler: (startValue: number) => void
    startValue: number
    error: boolean
}

export const Settings: React.FC<SettingsPropsType> = (
    {
        checkError,
        saveSettings,
        maxValueHandler,
        maxValue,
        startValueHandler,
        startValue,
        error
    }
) => {

    const maxValueCallback = (event: ChangeEvent<HTMLInputElement>) => {
        maxValueHandler(event.currentTarget.valueAsNumber);
        checkError(startValue, event.currentTarget.valueAsNumber);
    };
    const startValueCallback = (event: ChangeEvent<HTMLInputElement>) => {
        startValueHandler(event.currentTarget.valueAsNumber);
        checkError(event.currentTarget.valueAsNumber, maxValue);
    };

    return (
        <>
            <div className="App-inner App-settings">
                <CustomInput
                    onChange={maxValueCallback}
                    labelTitle="max value"
                    type="number"
                    value={maxValue}/>

                <CustomInput
                    onChange={startValueCallback}
                    labelTitle="start value"
                    type="number"
                    value={startValue}/>
            </div>

            <div className="App-input">
                <CustomButton
                    disabled={error}
                    onClick={() => saveSettings(startValue, maxValue)}>
                    set
                </CustomButton>
            </div>
        </>
    );
};