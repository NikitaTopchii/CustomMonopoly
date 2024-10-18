
import React from 'react';
import classes from "./ActionInput.module.css"

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, React.AriaAttributes  {}

const ActionInput: React.FC<InputProps> = (props) => {

    const {...rest} = props;

    return (
        <input className={classes.actionInput} {...rest}/>
    )
}

export default ActionInput;