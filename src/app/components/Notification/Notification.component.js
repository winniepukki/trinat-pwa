/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';

import './Notification.style.scss';

class Notification extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    };

    constructor() {
        super();

        this.state = {
            notificationShown: false
        };

        this.renderNotification = this.renderNotification.bind(this);
    }

    componentDidMount() {
        this.setState({
            notificationShown: true
        });
    }

    renderNotification() {
        const { title, message } = this.props;
        const { notificationShown } = this.state;
        const timeoutTime = 4000;

        const timeOut = setTimeout(() => {
            clearTimeout(timeOut);
            this.setState({
                notificationShown: false
            });
        }, timeoutTime);

        return (
          <div
            className={ notificationShown
                ? 'Notification fireNotification' : 'Notification hideNotification' }
            style={ { background: 'var(--notification-info)' } }
          >
            <p>{ title }</p>
            <p>{ message }</p>
          </div>
        );
    }

    render() {
        return (
            this.renderNotification()
        );
    }
}

export default Notification;
