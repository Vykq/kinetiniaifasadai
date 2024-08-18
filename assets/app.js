/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_show_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/show-tooltip */ \"./js/modules/show-tooltip.js\");\n/* harmony import */ var tippy_js_dist_svg_arrow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/dist/svg-arrow.css */ \"./node_modules/tippy.js/dist/svg-arrow.css\");\n/* harmony import */ var _modules_set_inline_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/set-inline-video */ \"./js/modules/set-inline-video.js\");\n/* harmony import */ var _modules_open_consult_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/open-consult-modal */ \"./js/modules/open-consult-modal.js\");\n/* harmony import */ var _modules_send_consult_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/send-consult-form */ \"./js/modules/send-consult-form.js\");\n/* harmony import */ var _modules_send_newsletter_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/send-newsletter-form */ \"./js/modules/send-newsletter-form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n    if(document.querySelector('.more-text')){\r\n        (0,_modules_show_tooltip__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    }\r\n\r\n    if(document.querySelector('.modal')){\r\n        (0,_modules_open_consult_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n        (0,_modules_send_consult_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    }\r\n\r\n    if(document.querySelector('form.newsletter')){\r\n        (0,_modules_send_newsletter_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    }\r\n\r\n    // if (document.querySelector('.swiper')) {\r\n    //     const swiper = new Swiper(\".swiper\", {\r\n    //         loop: true,\r\n    //         speed: 500,\r\n    //         slidesPerView: 1,\r\n    //         spaceBetween: 0,\r\n    //         // autoplay: {\r\n    //         //     delay: 0,\r\n    //         //     disableOnInteraction: false,\r\n    //         //     reverseDirection: true,\r\n    //         // },\r\n    //         on: {\r\n    //             slideChangeTransitionStart: function() {\r\n    //                 setBeforePrevAfterNext(this)\r\n    //             }\r\n    //         }\r\n    //     });\r\n    //\r\n    //     function setBeforePrevAfterNext($swiper){\r\n    //         let prev = $swiper.el.querySelector('.swiper-slide-prev')\r\n    //         let next = $swiper.el.querySelector('.swiper-slide-next')\r\n    //         let duplicate_prev = $swiper.el.querySelector('.swiper-slide-duplicate-prev');\r\n    //         let duplicate_next = $swiper.el.querySelector('.swiper-slide-duplicate-next');\r\n    //         let before_prev = prev.previousElementSibling\r\n    //         let after_next = next.nextElementSibling\r\n    //\r\n    //         $swiper.el.querySelectorAll('.swiper-slide-before-prev').forEach(element => {\r\n    //             element.classList.remove('swiper-slide-before-prev')\r\n    //         })\r\n    //         $swiper.el.querySelectorAll('.swiper-slide-after-next').forEach(element => {\r\n    //             element.classList.remove('swiper-slide-after-next')\r\n    //         })\r\n    //\r\n    //         before_prev.classList.add('swiper-slide-before-prev')\r\n    //         after_next.classList.add('swiper-slide-after-next')\r\n    //\r\n    //         if (duplicate_prev\r\n    //             && duplicate_prev.previousElementSibling\r\n    //         ) {\r\n    //             duplicate_prev.previousElementSibling.classList.add('swiper-slide-before-prev')\r\n    //         }\r\n    //\r\n    //         if (duplicate_next\r\n    //             && duplicate_next.nextElementSibling\r\n    //         ) {\r\n    //             duplicate_next.nextElementSibling.classList.add('swiper-slide-after-next')\r\n    //         }\r\n    //     }\r\n    // }\r\n\r\n\r\n    if (document.querySelector('video.video-inline')) {\r\n        (0,_modules_set_inline_video__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.video-inline', '.play-video-inline');\r\n    }\r\n\r\n    if (document.querySelector('.gallery-slider')) {\r\n\r\n        new Splide('.gallery-slider', {\r\n            type: 'loop',\r\n            perPage: 1,\r\n            pagination: true,\r\n            gap: '1rem',\r\n            arrows: false,\r\n            autoplay: true,\r\n            interval: 2500\r\n        }).mount();\r\n    }\r\n\r\n\r\n    // if(tip1) {\r\n    //     tippy('#tippy-1-left', {\r\n    //         content: tip1,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-1-left svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-1-left svg.question');\r\n    //             if (xSvg && mainSvg) {\r\n    //                 xSvg.style.display = \"inline-block\";\r\n    //                 mainSvg.style.display = \"none\";\r\n    //             }\r\n    //         },\r\n    //         onHide(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-1-left svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-1-left svg.question');\r\n    //             if (xSvg && mainSvg) {\r\n    //                 mainSvg.style.display = \"inline-block\";\r\n    //                 xSvg.style.display = \"none\";\r\n    //             }\r\n    //         }\r\n    //     });\r\n    //\r\n    // }\r\n    // if(tip2) {\r\n    //     tippy('#tippy-2-right', {\r\n    //         content: tip2,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-2-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-2-right svg.question');\r\n    //             xSvg.style.display = \"inline-block\";\r\n    //             mainSvg.style.display = \"none\";\r\n    //         },\r\n    //         onHide(instance){\r\n    //             const xSvg = document.querySelector('#tippy-2-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-2-right svg.question');\r\n    //             mainSvg.style.display = \"inline-block\";\r\n    //             xSvg.style.display = \"none\";\r\n    //         }\r\n    //     });\r\n    // }\r\n    // if(tip3) {\r\n    //     tippy('#tippy-3-bottom', {\r\n    //         content: tip3,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-3-bottom svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-3-bottom svg.question');\r\n    //             xSvg.style.display = \"inline-block\";\r\n    //             mainSvg.style.display = \"none\";\r\n    //         },\r\n    //         onHide(instance){\r\n    //             const xSvg = document.querySelector('#tippy-3-bottom svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-3-bottom svg.question');\r\n    //             mainSvg.style.display = \"inline-block\";\r\n    //             xSvg.style.display = \"none\";\r\n    //         }\r\n    //     });\r\n    // }\r\n    // if(tip4) {\r\n    //     tippy('#tippy-4-bottom', {\r\n    //         content: tip4,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-4-bottom svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-4-bottom svg.question');\r\n    //             xSvg.style.display = \"inline-block\";\r\n    //             mainSvg.style.display = \"none\";\r\n    //         },\r\n    //         onHide(instance){\r\n    //             const xSvg = document.querySelector('#tippy-4-bottom svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-4-bottom svg.question');\r\n    //             mainSvg.style.display = \"inline-block\";\r\n    //             xSvg.style.display = \"none\";\r\n    //         }\r\n    //     });\r\n    // }\r\n\r\n    // if(tip5) {\r\n    //     tippy('#tippy-5-right', {\r\n    //         content: tip5,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-5-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-5-right svg.question');\r\n    //             xSvg.style.display = \"inline-block\";\r\n    //             mainSvg.style.display = \"none\";\r\n    //         },\r\n    //         onHide(instance){\r\n    //             const xSvg = document.querySelector('#tippy-5-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-5-right svg.question');\r\n    //             mainSvg.style.display = \"inline-block\";\r\n    //             xSvg.style.display = \"none\";\r\n    //         }\r\n    //     });\r\n    // }\r\n    //\r\n    // if(tip6) {\r\n    //     tippy('#tippy-6-right', {\r\n    //         content: tip6,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-6-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-6-right svg.question');\r\n    //             xSvg.style.display = \"inline-block\";\r\n    //             mainSvg.style.display = \"none\";\r\n    //         },\r\n    //         onHide(instance){\r\n    //             const xSvg = document.querySelector('#tippy-6-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-6-right svg.question');\r\n    //             mainSvg.style.display = \"inline-block\";\r\n    //             xSvg.style.display = \"none\";\r\n    //         }\r\n    //     });\r\n    // }\r\n    //\r\n    // if(tip7) {\r\n    //     tippy('#tippy-7-right', {\r\n    //         content: tip7,\r\n    //         theme: 'tomato',\r\n    //         maxWidth: 500,\r\n    //         arrow: false,\r\n    //         placement: 'bottom',\r\n    //         popperOptions: {\r\n    //             strategy: 'fixed',\r\n    //             modifiers: [\r\n    //                 {\r\n    //                     name: 'flip',\r\n    //                     options: {\r\n    //                         fallbackPlacements: ['bottom'],\r\n    //                     },\r\n    //                 },\r\n    //             ],\r\n    //         },\r\n    //         onShow(instance) {\r\n    //             const xSvg = document.querySelector('#tippy-7-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-7-right svg.question');\r\n    //             xSvg.style.display = \"inline-block\";\r\n    //             mainSvg.style.display = \"none\";\r\n    //         },\r\n    //         onHide(instance){\r\n    //             const xSvg = document.querySelector('#tippy-7-right svg.hide');\r\n    //             const mainSvg = document.querySelector('#tippy-7-right svg.question');\r\n    //             mainSvg.style.display = \"inline-block\";\r\n    //             xSvg.style.display = \"none\";\r\n    //         }\r\n    //     });\r\n    // }\r\n\r\n\r\n});\n\n//# sourceURL=webpack://my-theme/./js/app.js?");

