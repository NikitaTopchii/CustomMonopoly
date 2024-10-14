
import React, {useState} from "react";
import CropperForm from "../Cropper/CropperForm";
import CustomModal from "../CustomModal/CustomModal";

const CornerCell = (props: { cellStyle: string, setBackground?: (state: boolean) => void, backgroundImageUrl?: string }) => {

    const [modal, setModal] = useState(false);
    const [number, setNumber] = useState(0);

    const [backgroundImageCornerCells, setBackgroundImageCornerCells] = React.useState('');

    const setCroppedImage = (url: string) => {
        setBackgroundImageCornerCells(url)
    }

    return (
        <div
            style={{backgroundImage: `url(${backgroundImageCornerCells})`}}
            className={"monopoly-board__" + props.cellStyle}
            onClick={() => { setModal(true); setNumber(number + 1) }}
        >
            { number }
            <div onClick={(event) => event.stopPropagation()}>
                <CustomModal visible={modal} setModal={setModal}>
                    <CropperForm setCroppedImage={setCroppedImage} clearImage={setModal}/>
                </CustomModal>
            </div>
        </div>
    )
}

export default CornerCell;