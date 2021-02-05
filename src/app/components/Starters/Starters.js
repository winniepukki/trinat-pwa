/* eslint-disable no-prototype-builtins */
/* eslint-disable no-shadow */
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import firebase from '../../util/firebase';

import './starters.style.scss';
// eslint-disable-next-line no-unused-vars
import Starter from '../Starter/Starter';

class Starters extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {},
      loading: false
    };

    this.getStartersFirebaseData = this.getStartersFirebaseData.bind(this);
  }

  componentDidMount() {
    this.getStartersFirebaseData();
  }

  getStartersFirebaseData() {
    const startersRef = firebase.database().ref('Starter');
    startersRef.once('value').then((dataSnapshot) => {
      this.response = dataSnapshot.val();
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        data: this.response,
        loading: true
      });
    });
  }

  renderStartersFirebaseData() {
    const { loading, data } = this.state;
    const { t } = this.props;
    const startersList = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const id in data) {
      if (data.hasOwnProperty(id)) {
        startersList.push(data[id]);
      }
    }

    return loading ? (
      startersList.map((starter) => {
        const { title } = starter;
        return (<Starter starter={starter} key={title} />);
      })
    ) : t('loading');
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <section className="starters-menu" style={{ marginBottom: '60px' }}>
          <div className="section-title">
            <h3>
              <div className="parallax-headline">Amazing</div>
              <div className="parallax-title">{t('delicious')}</div>
            </h3>
          </div>
        </section>
        <div className="container">
          <div className="parallax-section parallax-section-starters">
            <div className="inner-container inner-container-starters">
              <h3>
                <p className="parallax-title">{t('starters')}</p>
              </h3>
              <p className="simple-text">{t('starters-info')}</p>
              { this.renderStartersFirebaseData() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Starters.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Starters);
