import Echart from './Echart'

let index = {}
index.install = function (Vue) {
    Vue.component(Echart.name, Echart) // 组件的name属性
}

export default index
