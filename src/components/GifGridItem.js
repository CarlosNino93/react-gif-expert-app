import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card">
            <img id={id} src={url} alt="error" style={{ width: 200 }}></img>
            <h3>{title}</h3>
        </div>
    );
};
