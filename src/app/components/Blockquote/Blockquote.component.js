import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class BlockquoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.renderBlockquoteEntities = this.renderBlockquoteEntities.bind(this);
  }

  renderBlockquoteEntities() {
    const {
      content,
      description,
      author
    } = this.props;

    return (
      <>
        <p className="blockquote-content">{content}</p>
        <p className="description">{description}</p>
        <p className="author">{author}</p>
      </>
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

BlockquoteComponent.propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default withTranslation()(BlockquoteComponent);
