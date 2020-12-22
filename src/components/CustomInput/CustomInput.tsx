import React, {DetailedHTMLProps, ChangeEvent, KeyboardEvent, InputHTMLAttributes} from 'react';
import css from "./CustomInput.module.scss";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: (value: string) => void
    error?: string | null
    spanClassName?: string
    labelTitle?: string
};

const CustomInput: React.FC<SuperInputTextPropsType> = (
    {
        labelTitle,
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter" // если нажата кнопка Enter
        && onEnter // и есть пропс onEnter
        && onEnter(e.currentTarget.value); // то вызвать его
    }
    const finalSpanClassName = `${css.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = error ? `${css.errorInput} ${css.inputField}` : css.inputField;

    return (
        <label className={css.label}>
            <span className={css.labelTitle}>
                {labelTitle}
            </span>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <label className={finalSpanClassName}>{error}</label>}
        </label>
    );
};

export default CustomInput;
