import React from "react";


export const clickCounter = () => {
    const [count, setCount] = useState(0);
    
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