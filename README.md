# 常用函数

## Build Setup

``` bash
# install dependencies
npm install npm-assembly --save

# serve
main.js   import npmAssembly from 'npm-assembly'

# echarts 组件
<echart
    :id="Id"
    :eStyle="style" // 样式
    :titleText="title" // 标题
    :legend="barName" // legend
    :seriesData="data" // 数据源
    :xA="barX" // X轴
    :yA="barY" // Y轴
    />

```

``` bash
# 常用函数持续更新...
import util from 'npm-assembly/src/lib/util'

时间格式化 : utils.formatDate(new Date(), 'yyyy年MM月dd hh分mm秒')
以“天”为单位获取响应的时间戳 : utils.setDate(utils.setDate(3), 'yyyy年MM月dd hh分mm秒')
根据当前时间后推date月数 : utils.getMonthDate(3)
获取 URL 中的参数 : utils.getUrlParams('b')
数组降维 : 二维：utils.arrayFlat([ [1], [2], [3] ], true), 多维：utils.arrayFlat([1, 2, [3], [[4]]], false)
深拷贝 : utils.deepClone({a:'1', b:'2'}),
去除数组中的空值 : utils.trimNull([1, 2, '', undefined, 3]),
节流函数 : throttle
函数防抖 : debounce
获取数组极值 : 最小值: utils.mathApply([0, 1, 2.2, 3.3], 'min'), 最大值：utils.mathApply([0, 1, 2.2, 3.3], 'max')
判断小数是否相等 : epsEqu: utils.epsEqu(0.1 + 0.2, 0.3)
数组排序 : utils.arraySort([1, 10, 5, 150, 15])
字母排序 : utils.letterSort(['ef', 'cd', 'xy', 'hi', 'ab'])
获取当前时间 all 年-月-日 时-分-秒 | ymdhm 年-月-日 时-分 | ymd 年-月-日 | ym 年-月 | hm 时-分 | y 年 | m 月 | d 日: utils.formatDateInfo(new Date(), 'ym')
```
