import '../css/case.less'
import '../css/myPagination.css'
import Page from "./myPagination"
import '../assets/static/iconfont.css'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

let cate = "";
$(function () {
  request({
    url: urls.casecate,
    success: (cates) => {
      let {items} = cates;
      let cate_list = $('.cate_list');
      cate_list.empty();
      cate_list.append($(`<div class="cate_item active" data-cate="">全部</div>`))
      _.forEach(items, (cate) => {
        cate_list.append($(`<div class="cate_item" data-cate="${cate.id}">${cate.name}</div>`))
      })
      $('.cate_item').on('click', (e) => {
        $('.cate_item').each((i, e) => {
          e.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        cate = e.currentTarget.dataset.cate;
        request({
          url: urls.cases,
          data: {
            pageno: 1,
            pagesize: 40,
            cateid: cate
          },
          success: (data) => {
            pageRender(data)
          }
        })
      })
    }
  })
  request({
    url: urls.cases,
    data: {
      pageno: 1,
      pagesize: 40,
      cateid: cate
    },
    success: (data) => {
      pageRender(data);
    }
  })
})

function pageRender(data, page) {
  let items = data.items;
  let case_list = $('.case_list');
  let ul = $(`<ul class="case_ul"></ul>`);
  let p = $(`<p class="gap"></p>`)
  let i = 0;
  $('.case_list').empty();
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
    i++;
    if (i % 8 === 0) {
      ul.append(p)
    }
  })
  case_list.append(ul);
  new Page({
    id: 'pagination',
    curPage: page, //初始页码
    pageTotal: data.pageCount, //总页数
    dataTotal: 140, //总共多少条数据
    pageAmount: 10, //每页多少条
    getPage: function (page) {
      request({
        url: urls.cases,
        data: {
          pageno: page,
          pagesize: 40,
          cateid: cate
        },
        success: (data) => {
          pageRender(data, page);
        }
      })
    }
  })
}