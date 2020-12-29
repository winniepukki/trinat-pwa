import React, {useState} from 'react';

import './foodMenu.style.scss';
import {useTranslation} from "react-i18next";
import FoodMenuItem from "./FoodMenuItem";

function FoodMenu() {
    const { t } = useTranslation();
    const types = ['desserts', 'meals', 'kids', 'alcohol'];
    const [currentType, setCurrentType] = useState('');

    return <div>
        <section className="food-menu">
            <div className="section-title">
                <h3>
                    <div className="parallax-headline">Our</div>
                    <div className="parallax-title">{t('food-menu.title')}</div>
                </h3>
            </div>
        </section>
        <div className="container">
            <h4 className="custom-tac">{t('food-menu.day-menus')}</h4>

            <div className="container">
                <div className="row">
                    <div className="starter-item col-md-6">
                        <div className="row">
                            <div className="col">
                                <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                                <p className="starter-ingredients">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                            <div className="col">
                                <p className="custom-tar">3.43&euro;</p>
                            </div>
                        </div>
                    </div>
                    <div className="starter-item col-md-6">
                        <div className="row">
                            <div className="col">
                                <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                                <p className="starter-ingredients">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                            <div className="col">
                                <p className="custom-tar">3.43&euro;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="starter-item col-md-6">
                        <div className="row">
                            <div className="col">
                                <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                                <p className="starter-ingredients">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                            <div className="col">
                                <p className="custom-tar">3.43&euro;</p>
                            </div>
                        </div>
                    </div>
                    <div className="starter-item col-md-6">
                        <div className="row">
                            <div className="col">
                                <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                                <p className="starter-ingredients">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                            <div className="col">
                                <p className="custom-tar">3.43&euro;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="starter-item col-md-6">
                        <div className="row">
                            <div className="col">
                                <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                                <p className="starter-ingredients">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                            <div className="col">
                                <p className="custom-tar">3.43&euro;</p>
                            </div>
                        </div>
                    </div>
                    <div className="starter-item col-md-6">
                        <div className="row">
                            <div className="col">
                                <p className="starter-title">Lorem ipsum dolor sit amet.</p>
                                <p className="starter-ingredients">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                            <div className="col">
                                <p className="custom-tar">3.43&euro;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between custom-mg-25">
                    {
                        types.map((type, index) => {
                            return <button
                                key={index}
                                onClick={() => setCurrentType(type)}
                                className={'button-default'}
                            >{t('food-types.' + type).toLocaleUpperCase()}
                            </button>
                        })
                    }
                </div>
                {
                    currentType === 'desserts' && (
                        <p>desserts!</p>
                    )}
                {
                    currentType === 'meals' && (
                        <p>meals!</p>
                    )}
                {
                    currentType === 'kids' && (
                        <p>kids!</p>
                    )}
                {
                    currentType === 'alcohol' && (
                        <p>alcohol!</p>
                    )}
            </div>
        </div>
    </div>
}

export default FoodMenu;
