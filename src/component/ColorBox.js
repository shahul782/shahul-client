import React from 'react';

export function ColorBox({ color }) {
    const styles = {
        backgroundColor: color,
        marginTop: "10px",
        width: "250px",
        height: "30px",
    };
    return <div style={styles}> </div>;

}
