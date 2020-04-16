import Echart from './Echart'

let libUtil = require('./lib/util')
module.exports = {
  util: libUtil
}
let index = {}
index.install = function (Vue) {
    Vue.component(Echart.name, Echart) // 组件的name属性
}

export default index
