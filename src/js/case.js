import '../css/case.less'
import '../assets/static/iconfont.css'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

$(function () {
    request({
        url: urls.casecate,
        success: (cates) => {
            cates.items.forEach((cate) => {
                request({
                    url: urls.cases,
                    data: {
                        pageno: 1,
                        pagesize: 10,
                        cateid: cate.id
                    },
                    success: (data) => {
                        pageRender(data);
                        if ($('.case_ul').length === cates.items.length) {
                            //删掉最后一个横线
                            $('p.gap:last').remove()
                        }
                    }
                })
            })
        }
    })
})

function pageRender(data) {
    let items = data.items;
    let case_list = $('.case_list');
    let ul = $(`<ul class="case_ul"></ul>`);
    let p = $(`<p class="gap"></p>`)
    items.forEach((item) => {
        let date = new moment(item.createTime).format('YYYY-MM-DD');
        let li = $(`<li class="case_li">
                        <a class="case_a" href="caseDetail.html?id=${item.id}">
                            <i class="iconfont icon-file"></i>
                            <div class="case_title">${item.name}</div>
                            <div class="case_date">${date}</div>
                        </a>
                    </li>`);
        ul.append(li);
    })
    case_list.append(ul).append(p);
}