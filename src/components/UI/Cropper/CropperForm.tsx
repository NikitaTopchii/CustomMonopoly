import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";
import classes from "./CropperForm.module.css";
import ActionInput from "../ActionInput/ActionInput";
import ActionButton from "../ActionButton/ActionButton";

const CropperForm = (props: { setCroppedImage: (url: string) => void, clearImage: (state: boolean ) => void }) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [imageTemplate, setImageTemplate] = useState<string | null>(null);  // Початково null

    const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const onChange = (e: any) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageTemplate(reader.result as string);
            };
            reader.readAsDataURL(files[0]);
        }
    };


    const cropImage = async () => {
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
                <input type="file" id="file-upload" onChange={onChange} className={classes.cropperFileInput} />
                {imageTemplate && (
                    <div className={classes.cropperActionBlock}>
                        <Cropper
                            image={imageTemplate}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                )}
                <form className={classes.cellDataTextForm}>
                    <ActionInput/>
                    <ActionInput/>
                </form>
                <ActionButton onClick={cropImage}>Save</ActionButton>
            </div>
        </div>
    );
};

export default CropperForm;