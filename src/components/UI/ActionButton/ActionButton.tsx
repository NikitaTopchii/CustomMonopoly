
import React from "react";
import classes from "./ActionButton.module.css"

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

const ActionButton:React.FC<ButtonProps> = props => {

    const {children, ...rest} = props;

    return (
        <button className={classes.actionButton} {...rest}>{children}</button>
    )
}

export default ActionButton;