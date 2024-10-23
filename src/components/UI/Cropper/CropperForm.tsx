import React, {useState} from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";
import classes from "./CropperForm.module.css";
import ActionInput from "../ActionInput/ActionInput";
import ActionButton from "../ActionButton/ActionButton";

const CropperForm = (props: { setCroppedImage: (url: string) => void, clearImage: (state: boolean ) => void, cropperType: string}) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [imageTemplate, setImageTemplate] = useState<string | null>(null);  // Початково null

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.target.files;

        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const result = reader.result as string;
                console.log('Uploaded image:', result);
                setImageTemplate(result);
            };

            reader.readAsDataURL(file);
        }
    };

    const cropperType = () => {
        switch (props.cropperType){
            case 'cornerCell':
                return 1;
            case 'topBottomSideCell':
                return 9 / 16;
            case 'leftRightSideCell':
                return 16 / 9;
            case 'actionCell':
                return 9 / 16;
            default:
                return 1;
        }
    }


    const cropImage = async () => {

        console.log('imageTemplate: ' + imageTemplate)

        if (!imageTemplate || !croppedAreaPixels) return;

        const image = new Image();
        image.src = imageTemplate;
        image.onload = async () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const { width, height, x, y } = croppedAreaPixels;
            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(
                image,
                x, y, width, height,
                0, 0, width, height
            );

            const croppedImageUrl = canvas.toDataURL();
            props.setCroppedImage(croppedImageUrl);
        };
    };

    return (
        <div>
            <div className={classes.cropperForm}>
                <label htmlFor="file-upload" className={classes.cropperFileInput}>
                    upload image
                </label>
                <input type="file" id="file-upload" onChange={(e) => onChange(e)} className={classes.cropperFileInput} />
                {imageTemplate && (
                    <div className={classes.cropperActionBlock}>
                        <Cropper
                            image={imageTemplate}
                            crop={crop}
                            zoom={zoom}
                            aspect={cropperType()}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                )}
                <ActionButton onClick={cropImage} style={{marginTop: 20}} disabled={!imageTemplate}>Save</ActionButton>
            </div>
        </div>
    );
};

export default CropperForm;