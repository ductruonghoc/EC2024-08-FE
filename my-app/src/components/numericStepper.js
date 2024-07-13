import React from "react";

import SquareButton from "./squareButton";

import PlusIcon from "../assets/svg/plus.svg";
import DashIcon from "../assets/svg/dash.svg";

import "../assets/css/buttonGroup.css"

const NumericStepper = ({ value = 0, setValue = (v) => undefined, stepValue = 1}) => {
    const handleIncrement = () => {
        setValue(value + stepValue)
    }

    const handleDecrement = () => {
        if(value > 0)
            setValue(value - stepValue);
    }

    return (
        <div className="numeric-stepper">
            <SquareButton custom="numeric-stepper--button" onClick={handleDecrement} svg={DashIcon}/>
            <div className="numeric-stepper--value">{value}</div>
            <SquareButton custom="numeric-stepper--button" onClick={handleIncrement} svg={PlusIcon}/>
        </div>
    );
}

export default NumericStepper;
