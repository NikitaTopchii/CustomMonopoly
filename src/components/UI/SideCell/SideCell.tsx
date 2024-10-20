import React, {useRef, useState} from "react";
import CustomModal from "../CustomModal/CustomModal";
import CropperForm from "../Cropper/CropperForm";

interface SideCellProps {
    sideCellStyle: string;
    colorNumber?: string;
    optionStyle?: string;
    changeColor: (color: string) => void;
    pickedColor?: string;
}

const SideCell: React.FC<SideCellProps> = (props) => {

    const [modal, setModal] = useState(false);

    const [backgroundImageCornerCells, setBackgroundImageCornerCells] = useState('');

    const setCroppedImage = (url: string) => {
        setBackgroundImageCornerCells(url);
        setModal(false);  // Закриваємо модальне вікно після збереження кропнутого зображення
    };

    const openCropper = () => {
        setModal(true);
    };

    const colorInputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    };

    return (
        <div className={"monopoly-board__" + props.sideCellStyle + ' ' + props.optionStyle} onClick={openCropper}
             style={{backgroundImage: `url(${backgroundImageCornerCells})`}}>

            {
                props.optionStyle
                    ? undefined
                    : <div className={props.sideCellStyle + "-color " + props.colorNumber} onClick={handleDivClick}
                           style={{background: props.pickedColor}}>
                    </div>
            }

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
    );
}

export default SideCell;