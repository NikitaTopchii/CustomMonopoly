import React, {useState} from "react";
import classes from "./MainCell.module.css"
import ActionCell from "../ActionCell/ActionCell";
import CustomModal from "../CustomModal/CustomModal";
import CellDescriptionForm from "../CellDescriptionForm/CellDescriptionForm";
import CropperForm from "../Cropper/CropperForm";

const MainCell = () => {

    const [modal, setModal] = useState(false);
    const [cornerCellBackgroundUrl, setCornerCellBackgroundUrl] = useState('');
    const [cellDescription, setCellDescription] = useState('');

    const openCropper = () => {
        setModal(true);
    };

    const setCroppedImage = (url: string) => {
        setCornerCellBackgroundUrl(url);
        setModal(false);
    }

    return (
        <div className={classes.centerCell}>
            <div className={classes.wrapperForCells}>
                <ActionCell cellDescription={cellDescription} cornerCellBackgroundUrl={cornerCellBackgroundUrl} onClick={openCropper}/>
                <div className={classes.mainCell} onClick={openCropper}></div>
                <ActionCell cellDescription={cellDescription} cornerCellBackgroundUrl={cornerCellBackgroundUrl} onClick={openCropper}/>
            </div>
            <div onClick={(event) => event.stopPropagation()} className={classes.modalWrapper}>
                {modal && (<CustomModal visible={modal} setModal={setModal}>
                    <CellDescriptionForm setCellDescription={setCellDescription}/>
                    <CropperForm setCroppedImage={setCroppedImage} clearImage={setModal} cropperType={'actionCell'}/>
                </CustomModal>)}
            </div>
        </div>
    )
}

export default MainCell;