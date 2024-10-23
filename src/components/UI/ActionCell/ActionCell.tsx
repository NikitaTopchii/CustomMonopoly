
import React from "react";
import classes from "./ActionCell.module.css"

export interface ActionCellProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.AriaAttributes  {
    cornerCellBackgroundUrl: string,
    cellDescription: string
    onClick?: () => void
}


const ActionCell: React.FC<ActionCellProps> = (props) => {

    return (
        <div className={classes.actionCell} style={{backgroundImage: `url(${props.cornerCellBackgroundUrl})`}} onClick={props.onClick}>
            <span>{props.cellDescription}</span>
        </div>
    )
}

export default ActionCell;