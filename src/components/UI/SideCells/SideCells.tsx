import React from "react";
import SideCell from "../SideCell/SideCell";
import PartSideCells from "../PartSideCells/PartSideCells";

interface Cell {
    sideCellsStyle: string,
    sideCellStyle: string,
    firstCellColor: string,
    secondCellColor: string
}

const SideCells = (
    props: {
        body: Cell,
        firstCells: string[],
        secondCells: string[],
        partType: { first: string, second: string },
        optionPartStyle?: string
    }) => {

    return (
        <div className={"monopoly-board__" + props.body.sideCellsStyle}>
            <PartSideCells
                body={props.body}
                cells={props.firstCells}
                cellColor={props.body.firstCellColor}
                partType={props.partType.first}
            />

            <SideCell
                sideCellStyle={props.body.sideCellStyle}
                optionStyle={'option-center ' + props.optionPartStyle}
                changeColor={ () => ''}/>

            <PartSideCells
                body={props.body}
                cells={props.secondCells}
                cellColor={props.body.secondCellColor}
                partType={props.partType.second}
            />
        </div>
    )
}

export default SideCells;