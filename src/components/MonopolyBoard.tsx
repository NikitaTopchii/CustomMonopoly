
import React from "react";
import CornerCell from "./UI/CornerCell/CornerCell";
import SideCells from "./UI/SideCells/SideCells";
 
interface Cell {
    sideCellsStyle: string,
    sideCellStyle: string,
    firstCellColor: string,
    secondCellColor: string
}

const MonopolyBoard = () => {

    const firstLeftCells = ['none', 'none', 'option', 'none']
    const secondLeftCells = ['option', 'none', 'option', 'none']

    const firstTopCells = ['none', 'option', 'none', 'none']
    const secondTopCells = ['none', 'option', 'none', 'none']

    const firstRightCells = ['none', 'option', 'none', 'none']
    const secondRightCells = ['none', 'none', 'option', 'none']

    const firstBottomCells = ['none', 'option', 'none', 'option']
    const secondBottomCells = ['none', 'option', 'none', 'none']

    const leftCells: Cell = {
        sideCellsStyle: 'left-cells',
        sideCellStyle: 'left-cell',
        firstCellColor: 'eight-color',
        secondCellColor: 'seven-color',
    };

    const topCells: Cell = {
        sideCellsStyle: 'top-cells',
        sideCellStyle: 'top-cell',
        firstCellColor: 'one-color',
        secondCellColor: 'two-color',
    };

    const rightCells: Cell = {
        sideCellsStyle: 'right-cells',
        sideCellStyle: 'right-cell',
        firstCellColor: 'three-color',
        secondCellColor: 'four-color',
    };

    const bottomCells: Cell = {
        sideCellsStyle: 'bottom-cells',
        sideCellStyle: 'bottom-cell',
        firstCellColor: 'five-color',
        secondCellColor: 'six-color',
    };

    return (
        <div className="monopoly-board">

            <SideCells
                body={leftCells}
                firstCells={firstLeftCells}
                secondCells={secondLeftCells}
                partType={ { first: 'side-first', second: 'side-second' }}
            />

            <CornerCell cellStyle={'top-left-cell'}/>

            <SideCells
                body={topCells}
                firstCells={firstTopCells}
                secondCells={secondTopCells}
                partType={ { first: 'top-first', second: 'top-second' }}
                optionPartStyle={'top-option-cell'}
            />

            <CornerCell cellStyle={'top-right-cell'}/>

            <SideCells
                body={rightCells}
                firstCells={firstRightCells}
                secondCells={secondRightCells}
                partType={ { first: 'side-first', second: 'side-second' }}
            />

            <div className="monopoly-board__center-cell"></div>

            <CornerCell cellStyle={'bottom-right-cell'}/>

            <SideCells
                body={bottomCells}
                firstCells={firstBottomCells}
                secondCells={secondBottomCells}
                partType={ { first: 'top-first', second: 'top-second' }}
                optionPartStyle={'top-option-cell'}/>

            <CornerCell cellStyle={'bottom-left-cell'}/>
        </div>
    )
}

export default MonopolyBoard;