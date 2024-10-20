
import React, { useState } from "react";
import CustomModal from "../CustomModal/CustomModal";
import CropperForm from "../Cropper/CropperForm";

const CornerCell = (props: { cellStyle: string }) => {
    const [modal, setModal] = useState(false);
    const [backgroundImageCornerCells, setBackgroundImageCornerCells] = useState('');

    const setCroppedImage = (url: string) => {
        setBackgroundImageCornerCells(url);
        setModal(false);  // Закриваємо модальне вікно після збереження кропнутого зображення
    };

    const openCropper = () => {
        setModal(true);
    };

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImageCornerCells})` }}
            className={"monopoly-board__" + props.cellStyle}
            onClick={openCropper}
        >
            <div onClick={(event) => event.stopPropagation()}>
                <CustomModal visible={modal} setModal={setModal}>
                    <CropperForm setCroppedImage={setCroppedImage} clearImage={setModal} />
                </CustomModal>
            </div>
        </div>
    );
};

export default CornerCell;