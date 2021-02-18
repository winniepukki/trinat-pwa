import React from 'react';
import PropTypes from 'prop-types';

import './Notification.style.scss';

class NotificationComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      // eslint-disable-next-line react/no-unused-state
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

    const timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      this.setState({
        notificationShown: false
      });
    }, 4000);

    return (
      <div
        className={notificationShown
          ? 'Notification fireNotification' : 'Notification hideNotification'}
        style={{ background: 'var(--notification-info)' }}
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

NotificationComponent.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default NotificationComponent;
