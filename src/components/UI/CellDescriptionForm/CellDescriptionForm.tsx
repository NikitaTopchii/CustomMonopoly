
import React from "react";
import classes from "./CellDescriptionForm.module.css";
import ActionInput from "../ActionInput/ActionInput";
import ActionButton from "../ActionButton/ActionButton";
import { useFormik} from "formik";

const CellDescriptionForm = (props: { setCellDescription: (cellDescription: string) => void }) => {

    const validate = (values: { cellDescription: string}) => {
        const errors: { cellDescription?: string } = {};  // Не ініціалізуємо порожні рядки

        if (values.cellDescription.length > 10) {
            errors.cellDescription = 'Must be 10 characters or less';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            cellDescription: '',
        },
        onSubmit: values => {
            props.setCellDescription(values.cellDescription);
        },
        validate
    });

    return (
        <form className={classes.cellDescriptionForm} onSubmit={formik.handleSubmit}>
            <label htmlFor={'cellDescription'} className={classes.cellDescriptionLabel}>First word</label>
            <ActionInput
                name="cellDescription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cellDescription}/>
            <span className={classes.errorMessage}>{formik.errors.cellDescription}</span>
            <ActionButton type="submit" style={{marginTop: 20}} disabled={!!formik.errors.cellDescription}>Confirm</ActionButton>
        </form>
    )
}

export default CellDescriptionForm;