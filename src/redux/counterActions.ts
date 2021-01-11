import {useDispatch as _useDispatch} from 'react-redux';
import {COUNTER_TYPES} from "./counterConstats";

export type CounterActionsType =
    ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setDisplayValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof loadStorageValueAC>

export const setStartValueAC = (startValue: string) => ({
    type: COUNTER_TYPES.SET_START_VALUE,
    payload: { startValue }
} as const);

export const setMaxValueAC = (maxValue: string) => ({
    type: COUNTER_TYPES.SET_MAX_VALUE,
    payload: { maxValue }
} as const);

export const setDisplayValueAC = (displayValue: string) => ({
    type: COUNTER_TYPES.SET_DISPLAY_VALUE,
    payload: { displayValue }
} as const);

export const setErrorAC = (error: boolean) => ({
    type: COUNTER_TYPES.SET_ERROR,
    payload: { error }
} as const);

export const loadStorageValueAC = (startValue: string, maxValue: string) => ({
    type: COUNTER_TYPES.LOAD_STORAGE_VALUE,
    payload: { startValue, maxValue }
} as const);

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ActionCreator: CounterActionsType) => dispatch(ActionCreator);
}



