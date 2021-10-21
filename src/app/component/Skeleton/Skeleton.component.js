/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import './Skeleton.style.scss';

class Skeleton extends React.Component {
    render() {
        return (
            <div className="Skeleton-Product">
                <div className="Skeleton Skeleton-Image" />
                <div className="Skeleton-Contents">
                    <div className="Skeleton Skeleton-Text" />
                    <div className="Skeleton Skeleton-Text" />
                </div>
                <div className="Skeleton Skeleton-Price" />
            </div>
        );
    }
}

export default Skeleton;
