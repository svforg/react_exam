export function savesState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoresState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}
//
// // получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
// const state: StateType = restoreState<StateType>("test", {x: "", y: 0});