import 'swiper/dist/css/swiper.min.css'
import '../css/index.less'
import $ from "jquery"
import swiper from "swiper"

$(function () {
    var mySwiper = new swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination'
        },
    })
})