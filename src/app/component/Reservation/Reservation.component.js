/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import './Reservation.style.scss';

export class Reservation extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    }

    render() {
        const {
            open = false,
            onClose
        } = this.props;

        if (!open) {
            return null;
        }

        return ReactDOM.createPortal(
            <section
              className="Reservation"
            >
                <div
                  className="Reservation-Box"
                >
                    <h2>
                        <p className="Subtitle">Warm Welcome!</p>
                        <p className="Headline-Strong">
                            Our Story
                        </p>
                    </h2>
                    <button onClick={ onClose }>click me!</button>
                </div>
            </section>,
            document.getElementById('modal-root')
        );
    }
}

export default Reservation;
