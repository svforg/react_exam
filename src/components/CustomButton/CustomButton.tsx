import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import css from './CustomButton.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const CustomButton: React.FC<DefaultButtonPropsType> = (
    {
        ...restProps
    }
) => {

  return (
    <button className={`${css.button} ${css.button_filled}`}
      {...restProps}
    />
  );
};

export default CustomButton;
