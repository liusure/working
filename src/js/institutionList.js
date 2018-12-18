import '../css/institutionList.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'
import qs from 'qs'

$(function () {
  let {city} = qs.parse(window.location.href.split('?')[1]);
  request({
    url: urls.citys,
    data: {
      city: city || ''
    },
    success: (data) => {
      let {citys} = data;
      let city_list = $('.city_list');
      city_list.empty();
      city_list.append($(`<div class="city_item active">全部</div>`))
      _.forEach(citys, (city) => {
        city_list.append($(`<div class="city_item" data-city="${city}">${city}</div>`))
      })
      $('.city_item').on('click', (e) => {
        $('.city_item').each((i, e) => {
          e.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        request({
          url: urls.depart,
          data: {
            city: e.currentTarget.dataset.city || ''
          },
          success: (data) => {
            pageRender(data)
          }
        })
      })
    }
  })
  request({
    url: urls.depart,
    data: {
      city: city || ''
    },
    success: (data) => {
      pageRender(data)
    }
  })
})

function pageRender(data) {
  let {citys, items} = data;
  let content_container = $('.content_container');
  let institution_list_container = $('.institution_list_container');
  institution_list_container.empty();
  _.forEach(items, (item) => {
    let date = new moment(item.updateTime).format('MM');
    let ele = $(`
                <p class="gap"></p>
            <div class="institution_item">
                    <div class="institution_img_container">
                        <img class="institution_img" src="${item.picUrl}" alt="">
                    </div>
                    <div class="institution_info">
                        <div class="institution_name">${item.name}</div>
                        <div class="institution_decs">
                        <div class="remark">${item.remark}</div>
                            <p>地址：${item.address}</p>
                            <p>电话：${item.phoneNum}</p>
                            <p>email：${item.email}</p>
                         </div>
                         <div class="institution_footer">
                         <a class="know_more" href="institutionDetail.html?id=${item.id}">查看详情></a>
                         </div>
                    </div>
                </div>
        `)
    institution_list_container.append(ele);
  })

}