/***/ }),

/***/ "./js/modules/check-email.js":
/*!***********************************!*\
  !*** ./js/modules/check-email.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate-email */ \"./js/modules/validate-email.js\");\n/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-empty */ \"./js/modules/is-empty.js\");\n\r\n\r\n\r\nconst checkEmail = (mailInput, mailMsg) => {\r\n    if (mailInput.classList.contains('error')) {\r\n        return false;\r\n    }\r\n    if ((0,_is_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mailInput)) {\r\n        mailInput.classList.add('error');\r\n        mailMsg.textContent = themeUrl.mail_empty;\r\n        return false;\r\n    };\r\n    if (!(0,_validate_email__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mailInput.value)) {\r\n        mailInput.classList.add('error');\r\n        mailMsg.textContent = themeUrl.mail_error;\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkEmail);\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/check-email.js?");

/***/ }),

/***/ "./js/modules/check-name.js":
/*!**********************************!*\
  !*** ./js/modules/check-name.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-empty */ \"./js/modules/is-empty.js\");\n/* harmony import */ var _validate_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-text */ \"./js/modules/validate-text.js\");\n\r\n\r\n\r\nconst checkName = (nameInput, nameMsg) => {\r\n    if (nameInput.classList.contains('error')) {\r\n        return false;\r\n    }\r\n    if ((0,_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nameInput)) {\r\n        nameInput.classList.add('error');\r\n        nameMsg.textContent = themeUrl.name_empty;\r\n        return false;\r\n    };\r\n    if (!(0,_validate_text__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nameInput.value)) {\r\n        nameInput.classList.add('error');\r\n        nameMsg.textContent = themeUrl.name_error;\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkName);\r\n\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/check-name.js?");

