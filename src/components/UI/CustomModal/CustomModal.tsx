
import React, {ReactNode} from "react";
import classes from "./CustomModal.module.css";

const CustomModal = (props: { visible: boolean, setModal: (visible: boolean) => void, children: ReactNode }) => {

    const rootClasses = [classes.customModal];

    if(props.visible){
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => props.setModal(false)}>
            <div className={classes.customModalContent} onClick={(event) => event.stopPropagation()}>
                { props.children }
            </div>
        </div>
    )
}

export default CustomModal;