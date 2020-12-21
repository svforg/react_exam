import React from 'react';
import CustomButton from "./../CustomButton/CustomButton";
import CustomInput from "./../CustomInput/CustomInput";

type SettingsPropsType = {
    saveSettings: (startValue: string, maxValue: string) => void
    maxValueHandler: (value: string) => void
    maxValue: string
    startValueHandler: (value: string) => void
    startValue: string
    error: boolean
}

export const Settings: React.FC<SettingsPropsType> = (
    {
        saveSettings,
        maxValueHandler,
        maxValue,
        startValueHandler,
        startValue,
        error
    }
) => {

    return (
        <>
            <div className="App-inner App-settings">
                <CustomInput
                    onChangeText={maxValueHandler}
                    labelTitle="max value"
                    type="number"
                    value={maxValue}/>

                <CustomInput
                    onChangeText={startValueHandler}
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