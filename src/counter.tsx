import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const onButtonClick = () => {
    
        // using Java Script method to get PDF file
        fetch("./dummy.pdf").then((response) => {
            response.blob().then((blob) => {
            
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                    
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SamplePDF.pdf";
                alink.click();
            });
        });
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment} style={{ color: 'blue' ,marginRight: '10px' }}>Increment</button>
            <button onClick={decrement} style={{ color: 'red' ,marginRight: '10px' }}>Decrement</button>
            <button onClick={onButtonClick} style={{ color: 'grey' ,marginRight: '10px' }}>Download PDF</button>
        </div>
    );
};

export default Counter;