/***/ }),

/***/ "./js/modules/check-phone.js":
/*!***********************************!*\
  !*** ./js/modules/check-phone.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-empty */ \"./js/modules/is-empty.js\");\n/* harmony import */ var _validate_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-phone */ \"./js/modules/validate-phone.js\");\n\r\n\r\n\r\nconst checkPhone = (phoneInput, phoneMsg) => {\r\n    if (phoneInput.classList.contains('error')) {\r\n        return false;\r\n    }\r\n    if ((0,_is_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(phoneInput)) {\r\n        phoneInput.classList.add('error');\r\n        phoneMsg.textContent = themeUrl.phone_empty;\r\n        return false;\r\n    };\r\n    if (!(0,_validate_phone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(phoneInput.value)) {\r\n        phoneInput.classList.add('error');\r\n        phoneMsg.textContent = themeUrl.phone_error;\r\n        return false;\r\n    }\r\n    return true\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkPhone);\r\n\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/check-phone.js?");

/***/ }),

/***/ "./js/modules/has-number.js":
/*!**********************************!*\
  !*** ./js/modules/has-number.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hasNumber(string) {\r\n    return /\\d/.test(string);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasNumber);\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/has-number.js?");

/***/ }),

/***/ "./js/modules/is-empty.js":
/*!********************************!*\
  !*** ./js/modules/is-empty.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction isEmpty(field) {\r\n    if (field.value.replace(/\\s+/g, '') == '') {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/is-empty.js?");

/***/ }),

/***/ "./js/modules/open-consult-modal.js":
/*!******************************************!*\
  !*** ./js/modules/open-consult-modal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst openConsultModal = () => {\r\n\r\n    const buttons = document.querySelectorAll('.open-consult-modal');\r\n    const modal = document.querySelector('.register-modal');\r\n    const closeBtn = modal.querySelector('.close-register-modal');\r\n    const html = document.querySelector('html');\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            openModal();\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        closeModal();\r\n    })\r\n\r\n    function openModal() {\r\n        modal.classList.add('show');\r\n        html.classList.add('modal-is-open');\r\n    }\r\n\r\n    function closeModal() {\r\n        modal.classList.remove('show');\r\n        html.classList.remove('modal-is-open');\r\n    }\r\n\r\n    window.addEventListener('keyup', function (e) {\r\n        if (e.keyCode == 27) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n\r\n    window.addEventListener('click', (event) => {\r\n        if (event.target.classList.contains('product-offer-modal')) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openConsultModal);\n\n//# sourceURL=webpack://my-theme/./js/modules/open-consult-modal.js?");

/***/ }),

