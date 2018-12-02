import 'swiper/dist/css/swiper.min.css'
import swiper from "swiper"
import $ from "jquery"

$(function () {
    var mySwiper = new swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination'
        },
    })
})