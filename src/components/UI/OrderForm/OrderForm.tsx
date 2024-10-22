
import React from "react";
import classes from "./OrderForm.module.css";
import ActionButton from "../ActionButton/ActionButton";
import {useFormik} from "formik";
import ActionInput from "../ActionInput/ActionInput";

const OrderForm = () => {

    const validate = (values: {
        email: string
        name: string,
        streetAddress: string,
        city: string,
        state: string
        postalCode: string,
    }) => {
        const errors: {
            email?: string
            name?: string,
            streetAddress?: string,
            city?: string,
            state?: string
            postalCode?: string,
        } = {};  // Не ініціалізуємо порожні рядки

        if (!values.email) {
            errors.email = 'Must be required';
        }

        if (!values.name) {
            errors.name = 'Must be required';
        }

        if (!values.streetAddress) {
            errors.streetAddress = 'Must be required';
        }

        if (!values.city) {
            errors.city = 'Must be required';
        }

        if (!values.state) {
            errors.state = 'Must be required';
        }

        if (!values.postalCode) {
            errors.postalCode = 'Must be required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
        },
        onSubmit: values => {
            //props.setCellDescription(values.cellDescription);
        },
        validate
    });

    return (
        <div>
                <form className={classes.myForm} onSubmit={formik.handleSubmit}>
                    <div className={classes.orderInfoBlock}>
                        <span className={classes.orderInfoBlockTitle}>Personal info</span>
                        <label>Your name</label>
                        <ActionInput name="name" value={formik.values.name} onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}/>
                        <span className={classes.errorMessage}>{formik.errors.name}</span>
                        <label>Your email</label>
                        <ActionInput
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}/>
                        <span className={classes.errorMessage}>{formik.errors.email}</span>
                    </div>
                    <div className={classes.orderInfoBlock}>
                        <span className={classes.orderInfoBlockTitle}>Your shipping address</span>
                        <label>Street address</label>
                        <ActionInput name="streetAddress" value={formik.values.streetAddress}
                                     onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}/>
                        <span className={classes.errorMessage}>{formik.errors.streetAddress}</span>
                        <label>City</label>
                        <ActionInput name="city" value={formik.values.city} onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}/>
                        <span className={classes.errorMessage}>{formik.errors.city}</span>
                        <label>State</label>
                        <ActionInput name="state" value={formik.values.state} onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}/>
                        <span className={classes.errorMessage}>{formik.errors.state}</span>
                        <label>Postal / Zip Code</label>
                        <ActionInput name="postalCode" value={formik.values.postalCode} onChange={formik.handleChange}
                                     onBlur={formik.handleBlur}/>
                        <span className={classes.errorMessage}>{formik.errors.postalCode}</span>
                    </div>
                    <ActionButton type="submit" disabled={!!formik.errors.city || !!formik.errors.email || !!formik.errors.name}>save</ActionButton>
                </form>
        </div>
)
}

export default OrderForm;