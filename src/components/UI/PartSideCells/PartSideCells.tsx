import SideCell from "../SideCell/SideCell";
import React, {useState} from "react";
import {Cell} from "../../utils/Cell.interface";

const PartSideCells = (props: { body: Cell, cells: string[], cellColor: string, partType: string}) => {

    const [cellsPickedColor, setCellsPickedColor] = useState('');

    const changeColor = (color: string) => {
        setCellsPickedColor(color);
    }

    return (
        <div className={'part-side-cells ' + props.partType}>
            {props.cells.map((cell, i) => {
                const sideCellProps = {
                    sideCellStyle: props.body.sideCellStyle,
                    key: i,
                    changeColor,
                    pickedColor: cellsPickedColor,
                };

                return cell === 'option' ? (
                    <SideCell {...sideCellProps} colorNumber="eight-color" optionStyle="option" />
                ) : (
                    <SideCell {...sideCellProps} colorNumber={props.cellColor} />
                );
            })}
        </div>
    );
}

export default PartSideCells;