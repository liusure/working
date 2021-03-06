import '../css/news.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'

$(function () {
    request({
        url: urls.news,
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
    let content_container = $('.content_container');
  let i = 0;
    _.forEach(items, (item) => {
        let date = new moment(item.updateTime).format('DD');
        let month = new moment(item.updateTime).format('MMMM').substring(0,3);

        let ele = $(`
            <div class="news_item_container">
                <div class="news_item_header">
                    <a href="newsDetail.html?id=${item.id}"><img class="news_img" src="${item.picUrl}" alt=""></a>
                </div>
                <div class="news_item_content">
                    <div class="date">
                    <span class="day">${date}</span>
                    <span class="month">${month}</span>
                    </div>
                    <div class="news_info">
                        <div class="news_title">${item.name}</div>
                        <div class="news_desc">${item.extensionProfile}</div>
                    </div>
                </div>
                <div class="news_item_bottom">
                <a href="newsDetail.html?id=${item.id}" class="know_more">查看详情</a>
                </div>
            </div>
        `)
        content_container.append(ele);
      i++;
      if (i % 2 === 0) {
        content_container.append($("<p class='gap'></p>"));
      }
    })
}