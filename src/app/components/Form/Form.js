import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import firebase from '../../util/firebase';

export default function Form() {
  const { t } = useTranslation();
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      title: '',
      ingredients: '',
      price: '',
    });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  const createStarter = () => {
    const starterRef = firebase.database().ref('Starter');
    const starter = {
      title: userInput.title,
      ingredients: userInput.ingredients,
      price: userInput.price,
    };
    starterRef.push(starter);
  };

  return (
    <div className="container">
      <h3>
        <p className="parallax-headline">Administration</p>
        <p className="parallax-title">{t('admin-zone.starter-add')}</p>
        <p className="parallax-description">{t('admin-zone.starter-add-description')}</p>
      </h3>

      <input className="contact-control" type="text" name="title" value={userInput.title} onChange={handleChange} placeholder={t('starter-form.title')} />
      <input className="contact-control" type="text" name="ingredients" value={userInput.ingredients} onChange={handleChange} placeholder={t('starter-form.ingredients')} />
      <input className="contact-control" type="number" name="price" value={userInput.price} onChange={handleChange} placeholder={t('starter-form.price')} />
      <button type="button" className="button-default button-dark" onClick={createStarter} disabled={!userInput.title || !userInput.ingredients || !userInput.price}>
        +
        {t('add')}
      </button>
    </div>
  );
}
