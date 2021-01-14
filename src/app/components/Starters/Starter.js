/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import firebase from '../../util/firebase';

export default function Starter({ starter }) {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const deleteStarter = () => {
    const starterRef = firebase.database().ref('Starter').child(starter.id);
    starterRef.remove();
  };

  const {
    id,
    title,
    ingredients,
    price
  } = starter;

  return (
    <div className="starter-item" key={id}>
      <div className="row">
        <div className="col">
          <p className="starter-title">{title}</p>
          <p className="starter-ingredients">{ingredients}</p>
        </div>
        <div className="col">
          <p className="custom-tar">
            {price}
            &euro;
          </p>
          <button
            type="button"
            onClick={deleteStarter}
            style={{ margin: '0 0 0 auto' }}
          >
            {t('delete')}
          </button>
        </div>
      </div>
    </div>
  );
}
