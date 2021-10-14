/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

export class Blockquote extends React.Component {
    render() {
        return (
            <blockquote
              className="Blockquote"
            >
                <div className="Blockquote-Content">
                    UNTIL I DISCOVERED COOKING I WAS NEVER
                    REALLY INTERESTED IN ANYTHING
                </div>
                <div className="Blockquote-Description">
                    OUR FOUNDER JOHN PHILLIPE
                </div>
                <div className="Blockquote-Author">
                    Aleksandrs Bogackins
                </div>
            </blockquote>
        );
    }
}

export default Blockquote;
