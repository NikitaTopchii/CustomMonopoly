import React, {createRef, useState} from "react";
import {Cropper, ReactCropperElement} from "react-cropper";
import 'cropperjs/dist/cropper.css';

import classes from "./CropperForm.module.css";


const CropperForm = (props: { setCroppedImage: (url: string) => void, clearImage: (state: boolean ) => void }) => {
    const [image, setImage] = useState('');
    const cropperRef = createRef<ReactCropperElement>();
    const onChange = (e: any) => {
        e.preventDefault();
        console.log('onChange', e);
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result)
            setImage(reader.result as string);
            console.log(image)
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        console.log(cropperRef.current)
        if (typeof cropperRef.current?.cropper !== "undefined") {
            const croppedImage = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
            props.setCroppedImage(croppedImage);
            setImage('');
            props.clearImage(false);
        }
    };

    return (
        <div>
            <div className={classes.cropperForm}>
                <label htmlFor="file-upload" className={classes.cropperFileInput}>
                    upload image
                </label>
                <input type="file" id="file-upload" onChange={onChange} className={classes.cropperFileInput}/>
                <Cropper
                    ref={cropperRef}
                    style={{ height: 400, maxWidth: 600 }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    guides={true}
                />
            </div>
            <div>
                <div className="box" style={{width: "50%", float: "right" }}>
                    <h1>Preview</h1>
                    <div
                        className="img-preview"
                        style={{ width: "100%", float: "left", height: "300px" }}
                    />
                </div>
                <div
                    className="box"
                    style={{ width: "50%", float: "right", height: "300px" }}
                >
                    <button className={classes.cropperFileInput} onClick={getCropData} disabled={!image}>
                        Crop Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CropperForm