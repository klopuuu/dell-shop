!function(){"use strict";!function(){const e=document.querySelector(".offers__slider-wrapper"),t=document.querySelector(".offers__slider-container"),o=e.querySelectorAll(".offers__slide"),c=document.querySelector(".offers__dotes");let n=0,l=0;const s=t.offsetWidth;function r(){document.querySelectorAll(".dote").forEach(((e,t)=>{t===n?e.classList.add("dote__active"):e.classList.remove("dote__active")}))}c.addEventListener("click",(function(){n<o.length-1?n+=1:n=0,l=-s*n,e.style.transform=`translateX(${l}px)`,r()})),o.forEach((()=>{let e=document.createElement("div");e.classList.add("dote"),c.append(e)})),r(),setInterval((function(){c.click()}),5e3)}(),function(){const e=document.querySelector(".nav-btn"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".btn__icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-btn--active"),document.body.classList.toggle("no-scroll")}}()}();