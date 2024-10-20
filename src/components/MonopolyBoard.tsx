
import React, {useState} from "react";
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

    const [cornerCellState, setCornerCellState] = useState({
        topLeftCellBackgroundUrl: '',
        topRightCellBackgroundUrl: '',
        bottomLeftCellBackgroundUrl: '',
        bottomRightCellBackgroundUrl: ''
    })

    const setCornerCellStateConcrete = (url: string, place: string) => {
        console.log('place: ' + place)
        console.log('url: ' + url.slice(0, 10))
        switch (place){
            case 'top-left-cell': {
                setCornerCellState({
                    ...cornerCellState,
                    topLeftCellBackgroundUrl: url,
                })
                break;
            }
            case 'top-right-cell': {
                setCornerCellState({
                    ...cornerCellState,
                    topRightCellBackgroundUrl: url,
                })
                break;
            }
            case 'bottom-left-cell': {
                setCornerCellState({
                    ...cornerCellState,
                    bottomLeftCellBackgroundUrl: url,
                })
                break;
            }
            case 'bottom-right-cell': {
                setCornerCellState({
                    ...cornerCellState,
                    bottomRightCellBackgroundUrl: url,
                })
                break;
            }
        }
    }

    return (
        <div className="monopoly-board">

            <SideCells
                body={topCells}
                firstCells={firstTopCells}
                secondCells={secondTopCells}
                partType={ { first: 'top-first', second: 'top-second' }}
                optionPartStyle={'top-option-cell'}
            />

            <CornerCell cellStyle={'top-right-cell'} cornerCellBackgroundUrl={cornerCellState.topRightCellBackgroundUrl} setCroppedImage={setCornerCellStateConcrete}/>

            <SideCells
                body={leftCells}
                firstCells={firstLeftCells}
                secondCells={secondLeftCells}
                partType={ { first: 'side-first', second: 'side-second' }}
            />

            <CornerCell cellStyle={'top-left-cell'} cornerCellBackgroundUrl={cornerCellState.topLeftCellBackgroundUrl} setCroppedImage={setCornerCellStateConcrete}/>

            <SideCells
                body={rightCells}
                firstCells={firstRightCells}
                secondCells={secondRightCells}
                partType={ { first: 'side-first', second: 'side-second' }}
            />

            <div className="monopoly-board__center-cell"></div>

            <CornerCell cellStyle={'bottom-right-cell'} cornerCellBackgroundUrl={cornerCellState.bottomRightCellBackgroundUrl} setCroppedImage={setCornerCellStateConcrete}/>

            <SideCells
                body={bottomCells}
                firstCells={firstBottomCells}
                secondCells={secondBottomCells}
                partType={ { first: 'top-first', second: 'top-second' }}
                optionPartStyle={'top-option-cell'}/>

            <CornerCell cellStyle={'bottom-left-cell'} cornerCellBackgroundUrl={cornerCellState.bottomLeftCellBackgroundUrl} setCroppedImage={setCornerCellStateConcrete}/>
        </div>
    )
}

export default MonopolyBoard;