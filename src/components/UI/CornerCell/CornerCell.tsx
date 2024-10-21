
import React, { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import CropperForm from "../Cropper/CropperForm";

const CornerCell = (props: { cellStyle: string, cornerCellBackgroundUrl: string, setCroppedImage: (url: string, place: string) => void }) => {
    const [modal, setModal] = useState(false);

    const openCropper = () => {
        console.log('which modal open: ' + props.cellStyle);
        setModal(true);
    };

    return (
        <div
            style={{backgroundImage: `url(${props.cornerCellBackgroundUrl})`}}
            className={"monopoly-board__" + props.cellStyle}
            onClick={openCropper}
        >
            {props.cellStyle}
            <div onClick={(event) => event.stopPropagation()}>
                {modal && (<CustomModal visible={modal} setModal={setModal}>
                    <CropperForm setCroppedImage={props.setCroppedImage} clearImage={setModal}
                                 cellPlace={props.cellStyle}/>
                </CustomModal>)}
            </div>
        </div>
    );
};

export default CornerCell;