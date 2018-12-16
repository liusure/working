import '../css/resource.less'
import '../css/myPagination.css'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'
import Page from "./myPagination"

let type = 1;
$(function () {
    request({
        url: urls.lawyers,
        data: {
            pageno: 1,
            pagesize: 10,
            city: "",
            lawyer: type
        },
        success: (data) => {
            pageRender(data,1)
        }
    })
})
function pageRender(data,page) {
    let items = data.items;
    let resource_content = $('.resource_content');
    let resource_content_list = $('.resource_content_list');
    resource_content_list.html("");
    _.forEach(items, (item) => {
        let ele = $(`<a href="lawyerDetail.html?id=${item.id}" class="list_item">
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
                        </a>
            <p class="gap"></p>
`)
        resource_content_list.append(ele);
    })
    new Page({
        id: 'pagination',
        curPage: page, //初始页码
        pageTotal: data.pageCount, //总页数
        dataTotal: 11, //总共多少条数据
        pageAmount: 10, //每页多少条
        getPage: function (page) {
            request({
                url: urls.lawyers,
                data: {
                    pageno: page,
                    pagesize: 10,
                    city: "",
                    lawyer: type
                },
                success: (data) => {
                    pageRender(data,page)
                }
            })
        }
    })
}
let tab_group = $('.tab_group');
tab_group.on('click', 'li', (e) => {
    let lis = tab_group.find('li');
    lis.each((i, e) => {
        e.classList.remove("active");
    })
    e.currentTarget.classList.add('active');
    type = e.currentTarget.dataset.type;
    request({
        url: urls.lawyers,
        data: {
            pageno: 1,
            pagesize: 10,
            city: "",
            lawyer: type
        },
        success: (data) => {
            pageRender(data,1)
        }
    })
})