/***/ "./js/modules/send-consult-form.js":
/*!*****************************************!*\
  !*** ./js/modules/send-consult-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _check_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-name */ \"./js/modules/check-name.js\");\n/* harmony import */ var _check_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-phone */ \"./js/modules/check-phone.js\");\n/* harmony import */ var _check_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-email */ \"./js/modules/check-email.js\");\n\r\n\r\n\r\n\r\n\r\nconst sendConsultForm = () => {\r\n\r\n    const html = document.querySelector('html');\r\n    const modal = document.querySelector('.register-modal');\r\n\r\n    const form = modal.querySelector('form.offer-form');\r\n    const checkAgree = form.querySelector('input[name=\"privacy\"]');\r\n    const statusInfoBlock = form.querySelector('p.error-msg');\r\n\r\n    const nameInput = form.querySelector('input[name=\"name\"]');\r\n    const phoneInput = form.querySelector('input[name=\"phone\"]');\r\n    const emailInput = form.querySelector('input[name=\"email\"]');\r\n\r\n    const message = {\r\n        loading: themeUrl.loading,\r\n        success: themeUrl.success,\r\n        failure: themeUrl.failure\r\n    };\r\n\r\n    const clearInputs = () => {\r\n        form.reset();\r\n    };\r\n\r\n    nameInput.addEventListener('change', () => {\r\n        if (nameInput.classList.contains('error')) {\r\n            nameInput.classList.remove('error');\r\n            statusInfoBlock.textContent = '';\r\n            statusInfoBlock.classList.remove('field-error');\r\n        }\r\n    });\r\n\r\n    phoneInput.addEventListener('change', () => {\r\n        if (phoneInput.classList.contains('error')) {\r\n            phoneInput.classList.remove('error');\r\n            statusInfoBlock.classList.remove('field-error');\r\n            statusInfoBlock.textContent = '';\r\n        }\r\n    });\r\n\r\n    emailInput.addEventListener('change', () => {\r\n        if (emailInput.classList.contains('error')) {\r\n            emailInput.classList.remove('error');\r\n            statusInfoBlock.classList.remove('field-error');\r\n            statusInfoBlock.textContent = '';\r\n        }\r\n    });\r\n\r\n\r\n    checkAgree.addEventListener('click', () => {\r\n        if(checkAgree.parentElement.classList.contains('error')) {\r\n            checkAgree.parentElement.classList.remove('error');\r\n            statusInfoBlock.classList.remove('field-error');\r\n            statusInfoBlock.textContent = '';\r\n        }\r\n    })\r\n\r\n    function checkPolicy() {\r\n        if(checkAgree.checked === false) {\r\n            checkAgree.parentElement.classList.add('error');\r\n            statusInfoBlock.textContent = themeUrl.privacy_check;\r\n            return false;\r\n        } else {\r\n            return true;\r\n        }\r\n    }\r\n\r\n    function nameValue() {\r\n        if ((0,_check_name__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nameInput, statusInfoBlock)) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n\r\n        }\r\n    }\r\n\r\n    function emailValue() {\r\n        if ((0,_check_email__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(emailInput, statusInfoBlock)) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    function phoneValue() {\r\n        if ((0,_check_phone__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(phoneInput, statusInfoBlock)) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    const validateForm = () => {\r\n        if (!nameValue()) {\r\n            return false;\r\n        }\r\n\r\n        if (!phoneValue()) {\r\n            return false;\r\n        }\r\n\r\n        if (!emailValue()) {\r\n            return false;\r\n        }\r\n\r\n        if(!checkPolicy()){\r\n            return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n\r\n    const postData = async (url, data) => {\r\n        statusInfoBlock.textContent = message.loading;\r\n        let res = await fetch(url, {\r\n            method: 'POST',\r\n            body: data,\r\n        });\r\n\r\n        if (!res.ok) {\r\n            throw new Error(`HTTP error! status: ${res.status}`);\r\n        }\r\n\r\n        return await res.text();\r\n    }\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if (!validateForm()) {\r\n            return false;\r\n        }\r\n        let formData = new FormData(form);\r\n\r\n        postData(themeUrl.themeUrl + '/api/send-offer-form.php', formData)\r\n            .then((res) => {\r\n                window.dataLayer = window.dataLayer || [];\r\n                window.dataLayer.push({\r\n                    'event': 'form_submission'\r\n                });\r\n                statusInfoBlock.textContent = message.success;\r\n            })\r\n            .catch(() => {\r\n                statusInfoBlock.textContent = message.failure;\r\n            })\r\n            .finally(() => {\r\n                clearInputs();\r\n                setTimeout(() => {\r\n                    statusInfoBlock.textContent = '';\r\n                    modal.classList.remove('show');\r\n                    html.classList.remove('modal-is-open');\r\n                }, 5000);\r\n\r\n            });\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendConsultForm);\n\n//# sourceURL=webpack://my-theme/./js/modules/send-consult-form.js?");

