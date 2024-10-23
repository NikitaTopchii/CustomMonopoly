import React, {useRef, useState} from "react";
import CustomModal from "../CustomModal/CustomModal";
import CropperForm from "../Cropper/CropperForm";
import CellDescriptionForm from "../CellDescriptionForm/CellDescriptionForm";
import classes from "./SideCell.module.css";
import {SideCellPropsInterface} from "../../utils/SideCellProps.interface";


const SideCell: React.FC<SideCellPropsInterface> = (props) => {

    const [modal, setModal] = useState(false);

    const [backgroundImageCornerCells, setBackgroundImageCornerCells] = useState('');

    const [cellDescription, setCellDescription] = useState('');

    const setCroppedImage = (url: string) => {
        setBackgroundImageCornerCells(url);
        setModal(false);  // Закриваємо модальне вікно після збереження кропнутого зображення
    };

    const openCropper = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('openCropper')
        const target = event.target as HTMLElement;

        if (target.classList.contains('monopoly-board__' + props.sideCellStyle) || target.classList.contains("monopoly-board__" + props.sideCellStyle + ' ' + props.optionStyle)) {
            setModal(true);
        }
    };

    const colorInputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    };

    const modalTypeByStyle = () => {
        if (['top-cell', 'bottom-cell'].includes(props.sideCellStyle)) {
            return 'topBottomSideCell';
        }
        if (['left-cell', 'right-cell'].includes(props.sideCellStyle)) {
            return 'leftRightSideCell';
        }
        return 'leftRightSideCell';
    }

    return (
        <div className={"monopoly-board__" + props.sideCellStyle + ' ' + props.optionStyle} onClick={(e) => openCropper(e)} style={{backgroundImage: `url(${backgroundImageCornerCells})`}}>
            {
                props.optionStyle
                    ? undefined
                    : <div className={props.sideCellStyle + "-color " + props.colorNumber}
                           onClick={(e) => handleDivClick(e)}
                           style={{background: props.pickedColor}}>
                        <input
                            type='color'
                            id="head"
                            name="head"
                            defaultValue="#e66465"
                            ref={colorInputRef}
                            onChange={(e) => props.changeColor(e.target.value)}
                            style={{display: 'none'}}
                        />
                    </div>
            }

            <span className={classes.sideCellDescription}>{cellDescription}</span>

            {modal && (<CustomModal visible={modal} setModal={setModal}>
                <CellDescriptionForm setCellDescription={setCellDescription}/>
                <CropperForm setCroppedImage={setCroppedImage} clearImage={setModal}
                             cropperType={modalTypeByStyle()}/>
            </CustomModal>)}
        </div>
    );
}

export default SideCell;