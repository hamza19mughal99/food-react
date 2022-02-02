import React from 'react';
// @ts-ignore
import ReactStars from "react-rating-stars-component";

const RatingStar = () => {
    return (
        <ReactStars
            count={5}
            value={5}
            half={true}
            edit={false}
            size={20}
            activeColor="#FF4200"
        />
    );
};

export default RatingStar;