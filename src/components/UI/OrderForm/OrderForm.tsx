
import React from "react";
import classes from "./OrderForm.module.css";
import ActionButton from "../ActionButton/ActionButton";
import {Formik} from "formik";
import ActionInput from "../ActionInput/ActionInput";

const OrderForm = () => {
    return (
        <div>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
                    const errors = {
                        email: ''
                    };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                <form className={classes.myForm} onSubmit={handleSubmit}>
                    <div className={classes.orderInfoBlock}>
                        <span className={classes.orderInfoBlockTitle}>Personal info</span>
                        <label>Your name</label>
                        <ActionInput/>
                        <label>Your email</label>
                        <ActionInput type="email"
                               name="email"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email}/>
                        {errors.email && touched.email && errors.email}
                    </div>
                    <div className={classes.orderInfoBlock}>
                        <span className={classes.orderInfoBlockTitle}>Your shipping address</span>
                        <label>Street address</label>
                        <ActionInput/>
                        <label>City</label>
                        <ActionInput/>
                        <label>State</label>
                        <ActionInput/>
                        <label>Postal / Zip Code</label>
                        <ActionInput/>
                    </div>
                    <ActionButton disabled={isSubmitting}>save</ActionButton>
                </form>
                )}
            </Formik>
        </div>
)
}

export default OrderForm;