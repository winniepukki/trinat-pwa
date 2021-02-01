import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.renderBlockquoteEntities = this.renderBlockquoteEntities.bind(this);
  }

  renderBlockquoteEntities() {
    const { t } = this.props;

    return (
      Object.entries(t('blockquote', { returnObjects: true }))
        .map((item) => <p key={item} className={item[0]}>{ item[1] }</p>)
    );
  }

  render() {
    return (
      <div className="container">
        <blockquote className="custom-tac">
          { this.renderBlockquoteEntities() }
        </blockquote>
      </div>
    );
  }
}

Blockquote.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Blockquote);
