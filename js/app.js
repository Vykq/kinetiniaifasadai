import showTooltip from "./modules/show-tooltip";
import tippy, {inlinePositioning} from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import setInlineVideo from "./modules/set-inline-video";
import openConsultModal from "./modules/open-consult-modal";
import sendConsultForm from "./modules/send-consult-form";
import sendNewsletterForm from "./modules/send-newsletter-form";
window.addEventListener('DOMContentLoaded', () => {

    if(document.querySelector('.more-text')){
        showTooltip();
    }

    if(document.querySelector('.modal')){
        openConsultModal();
        sendConsultForm();
    }

    if(document.querySelector('form.newsletter')){
        sendNewsletterForm();
    }

    // if (document.querySelector('.swiper')) {
    //     const swiper = new Swiper(".swiper", {
    //         loop: true,
    //         speed: 500,
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //         // autoplay: {
    //         //     delay: 0,
    //         //     disableOnInteraction: false,
    //         //     reverseDirection: true,
    //         // },
    //         on: {
    //             slideChangeTransitionStart: function() {
    //                 setBeforePrevAfterNext(this)
    //             }
    //         }
    //     });
    //
    //     function setBeforePrevAfterNext($swiper){
    //         let prev = $swiper.el.querySelector('.swiper-slide-prev')
    //         let next = $swiper.el.querySelector('.swiper-slide-next')
    //         let duplicate_prev = $swiper.el.querySelector('.swiper-slide-duplicate-prev');
    //         let duplicate_next = $swiper.el.querySelector('.swiper-slide-duplicate-next');
    //         let before_prev = prev.previousElementSibling
    //         let after_next = next.nextElementSibling
    //
    //         $swiper.el.querySelectorAll('.swiper-slide-before-prev').forEach(element => {
    //             element.classList.remove('swiper-slide-before-prev')
    //         })
    //         $swiper.el.querySelectorAll('.swiper-slide-after-next').forEach(element => {
    //             element.classList.remove('swiper-slide-after-next')
    //         })
    //
    //         before_prev.classList.add('swiper-slide-before-prev')
    //         after_next.classList.add('swiper-slide-after-next')
    //
    //         if (duplicate_prev
    //             && duplicate_prev.previousElementSibling
    //         ) {
    //             duplicate_prev.previousElementSibling.classList.add('swiper-slide-before-prev')
    //         }
    //
    //         if (duplicate_next
    //             && duplicate_next.nextElementSibling
    //         ) {
    //             duplicate_next.nextElementSibling.classList.add('swiper-slide-after-next')
    //         }
    //     }
    // }


    if (document.querySelector('video.video-inline')) {
        setInlineVideo('.video-inline', '.play-video-inline');
    }

    if (document.querySelector('.gallery-slider')) {

        new Splide('.gallery-slider', {
            type: 'loop',
            perPage: 1,
            pagination: true,
            gap: '1rem',
            arrows: false,
            autoplay: true,
            interval: 2500
        }).mount();
    }


    // if(tip1) {
    //     tippy('#tippy-1-left', {
    //         content: tip1,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-1-left svg.hide');
    //             const mainSvg = document.querySelector('#tippy-1-left svg.question');
    //             if (xSvg && mainSvg) {
    //                 xSvg.style.display = "inline-block";
    //                 mainSvg.style.display = "none";
    //             }
    //         },
    //         onHide(instance) {
    //             const xSvg = document.querySelector('#tippy-1-left svg.hide');
    //             const mainSvg = document.querySelector('#tippy-1-left svg.question');
    //             if (xSvg && mainSvg) {
    //                 mainSvg.style.display = "inline-block";
    //                 xSvg.style.display = "none";
    //             }
    //         }
    //     });
    //
    // }
    // if(tip2) {
    //     tippy('#tippy-2-right', {
    //         content: tip2,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-2-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-2-right svg.question');
    //             xSvg.style.display = "inline-block";
    //             mainSvg.style.display = "none";
    //         },
    //         onHide(instance){
    //             const xSvg = document.querySelector('#tippy-2-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-2-right svg.question');
    //             mainSvg.style.display = "inline-block";
    //             xSvg.style.display = "none";
    //         }
    //     });
    // }
    // if(tip3) {
    //     tippy('#tippy-3-bottom', {
    //         content: tip3,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-3-bottom svg.hide');
    //             const mainSvg = document.querySelector('#tippy-3-bottom svg.question');
    //             xSvg.style.display = "inline-block";
    //             mainSvg.style.display = "none";
    //         },
    //         onHide(instance){
    //             const xSvg = document.querySelector('#tippy-3-bottom svg.hide');
    //             const mainSvg = document.querySelector('#tippy-3-bottom svg.question');
    //             mainSvg.style.display = "inline-block";
    //             xSvg.style.display = "none";
    //         }
    //     });
    // }
    // if(tip4) {
    //     tippy('#tippy-4-bottom', {
    //         content: tip4,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-4-bottom svg.hide');
    //             const mainSvg = document.querySelector('#tippy-4-bottom svg.question');
    //             xSvg.style.display = "inline-block";
    //             mainSvg.style.display = "none";
    //         },
    //         onHide(instance){
    //             const xSvg = document.querySelector('#tippy-4-bottom svg.hide');
    //             const mainSvg = document.querySelector('#tippy-4-bottom svg.question');
    //             mainSvg.style.display = "inline-block";
    //             xSvg.style.display = "none";
    //         }
    //     });
    // }

    // if(tip5) {
    //     tippy('#tippy-5-right', {
    //         content: tip5,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-5-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-5-right svg.question');
    //             xSvg.style.display = "inline-block";
    //             mainSvg.style.display = "none";
    //         },
    //         onHide(instance){
    //             const xSvg = document.querySelector('#tippy-5-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-5-right svg.question');
    //             mainSvg.style.display = "inline-block";
    //             xSvg.style.display = "none";
    //         }
    //     });
    // }
    //
    // if(tip6) {
    //     tippy('#tippy-6-right', {
    //         content: tip6,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-6-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-6-right svg.question');
    //             xSvg.style.display = "inline-block";
    //             mainSvg.style.display = "none";
    //         },
    //         onHide(instance){
    //             const xSvg = document.querySelector('#tippy-6-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-6-right svg.question');
    //             mainSvg.style.display = "inline-block";
    //             xSvg.style.display = "none";
    //         }
    //     });
    // }
    //
    // if(tip7) {
    //     tippy('#tippy-7-right', {
    //         content: tip7,
    //         theme: 'tomato',
    //         maxWidth: 500,
    //         arrow: false,
    //         placement: 'bottom',
    //         popperOptions: {
    //             strategy: 'fixed',
    //             modifiers: [
    //                 {
    //                     name: 'flip',
    //                     options: {
    //                         fallbackPlacements: ['bottom'],
    //                     },
    //                 },
    //             ],
    //         },
    //         onShow(instance) {
    //             const xSvg = document.querySelector('#tippy-7-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-7-right svg.question');
    //             xSvg.style.display = "inline-block";
    //             mainSvg.style.display = "none";
    //         },
    //         onHide(instance){
    //             const xSvg = document.querySelector('#tippy-7-right svg.hide');
    //             const mainSvg = document.querySelector('#tippy-7-right svg.question');
    //             mainSvg.style.display = "inline-block";
    //             xSvg.style.display = "none";
    //         }
    //     });
    // }


});