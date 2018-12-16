import '../css/contact.less'
import '../assets/static/iconfont.css'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

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
    _.forEach(items, (item) => {
        let ele = $(`<div class="contact_item">
                <div class="contact_item_header">
                    <span class="item_title">${item.name}</span>
                </div>
                <div class="contact_item_content">
                    <p><i class="iconfont icon-dizhidingwei"></i> 地址：北京市东城区东长安街一号东方广场西三办公楼五层</p>
                    <p><i class="iconfont icon-cc-phone-handset"></i> 联系电话：010-85112990</p>
                    <p><i class="iconfont icon-letter"></i> 邮编：100020</p>
                    <p><i class="iconfont icon-email"></i> E-mail：72819203@.com</p>
                </div>
            </div>
`)
        content_container.append(ele);
    })
}
