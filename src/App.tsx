import React, {useState} from 'react';
import './App.css';
import Output from "./components/Output/Output";
import CustomButton from "./components/CustomButton/CustomButton";

type AppPropsType = {}

function App(props: AppPropsType) {

    let [incrementValue, setIncrementValue] = useState<number>(0);

    const setIncrementValueUp = () => setIncrementValue(++incrementValue);

    const setIncrementDefault = () => setIncrementValue(0);

    return (
        <div className="App">
            <div className="App-wrapper">
                <div className="App-output">
                    <Output incrementValue={incrementValue}/>
                </div>

                <div className="App-input">
                    <CustomButton onClick={setIncrementValueUp} disabled={incrementValue > 4}>
                        inc
                    </CustomButton>

                    <CustomButton onClick={setIncrementDefault} disabled={incrementValue === 0}>
                        reset
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}

export default App;
