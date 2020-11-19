import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer'; 
import {showModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerID = setTimeout(() => showModal('.modal', modalTimerID), 5000);

    calc();
    cards();
    forms('form', modalTimerID);
    modal('[data-modal]', '.modal', modalTimerID);
    slider({
        slide: '.offer__slide',
        container: '.offer__slider',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-01-01');    
});

