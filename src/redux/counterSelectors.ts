import { IGlobalState } from './store';

interface IRootState extends IGlobalState {}

export const selectStartValue = (state: IRootState) => state.counter.startValue;
export const selectMaxValue = (state: IRootState) => state.counter.maxValue;
export const selectDisplayValue = (state: IRootState) => state.counter.displayValue;
export const selectError = (state: IRootState) => state.counter.error;

export const selectAll = (state: IRootState) => state.counter;
