import React from "react";

const ProgressBar = (data) => {
    const { bgcolor, completed, label } = data;
    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#adb5bd",
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${label}`}</span>
            </div>
        </div>
    );
}

export default ProgressBar;