import '../css/index.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

$(function () {
    request({
        url: urls.main,
        success: (data) => {
            pageRender(data)
        }
    })
})

function pageRender(data) {
    let {
        buscases,
        citys,
        companyinfo,
        lawyers,
        news,
        partners
    } = data;
    let news_content = $('.news_content');
    let intro = $('.intro');
    let intro_content_container = $('.intro_content_container');
    let intro_nav_list = $('.intro_nav_list');
    let intro_know_more = $('.intro_know_more');
    let show_list = $(".show_list");
    let classic_case_content = $(".classic_case_content");
    let partner_list = $('.partner_list');
    _.forEach(citys, (companyinfoItem) => {
    })
    let i = 0;
    _.forEach(companyinfo, (companyinfoItem) => {
        for (let key in companyinfoItem) {
            let active = i === 0 ? 'active' : '';
            if (key.indexOf("_title") != -1) {
                let target = key.replace("_title", "");
                intro_nav_list.append($(`<li data-target="${target}" class="${active}">${companyinfoItem[key]}</li>`))
            } else {
                intro_content_container.append($(`<div class="intro_content ${key} ${active}">${companyinfoItem[key]}</div>`))
            }
        }
        i++;
    })
    intro_nav_list.on("click", 'li', (e) => {
        let lis = intro_nav_list.find('li');
        lis.each((i, e) => {
            e.classList.remove("active");
        })
        let li = e.currentTarget;
        li.classList.add('active');
        let contents = intro_content_container.find('.intro_content');
        contents.each((i, e) => {
            e.classList.remove("active");
        });
        let content = document.querySelector('.intro_content.' + li.dataset.target)
        content.classList.add('active');
    })
    intro_know_more.on('click', () => {
        let contents = $('.intro_content');
        contents.each((i, e) => {
            if (e.classList.contains("active")) {
                e.classList.toggle("show_all")
            }
        })
    })
    _.forEach(buscases, (buscasesItem) => {
        let item = $(`<div class="classic_case_content_item">
            <div class="case_item_title">
            ${buscasesItem.name}
            </div>
            <div class="case_item_content">
            ${buscasesItem.extensionProfile}
            </div>
            <div class="case_item_footer">
            <a href="caseDetail.html?id=${buscasesItem.id}" class="case_know_more">详细内容>></a>
            </div>
        </div>`)
        classic_case_content.append(item);
    })
    _.forEach(lawyers, (lawyerItem) => {
        let item = $(`<li>
                        <a href="lawyerDetail.html?id=${lawyerItem.id}" class="show_item">
                            <img src="${lawyerItem.picUrl}" alt="">
                            <div class="show_item_info">
                                <div class="show_item_info_text">
                                    <div class="item_name">${lawyerItem.name}</div>
                                    <div class="item_intro">
                                    <p>专业资格：${lawyerItem.qualificationDesc}</p>
                                    <p>业务领域：${lawyerItem.bussinessArea}</p>
                                    </div>
                                    <div class="know_more"></div>
                                </div>
                            </div>
                        </a>
                    </li>`)
        show_list.append(item);
    })
    _.forEach(partners, (partnerItem) => {
        let item = $(`<div class="partner_logo">
                <img src="${partnerItem.picUrl}" alt="">
            </div>`);
        partner_list.append(item);
    })
    _.forEach(news, (newsItem) => {
        let date = new moment(newsItem.updateTime).format('YYYY-MM-DD');
        console.log(date)
        let news_item = $(`<div class="news_item"><div class="news_item_title"> ${newsItem.name}</div><div class="news_item_text"> ${newsItem.extensionProfile}</div><div class="news_item_footer"><span class="date">${date}</span><a href="newsDetail.html?id=${newsItem.id}" class="know_more">查看详情></a></div>`);
        news_content.append(news_item)
    })
}