/***/ }),

/***/ "./js/modules/send-newsletter-form.js":
/*!********************************************!*\
  !*** ./js/modules/send-newsletter-form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _check_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-name */ \"./js/modules/check-name.js\");\n/* harmony import */ var _check_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-email */ \"./js/modules/check-email.js\");\n/* harmony import */ var _check_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-phone */ \"./js/modules/check-phone.js\");\n\r\n\r\n\r\n\r\nconst sendNewsletterForm = () =>{\r\n    const html = document.querySelector('html');\r\n    const form = document.querySelector('form.newsletter');\r\n    const statusInfoBlock = form.querySelector('p.error-msg');\r\n    const emailInput = form.querySelector('input[name=\"email\"]');\r\n\r\n    const message = {\r\n        loading: themeUrl.loading,\r\n        success: themeUrl.success,\r\n        failure: themeUrl.failure\r\n    };\r\n\r\n    const clearInputs = () => {\r\n        form.reset();\r\n    };\r\n\r\n\r\n    emailInput.addEventListener('change', () => {\r\n        if (emailInput.classList.contains('error')) {\r\n            emailInput.classList.remove('error');\r\n            statusInfoBlock.classList.remove('field-error');\r\n            statusInfoBlock.textContent = '';\r\n        }\r\n    });\r\n\r\n\r\n\r\n    function emailValue() {\r\n        if ((0,_check_email__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(emailInput, statusInfoBlock)) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    const validateForm = () => {\r\n        if (!emailValue()) {\r\n            return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n\r\n    const postData = async (url, data) => {\r\n        statusInfoBlock.textContent = message.loading;\r\n        let res = await fetch(url, {\r\n            method: 'POST',\r\n            body: data,\r\n        });\r\n\r\n        if (!res.ok) {\r\n            throw new Error(`HTTP error! status: ${res.status}`);\r\n        }\r\n\r\n        return await res.text();\r\n    }\r\n\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if (!validateForm()) {\r\n            return false;\r\n        }\r\n        let formData = new FormData(form);\r\n\r\n        postData(themeUrl.themeUrl + '/api/send-newsletter-form.php', formData)\r\n            .then((res) => {\r\n                window.dataLayer = window.dataLayer || [];\r\n                window.dataLayer.push({\r\n                    'event': 'form_submission'\r\n                });\r\n                statusInfoBlock.textContent = message.success;\r\n            })\r\n            .catch(() => {\r\n                statusInfoBlock.textContent = message.failure;\r\n            })\r\n            .finally(() => {\r\n                clearInputs();\r\n                setTimeout(() => {\r\n                    statusInfoBlock.textContent = '';\r\n                    html.classList.remove('modal-is-open');\r\n                }, 5000);\r\n\r\n            });\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendNewsletterForm);\n\n//# sourceURL=webpack://my-theme/./js/modules/send-newsletter-form.js?");

/***/ }),

/***/ "./js/modules/set-inline-video.js":
/*!****************************************!*\
  !*** ./js/modules/set-inline-video.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setInlineVideo = (video, btn) => {\r\n    const videoWraps = document.querySelectorAll(video);\r\n    const playBtn = document.querySelectorAll(btn);\r\n\r\n    playBtn.forEach((btn, index) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            videoWraps.forEach((item) => {\r\n                item.pause();\r\n                btn.classList.add('playing-video');\r\n            });\r\n            playBtn.forEach((item) => {\r\n                item.classList.remove(\"playing-video\");\r\n                videoWraps[index].pause();\r\n            });\r\n            btn.classList.add(\"playing-video\");\r\n            videoWraps[index].play();\r\n            // console.log(videoWraps[index].duration);\r\n        });\r\n    });\r\n\r\n    videoWraps.forEach((video, index) => {\r\n        video.addEventListener(\"click\", () => {\r\n            if (!playBtn[index].classList.contains(\"playing-video\")) {\r\n                return;\r\n            }\r\n            playBtn[index].classList.remove(\"playing-video\");\r\n            video.pause();\r\n        });\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setInlineVideo);\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/set-inline-video.js?");

/***/ }),

