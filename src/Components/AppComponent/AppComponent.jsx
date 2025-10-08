import React from "react";

const AppComponent = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app;
    return (
        <div className="border p-5">
            <img src={image} alt="" />
            <p>{title}</p>
            <div>
                <div className="badge badge-soft badge-success">{downloads}</div>
                <div className="badge badge-soft badge-warning">{ratingAvg}</div>
            </div>
        </div>
    );
};

export default AppComponent;
