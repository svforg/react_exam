import React, {ChangeEvent} from 'react';
import CustomButton from "../../shared/CustomButton/CustomButton";
import CustomInput from "../../shared/CustomInput/CustomInput";
import css from "./Settings.module.scss";

type SettingsPropsType = {
    saveSettings: () => void
    checkError: (startValue: string, maxValue: string) => void
    maxValueHandler: (maxValue: string) => void
    maxValue: string
    startValueHandler: (startValue: string) => void
    startValue: string
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
        maxValueHandler(event.currentTarget.valueAsNumber.toString());
        checkError(startValue, event.currentTarget.valueAsNumber.toString());
    };
    const startValueCallback = (event: ChangeEvent<HTMLInputElement>) => {
        startValueHandler(event.currentTarget.valueAsNumber.toString());
        checkError(event.currentTarget.valueAsNumber.toString(), maxValue);
    };

    const saveSettingsValue = () => saveSettings();

    return (
        <div className={css.AppWrapper}>

        <div className={css.AppSettings}>
                <CustomInput
                    onChange={maxValueCallback}
                    labelTitle="Max value"
                    type="number"
                    value={maxValue}/>

                <CustomInput
                    onChange={startValueCallback}
                    labelTitle="Start value"
                    type="number"
                    value={startValue}/>
            </div>

            <div className={css.AppInput}>
                <CustomButton
                    disabled={error}
                    onClick={saveSettingsValue}>
                    set
                </CustomButton>
            </div>
        </div>
    );
};