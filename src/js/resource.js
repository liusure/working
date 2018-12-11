import '../css/resource.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

$(function () {
    request({
        url: urls.lawyers,
        data: {
            pageno: 1,
            pagesize: 10,
            city: "",
            lawyer: 1
        },
        success: (data) => {
            pageRender(data)
        }
    })
})
function pageRender(data) {
    let items = data.items;
    let resource_content = $('.resource_content');
    let resource_content_list = $('.resource_content_list');
    resource_content_list.html("");
    _.forEach(items, (item) => {
        let ele = $(`<div class="list_item">
                            <div class="item_header">
                                <img src="${item.picUrl}" alt="">
                            </div>
                            <div class="item_content">
                                <div class="item_content_name">${item.name}</div>
                                <div class="item_content_info">
                                    <p>专业资格：${item.qualificationDesc}</p>
                                    <p>主要业务里领域：${item.bussinessArea}</p>
                                    <p>工作经历：${item.workHistory}</p>
                                </div>
                            </div>
                        </div>`)
        resource_content_list.append(ele);
    })
}
let tab_group = $('.tab_group');
tab_group.on('click', 'li', (e) => {
    let lis = tab_group.find('li');
    lis.each((i, e) => {
        e.classList.remove("active");
    })
    e.currentTarget.classList.add('active');
    request({
        url: urls.lawyers,
        data: {
            pageno: 1,
            pagesize: 10,
            city: "",
            lawyer: e.currentTarget.dataset.type
        },
        success: (data) => {
            pageRender(data)
        }
    })
})
