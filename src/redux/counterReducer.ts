import {COUNTER_TYPES} from "./counterConstats";
import {CounterActionsType} from "./counterActions";

export type CounterStateType = {
    startValue: string
    maxValue: string
    displayValue: string
    error: boolean
}

let initialState = {
    startValue: "",
    maxValue: "",
    displayValue: "0",
    error: false,
};

export const counterReducer = (state: CounterStateType = initialState, action: CounterActionsType): CounterStateType => {

    switch (action.type) {
        case COUNTER_TYPES.SET_START_VALUE:
            return {
                ...state,
                startValue: action.payload.startValue
            };

        case COUNTER_TYPES.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.payload.maxValue
            };

        case COUNTER_TYPES.SET_DISPLAY_VALUE:
            return {
                ...state,
                displayValue: action.payload.displayValue
            };

        case COUNTER_TYPES.SET_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case COUNTER_TYPES.LOAD_STORAGE_VALUE:
            return {
                ...state,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue
            };

        default:
            return state;
    }
};
