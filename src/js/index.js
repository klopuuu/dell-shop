
// const element = document.querySelector('.contact__info')

// const items = element.querySelectorAll('.info-item__contact .name')

// const img = ['./../../img/contact/location.svg', './../../img/contact/sms.svg', './../../img/contact/call-calling.svg']

// items.forEach((element, index) => {
//     const newElement = document.createElement('div')
//     const newElementImg = document.createElement('img');

//     newElement.src = img[index];
//     newElement.appendChild(newElementImg);

//     element.appendChild(newElement)


//   });

import { slider } from './modules/slider.js';
slider()

import mobileNav from './modules/mobile-nav.js';
mobileNav();
