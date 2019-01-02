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

  $(".i18n_toggle").each((i, e) => {
    e.classList.remove("active");
    if (!window.localStorage.jfblocale) {
      window.localStorage.jfblocale = "zh";
    }
    if (window.localStorage.jfblocale && e.dataset.loc === window.localStorage.jfblocale) {
      e.classList.add("active");
    }
  })

  $('.i18n_toggle').on('click', (e) => {
    let loc = e.currentTarget.dataset.loc;
    window.localStorage.jfblocale = loc;
    di18n.setLocale(loc, function () {
      $(".i18n_toggle").each((i, e) => {
        e.classList.remove("active")
      })
      e.currentTarget.classList.add("active");
    })
  })
})