/* eslint-disable max-len,array-callback-return */
/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import { ProductType } from '@type/Product';
import Product from '@util/Product/Product';
import ProductListQuery from '@query/ProductList.query';

import { LANG_CODE_LV } from '@component/Starters/Starters.config';
import { SPECIAL } from './ProductList.config';

import {
    fetchMenuFail,
    fetchMenuRequest,
    fetchMenuSuccess
} from '@store/MenuList/MenuList.action';

import './ProductList.style.scss';
import Category from '@util/Category/Category';

export const mapStateToProps = (state) => ({
    loading: state.menuList.loading,
    foodMenu: state.menuList.foodMenu
});

export const mapDispatchToProps = (dispatch) => ({
    fetchMenuRequest: () => dispatch(fetchMenuRequest()),
    fetchMenuSuccess: (foodMenu) => dispatch(fetchMenuSuccess(foodMenu)),
    fetchMenuFail: (error) => dispatch(fetchMenuFail(error))
});

class ProductList extends React.Component {
  static propTypes = {
      loading: PropTypes.bool,
      t: PropTypes.func.isRequired,
      languageCode: PropTypes.string.isRequired,
      foodMenu: PropTypes.arrayOf(ProductType),
      fetchMenuRequest: PropTypes.func.isRequired,
      fetchMenuSuccess: PropTypes.func.isRequired,
      fetchMenuFail: PropTypes.func.isRequired
  };

  static defaultProps = {
      loading: true,
      foodMenu: []
  }

  constructor(props) {
      super(props);

      this.getProductList = this.getProductList.bind(this);
      this.renderTitle = this.renderTitle.bind(this);
      this.renderProducts = this.renderProducts.bind(this);
      this.getProductListFromQuery = this.getProductListFromQuery.bind(this);
      this.getProductListFromIndexedDb = this.getProductListFromIndexedDb.bind(this);
  }

  componentDidMount() {
      this.getProductListFromQuery();
  }

  getProductListFromIndexedDb() {
      const {
          fetchMenuRequest,
          fetchMenuSuccess,
          fetchMenuFail
      } = this.props;

      const request = window.indexedDB.open('products', 2);
      request.onsuccess = (event) => {
          const db = event.target.result;
          const transaction = db.transaction('products');
          const objectStore = transaction.objectStore('products');
          const request = objectStore.getAll();

          request.onsuccess = () => {
              fetchMenuRequest();
              const { result: products = [] } = request;

              if (!products || !products.length) {
                  this.getProductListFromQuery();
              }

              fetchMenuSuccess(products);
          };

          request.onerror = () => {
              fetchMenuFail();
          };
      };
  }

  getProductListFromQuery() {
      const { fetchMenuRequest } = this.props;
      fetchMenuRequest();

      this.getProductList()
          .then((response) => {
              const {
                  fetchMenuSuccess
              } = this.props;
              const {
                  data: {
                      products = []
                  } = {}
              } = response;

              if (!products || !products.length) {
                  return;
              }

              fetchMenuSuccess(products);
          })
          .catch((error) => {
              const { fetchMenuFail } = this.props;
              fetchMenuFail(error);
          });
  }

  getProductList() {
      const {
          languageCode = ''
      } = this.props;

      return ProductListQuery.getProductList(languageCode) || {};
  }

  getProductCategories() {
      const {
          foodMenu = []
      } = this.props;

      /**
       * Get all categories
       */
      const listOfCategories = foodMenu?.map((item) => {
          const { category } = item;
          return category;
      });

      /**
       * Sort and remove duplicates
       */
      return listOfCategories
          .sort((a, b) => parseFloat(a.priority) - parseFloat(b.priority))
          .filter((v, i, a) => a.findIndex((t) => (t.title === v.title)) === i);
  }

  renderProductsWithCategories() {
      const {
          t,
          loading,
          foodMenu
      } = this.props;

      if (loading || !foodMenu.length) {
          return t('loading');
      }

      return this.getProductCategories().map((category) => {
          const {
              title
          } = category;

          if (title === SPECIAL) {
              return null;
          }

          return (
              <div key={ title } className="Product-Category">
                  <Category key={ title } title={ title } />
                  <div className="Product-List-Container container">
                      { this.renderProducts().filter((product) => product.category.title === title).map((product) => {
                          const { _id } = product;
                          return <Product key={ _id } product={ product } />;
                      }) }
                  </div>
              </div>
          );
      });
  }

  renderProducts() {
      const {
          t,
          languageCode,
          loading,
          foodMenu
      } = this.props;

      if (loading || !foodMenu.length) {
          return t('loading');
      }

      const products = foodMenu.map((product) => {
          const {
              language = '',
              category: {
                  title = ''
              } = {}
          } = product;

          if (languageCode !== language || title === SPECIAL) {
              return null;
          }

          return product;
      });

      return products.filter((x) => !!x);
  }

  renderTitle() {
      const {
          t,
          languageCode
      } = this.props;

      return (
          <h3>
            { languageCode === LANG_CODE_LV ? (
                <div className="parallax-headline">{ t('our') }</div>
            ) : null }
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
                <p className="allergy-notice">{ t('allergy-notice') }</p>
                { this.renderProductsWithCategories() }
                <div className="custom-mg-25" />
            </div>
          </div>
      );
  }
}

export default
connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProductList));
