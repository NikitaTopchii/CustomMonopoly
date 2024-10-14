import SideCell from "../SideCell/SideCell";
import React, {useState} from "react";

interface Cell {
    sideCellsStyle: string,
    sideCellStyle: string,
    firstCellColor: string,
    secondCellColor: string
}


const PartSideCells = (props: { body: Cell, cells: string[], cellColor: string, partType: string}) => {

    const [cellsPickedColor, setCellsPickedColor] = useState('');

    const changeColor = (color: string) => {
        setCellsPickedColor(color);
    }

    return (
        <div className={'part-side-cells ' + props.partType}>
            { props.cells.map((cell, i) => {
                if(cell === 'option'){
                    return <SideCell
                        sideCellStyle={props.body.sideCellStyle}
                        colorNumber={'eight-color'}
                        optionStyle={'option'}
                        key={i}
                        changeColor={changeColor} />
                } else {
                    return <SideCell
                        sideCellStyle={props.body.sideCellStyle}
                        colorNumber={props.cellColor}
                        key={i} changeColor={changeColor}
                        pickedColor={cellsPickedColor}/>
                }
            })}
        </div>
    )
}

export default PartSideCells;