import 'swiper/dist/css/swiper.min.css'
import swiper from "swiper"
import $ from "jquery"
import di18n from './i18n'

$(function () {
    var mySwiper = new swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination'
        },
    })


    $('.i18n_toggle').on('click', (e) => {
        let loc = e.currentTarget.dataset.loc;
        di18n.setLocale(loc, function () {
            // 回调函数
        })
    })
})