import '../css/lawyerDetail.less'
import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import urls from './urls'
import {request} from './utils'
import qs from 'qs'

$(function () {
    let params = qs.parse(window.location.href.split('?')[1]);
    request({
        url: urls.lawyerdetail,
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
<div class="lawyer_detail_container">
                <div class="lawyer_base_info">
                    <div class="lawyer_img_container">
                        <img class="lawyer_img" src="http://jfb.zledong.com/jmedias/img/584/1542796643420.jpg" alt="">
                    </div>
                    <div class="lawyer_base_info_content">
                        <h1 class="lawyer_title">${item.name}</h1>
                        <div class="lawyer_base_info_context">
                            <p>主要业务领域：<br/>${item.bussinessArea}</p>
                            <p class="gap"></p>
                            <p>专业资格：<br/>${item.qualificationDesc}</p>
                        </div>
                    </div>
                </div>
                <div><p>从业经历：${item.workHistory}</p></div>
                <p class="gap"></p>
                <div class="lawyer_content">简介：<br/>${item.contentDesc}</div>
                                <p class="gap"></p>
                <div class="lawyer_content">社会职务：<br/>${item.socialFunction}</div>
                                <p class="gap"></p>
                <div class="lawyer_content">出版作品：<br/>${item.production}</div>
            </div>
        `)
    content_container.append(ele);
}