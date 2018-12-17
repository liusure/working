import DI18n from 'di18n-translate'
import messageConfig from './messageConfig'
let loc = window.localStorage.jfblocale || 'zh';
const di18n = new DI18n({
  locale: loc,
  isReplace: true,
  messages: messageConfig
})

export default di18n;