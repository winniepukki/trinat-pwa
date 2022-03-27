/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import {
    START_TIME,
    MAX_INPUT_LENGTH,
    MIN_INPUT_LENGTH,
    MIN_PHONE_LENGTH,
    MAX_PHONE_LENGTH,
    LV_PHONE_START_NUM,
    NO_EXT_NUM_INDEX,
    MINUTES_IN_SECONDS,
    KITCHEN_END_TIME
} from './Validator.config';

export const validatePhoneNumber = (phoneNumber = '') => {
    if (
        phoneNumber.length !== MIN_PHONE_LENGTH
        && phoneNumber.length !== MAX_PHONE_LENGTH
    ) {
        return false;
    }

    if (
        phoneNumber.match(/(\+371)/gm)
        && phoneNumber.charAt(NO_EXT_NUM_INDEX) === LV_PHONE_START_NUM
    ) {
        return true;
    }

    return phoneNumber.charAt(0) === LV_PHONE_START_NUM;
};

export const dateInPast = (date) => {
    const today = new Date();
    const compareDate = new Date(date);

    return compareDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0) < 0;
};

export const validateWorkingHours = (time) => {
    const startTime = START_TIME * MINUTES_IN_SECONDS;
    const endTime = KITCHEN_END_TIME * MINUTES_IN_SECONDS;
    const cleanTime = time.replace(':', '');

    const selectedTime = (cleanTime * MINUTES_IN_SECONDS) / 100;

    return (selectedTime >= startTime && selectedTime <= endTime);
};

export const validateInputLength = (
    minLen = MIN_INPUT_LENGTH,
    maxLen = MAX_INPUT_LENGTH,
    ...elements
) => elements.every((el) => el.length && el.length >= minLen && el.length <= maxLen);
