import initJuriSlider from './modules/juri-slider.js';
import initReviewsSlider from './modules/reviews-slider.js';
import initTabs from './modules/tabs.js';

initJuriSlider();
initReviewsSlider();
initTabs('.price--contaner', 'tab-item-btn', 'price__pane', 'tab-item-btn--active', 'pane--active');
initTabs('.faq__container', 'faq-tab__btn', 'faq-content__pane', 'faq-tab-btn--active', 'faq-pane--show');
