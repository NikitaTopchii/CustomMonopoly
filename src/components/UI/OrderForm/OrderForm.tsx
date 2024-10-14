
import React from "react";
import classes from "./OrderForm.module.css";
import ActionButton from "../ActionButton/ActionButton";

const OrderForm = () => {
    return (
        <form className={classes.myForm}>
            <div className={classes.orderInfoBlock}>
                <span className={classes.orderInfoBlockTitle}>Personal info</span>
                <label>Your name</label>
                <input/>
                <label>Your email</label>
                <input/>
            </div>
            <div className={classes.orderInfoBlock}>
                <span className={classes.orderInfoBlockTitle}>Your shipping address</span>
                <label>Street address</label>
                <input/>
                <label>City</label>
                <input/>
                <label>State</label>
                <input/>
                <label>Postal / Zip Code</label>
                <input/>
            </div>
            <ActionButton>save</ActionButton>
        </form>
    )
}

export default OrderForm;