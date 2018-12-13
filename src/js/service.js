import '../css/service.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

$(function () {
    request({
        url: urls.about,
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
    let {
        companyinfo
    } = data;
    let service_content = $('.service_content');
    let tab_group = $('.tab_group');
    let i = 0;
    _.forEach(companyinfo, (companyinfoItem) => {
        for (let key in companyinfoItem) {
            let active = i === 0 ? 'active' : '';
            if (key.indexOf("_title") != -1) {
                let target = key.replace("_title", "");
                tab_group.append($(`<li data-target="${target}" class="tab_li ${active}">
                    <div class="tab_item">${companyinfoItem[key]}</div>
                    </li>`))
            } else {
                service_content.append($(`<div class="service_content_text ${key} ${active}">${companyinfoItem[key]}</div>`))
            }
        }
        i++;
    })
    tab_group.on("click", 'li', (e) => {
        let lis = tab_group.find('li');
        lis.each((i, e) => {
            e.classList.remove("active");
        })
        let li = e.currentTarget;
        li.classList.add('active');
        let contents = service_content.find('.service_content_text');
        contents.each((i, e) => {
            e.classList.remove("active");
        });
        let content = document.querySelector('.service_content_text.' + li.dataset.target)
        content.classList.add('active');
    })
}