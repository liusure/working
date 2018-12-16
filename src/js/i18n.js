import DI18n from 'di18n-translate'

const di18n = new DI18n({
    locale: "zh",
    isReplace: true,
    messages: {
        en: {
            首页: "index",
            区域机构: "institution",
            专业资源: "resource",
            服务内容: "service",
            经典案例: "case",
            新闻中心: "news",
            联系我们: "about"
        },
        zh: {
            首页: "首页",
            区域机构: "区域机构",
            专业资源: "专业资源",
            服务内容: "服务内容",
            经典案例: "经典案例",
            新闻中心: "新闻中心",
            联系我们: "联系我们"
        }
    }
})

export default di18n;