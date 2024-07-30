import showTooltip from "./modules/show-tooltip";
import tippy from 'tippy.js';
window.addEventListener('DOMContentLoaded', () => {

    if(document.querySelector('.tooltip')){
        // showTooltip();
    }

    tippy('#tippy-1', {
        content: tip1,
        theme: 'tomato',
        arrow: '<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-6.77527e-07 13.5L23.25 0.0766057L23.25 26.9234L-6.77527e-07 13.5Z" fill="#3D7FFF"/></svg>',
        maxWidth: 500,
    });

    tippy('#tippy-2', {
        content: tip2,
        theme: 'tomato',
        arrow: '<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-6.77527e-07 13.5L23.25 0.0766057L23.25 26.9234L-6.77527e-07 13.5Z" fill="#3D7FFF"/></svg>',
        maxWidth: 500,
    });

});