import '../css/institutionDetail.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'
import qs from 'qs'

$(function () {
    let params = qs.parse(window.location.href.split('?')[1]);
    request({
        url: urls.departdetail,
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
    let ele = $(`
            <div class="institution_detail_container">
                <h1 class="institution_name">${item.name}</h1>
                <div class="institution_content">${item.remark}</div>
            </div>
        `)
    content_container.append(ele);
}