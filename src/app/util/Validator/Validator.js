/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import {
    MAX_INPUT_LENGTH,
    MIN_INPUT_LENGTH,
    MIN_PHONE_LENGTH,
    MAX_PHONE_LENGTH,
    LV_PHONE_START_NUM,
    NO_EXT_NUM_INDEX
} from './Validator.config';

export const validatePhoneNumber = (phoneNumber = '') => {
    const cleanPhone = phoneNumber.trim();

    if (
        cleanPhone.length !== MIN_PHONE_LENGTH
        && cleanPhone.length !== MAX_PHONE_LENGTH
    ) {
        return false;
    }

    if (
        cleanPhone.match(/(\+371)/gm)
        && cleanPhone.charAt(NO_EXT_NUM_INDEX) === LV_PHONE_START_NUM
    ) {
        return true;
    }

    return cleanPhone.charAt(0) === LV_PHONE_START_NUM;
};

export const dateInPast = (date) => {
    const today = new Date();
    const compareDate = new Date(date);

    return compareDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0) < 0;
};

export const validateInputLength = (
    minLen = MIN_INPUT_LENGTH,
    maxLen = MAX_INPUT_LENGTH,
    ...elements
) => elements.every((el) => el.length && el.length >= minLen && el.length <= maxLen);
