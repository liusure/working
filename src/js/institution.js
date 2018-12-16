import '../css/institution.less'
import jsMap from './jsMap2'
import $ from "jquery"

let mapData = require('../assets/data/map.json')
let areaNames = [
    "北京", "合肥", "太原", "潍坊", "黑河",
    "沈阳", "郑州", "南昌", "上海", "宁夏",
    "大连", "兰州", "武汉", "齐齐哈尔", "青岛",
    "哈尔滨", "贵阳", "潍坊", "佳木斯", "南昌",
    "天津", "成都", "唐山", "西安", "长沙",
    "石家庄", "乌鲁木齐", "苏州", "宁波", "大连",
]

$(function () {
    initMap()
    showAreaNames()
})

function initMap() {
    jsMap.config("#map", mapData, {
        areaName: {
            show: true,
        },
        tip: false,
        fill: {
            basicColor: "#8F8F8F",
            hoverColor: "#818181",
            clickColor: "#818181"
        }
    });
}

function showAreaNames() {
    for (let name of areaNames) {
        $(".areas").eq(0).append($("<div class='area_name'>" + name + "</div>"))
    }
}
