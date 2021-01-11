import React from 'react';
import {Counter} from "./containers/Counter";
import css from './App.module.scss';

export const App: React.FC = () =>
    <div className={css.App}>
        <Counter />
    </div>;
