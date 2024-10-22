
import React, { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import CropperForm from "../Cropper/CropperForm";
import CellDescriptionForm from "../CellDescriptionForm/CellDescriptionForm";

import classes from "./CornerCell.module.css";

const CornerCell = (props: { cellStyle: string }) => {
    const [modal, setModal] = useState(false);
    const [cornerCellBackgroundUrl, setCornerCellBackgroundUrl] = useState('');
    const [cellDescription, setCellDescription] = useState('');

    const openCropper = () => {
        console.log('which modal open: ' + props.cellStyle);
        setModal(true);
    };

    const setCroppedImage = (url: string) => {
        setCornerCellBackgroundUrl(url);
        setModal(false);
    }

    const getCellDescriptionStylePosition = (cellStyle: string) => {
        switch (cellStyle) {
            case 'top-left-cell':
                return classes.negativeCellDescription45deg;
            case 'top-right-cell':
                return classes.cellDescription45deg;
            case 'bottom-left-cell':
                return classes.negativeCellDescription135deg;
            case 'bottom-right-cell':
                return classes.negativeCellDescription45deg;
            default:
                return classes.cellDescription135deg;
        }
    }

    return (
        <div
            style={{backgroundImage: `url(${cornerCellBackgroundUrl})`}}
            className={"monopoly-board__" + props.cellStyle}
            onClick={openCropper}
        >
            <span className={getCellDescriptionStylePosition(props.cellStyle)}>{cellDescription}</span>
            <div onClick={(event) => event.stopPropagation()}>
                {modal && (<CustomModal visible={modal} setModal={setModal}>
                    <CellDescriptionForm setCellDescription={setCellDescription}/>
                    <CropperForm setCroppedImage={setCroppedImage} clearImage={setModal} cropperType={'cornerCell'}/>
                </CustomModal>)}
            </div>
        </div>
    );
};

export default CornerCell;