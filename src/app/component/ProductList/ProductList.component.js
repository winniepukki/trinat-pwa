/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import ProductListQuery from '@query/ProductList.query';

import {
    fetchMenuSuccess,
    fetchMenuFail
} from '@store/MenuList/MenuList.action';

import './ProductList.style.scss';
import Product from '@util/Product/Product';

export const mapDispatchToProps = (dispatch) => ({
    fetchMenuSuccess: (foodMenu) => dispatch(fetchMenuSuccess(foodMenu)),
    fetchMenuFail: (error) => dispatch(fetchMenuFail(error))
});

class ProductList extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired,
      languageCode: PropTypes.string.isRequired,
      fetchMenuSuccess: PropTypes.func.isRequired,
      fetchMenuFail: PropTypes.func.isRequired
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
              const { fetchMenuSuccess } = this.props;
              const {
                  data: {
                      products = []
                  } = {}
              } = response;

              fetchMenuSuccess(products);
              this.setState({
                  products
              });
          })
          .catch((error) => {
              const { fetchMenuFail } = this.props;
              fetchMenuFail(error);
          });
  }

  componentDidUpdate(_, prevState) {
      /**
       * Get the ProductList and add it to both
       * state and store
       */
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
                  const { fetchMenuSuccess } = this.props;

                  fetchMenuSuccess(products);
                  this.setState({
                      products
                  });
              }
          })
          .catch((error) => {
              const fetchMenuFail = this.props;
              fetchMenuFail(error);
          });
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

export default
connect(null, mapDispatchToProps)(withTranslation()(ProductList));
