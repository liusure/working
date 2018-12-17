import '../css/institution.less'
import jsMap from './jsMap2'
import $ from "jquery"
import urls from "./urls";
import {request} from "./utils";

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
  request({
    url: urls.citys,
    success: (data) => {
      initMap(data.citys)
      showAreaNames(data.citys)
    }
  })
})

function initMap(citys) {
  jsMap.config("#map", mapData, {
    areaName: {
      show: true,
    },
    tip: false,
    fill: {
      basicColor: "#8F8F8F",
      hoverColor: "#818181",
      clickColor: "#818181"
    },
    clickCallback: (id, name) => {
      window.location.href = "institutionList.html?city=" + name
    }
  });
}

function showAreaNames(citys) {
  let areas = $(".areas");
  for (let name of areaNames) {
    let flag = false;
    for (let city of citys) {
      if (city === name) {
        flag = true;
        break
      }
    }
    if (flag) {
      $('path[data-name="' + name + '"]').css({
        fill: 'red'
      })
    }
    areas.append($(`<a href="institutionList.html?city=${name}" class='area_name ${flag ? 'active' : ''}'>${name}</a>`))
  }
}
