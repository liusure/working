import '../css/caseDetail.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'
import qs from 'qs'

$(function () {
    let params = qs.parse(window.location.href.split('?')[1]);
    request({
        url: urls.casedetail,
        data: {
            id: params.id
        },
        success: (data) => {
            pageRender(data)
        }
    })
})

function pageRender(data) {
    let item = data.item;
    let content_container = $('.content_container');
    let date = new moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss');
    let ele = $(`
            <div class="case_detail_container">
                <h1 class="news_title">${item.name}</h1>
                <div class="case_date">${date}</div>
                <div class="new_content">${item.contentDesc}</div>
            </div>
        `)
    content_container.append(ele);
}