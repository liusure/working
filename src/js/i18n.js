import DI18n from 'di18n-translate'

const di18n = new DI18n({
    locale: 'zh',
    isReplace: true,
    messages: {
        en: {
            你好: 'Hello'
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