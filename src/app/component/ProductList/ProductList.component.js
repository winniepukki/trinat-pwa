/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ProductListQuery from '@query/ProductList.query';

import './FoodMenu.style.scss';
import Product from '@util/Product/Product';

class ProductList extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired,
      languageCode: PropTypes.string.isRequired
  };

  constructor(props) {
      super(props);

      this.state = {
          products: []
      };

      this.renderTitle = this.renderTitle.bind(this);
      this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
      this.getProductList()
          .then((response) => {
              const {
                  data: {
                      products = []
                  } = {}
              } = response;

              this.setState({
                  products
              });
          })
          .catch();
  }

  componentDidUpdate(_, prevState) {
      this.getProductList()
          .then((response) => {
              const {
                  data: {
                      products = []
                  } = {}
              } = response;
              const {
                  products: prevProducts = {}
              } = prevState;

              if (prevProducts.length && prevProducts !== products) {
                  this.setState({
                      products
                  });
              }
          })
          .catch();
  }

  getProductList() {
      const {
          languageCode = ''
      } = this.props;

      return ProductListQuery.getProductList(languageCode) || {};
  }

  renderProducts() {
      const {
          products = []
      } = this.state;
      const {
          t,
          languageCode
      } = this.props;

      if (!products || !products.length) {
          return t('loading');
      }

      return products.map((product) => {
          const {
              _id = '',
              language = ''
          } = product;

          if (languageCode !== language) {
              return null;
          }

          return <Product key={ _id } product={ product } />;
      });
  }

  renderTitle() {
      const { t } = this.props;
      return (
          <h3>
            <div className="parallax-headline">{ t('our') }</div>
            <div className="parallax-title">{ t('food-menu.title') }</div>
          </h3>
      );
  }

  render() {
      const { t } = this.props;

      return (
          <div className="FoodMenu">
            <section className="food-menu">
              <div className="section-title">
                { this.renderTitle() }
              </div>
            </section>
            <div className="container">
              <h4 className="custom-tac">{ t('food-menu.day-menus') }</h4>
              <div className="container">
                  { this.renderProducts() }
                <div className="row justify-content-between custom-mg-25" />
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(ProductList);
