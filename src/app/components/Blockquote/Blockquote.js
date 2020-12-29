import React from 'react';
import {useTranslation} from "react-i18next";

function Blockquote() {
    const {t} = useTranslation();
    return <div className="container">
        <blockquote className="custom-tac">
            {
                Object.entries(t('blockquote', { returnObjects: true })).map((item, index) => {
                    return <p key={index} className={item[0]}>{item[1]}</p>
                })
            }
        </blockquote>
    </div>
}

export default Blockquote;