/***/ "./js/modules/show-tooltip.js":
/*!************************************!*\
  !*** ./js/modules/show-tooltip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showTooltip = () => {\r\n\r\n    const tooltips = document.querySelectorAll('.tooltip');\r\n\r\n    tooltips.forEach(tooltip =>{\r\n        const moreText = tooltip.previousElementSibling;\r\n        const xSvg = tooltip.querySelector('svg.hide');\r\n        const mainSvg = tooltip.querySelector('svg.question');\r\n        tooltip.addEventListener('click', (e) => {\r\n            moreText.classList.toggle('show');\r\n            if(moreText.classList.contains('show')){\r\n                xSvg.style.display = \"inline-block\";\r\n                mainSvg.style.display = \"none\";\r\n                if(tooltip.classList.contains('less-arrow')){\r\n                    const arrow = tooltip.parentElement.parentElement.querySelector('.vertical');\r\n                    arrow.classList.add('text-active');\r\n\r\n                    const contentArea = tooltip.parentElement.parentElement;\r\n                    contentArea.classList.add('width-fit');\r\n\r\n                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');\r\n                    mediaArea.classList.add('height-auto');\r\n\r\n                    const step = tooltip.parentElement.parentElement.parentElement;\r\n                    step.classList.add('margin-bottom');\r\n                }\r\n\r\n                if(tooltip.classList.contains('less-arrow-2')){\r\n                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');\r\n                    mediaArea.classList.add('height-auto');\r\n                }\r\n\r\n\r\n                if(tooltip.classList.contains('width-content')){\r\n                    const content = tooltip.parentElement;\r\n                    content.classList.add('width');\r\n                }\r\n\r\n            } else {\r\n                xSvg.style.display = \"none\";\r\n                mainSvg.style.display = \"inline-block\";\r\n                if(tooltip.classList.contains('less-arrow')){\r\n                    const arrow = tooltip.parentElement.parentElement.querySelector('.vertical');\r\n                    arrow.classList.remove('text-active');\r\n\r\n                    const contentArea = tooltip.parentElement.parentElement;\r\n                    contentArea.classList.remove('width-fit');\r\n\r\n                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');\r\n                    mediaArea.classList.remove('height-auto');\r\n\r\n                    const step = tooltip.parentElement.parentElement.parentElement;\r\n                    step.classList.remove('margin-bottom');\r\n                }\r\n\r\n                if(tooltip.classList.contains('less-arrow-2')){\r\n                    const mediaArea = tooltip.parentElement.parentElement.parentElement.querySelector('.media-area');\r\n                    mediaArea.classList.remove('height-auto');\r\n                }\r\n\r\n                if(tooltip.classList.contains('width-content')){\r\n                    const content = tooltip.parentElement;\r\n                    content.classList.remove('width');\r\n                }\r\n            }\r\n\r\n        })\r\n\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTooltip);\n\n//# sourceURL=webpack://my-theme/./js/modules/show-tooltip.js?");

/***/ }),

/***/ "./js/modules/validate-email.js":
/*!**************************************!*\
  !*** ./js/modules/validate-email.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateEmail = (value) => {\r\n    let regex = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n    if (value.match(regex)) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateEmail);\r\n\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/validate-email.js?");

/***/ }),

/***/ "./js/modules/validate-phone.js":
/*!**************************************!*\
  !*** ./js/modules/validate-phone.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validatePhoneNumber(value) {\r\n    let pattern = /^(\\+)?([ 0-9()-]){8,16}$/;\r\n    if (pattern.test(value)) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validatePhoneNumber);\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/validate-phone.js?");

/***/ }),

/***/ "./js/modules/validate-text.js":
/*!*************************************!*\
  !*** ./js/modules/validate-text.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _has_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-number */ \"./js/modules/has-number.js\");\n\r\n\r\nfunction validateTextField(value) {\r\n    let containsNumber = (0,_has_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value);\r\n    if (!containsNumber) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateTextField);\r\n\n\n//# sourceURL=webpack://my-theme/./js/modules/validate-text.js?");

/***/ }),

/***/ "./node_modules/tippy.js/dist/svg-arrow.css":
/*!**************************************************!*\
  !*** ./node_modules/tippy.js/dist/svg-arrow.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-theme/./node_modules/tippy.js/dist/svg-arrow.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;