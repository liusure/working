import '../css/institutionList.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'
import qs from 'qs'

$(function () {

    request({
        url: urls.depart,
        success: (data) => {
            pageRender(data)
        }
    })
})

function pageRender(data) {
    let items = data.items;
    let content_container = $('.content_container');
    let institution_list_container = $('.institution_list_container');
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
                        ${item.remark}
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