import React from "react";
import { Button } from 'antd';
import "./style.css";




export const Info = () => {
    const handleClick = () => {
        console.log('Есть контакт');
    }
    return (
        <div className="info">
            <Button className="btn" type="primary" onClick={handleClick}>
                Click me
                </Button>
        </div>
    );
};