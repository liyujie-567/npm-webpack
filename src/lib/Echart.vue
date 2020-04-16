<template>
  <div>
    <div v-bind:id="id" :style="eStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'echart',
  props: {
    // 图表ID
    id: {
      type: String,
      default: ''
    },
    // 图表样式
    eStyle: {
      type: Object,
      default() {
          return {}
      }
    },
    // 标题
    titleText: {
      type: String,
      default: ''
    },
    // legend 标题
    legend: {
      type: Object,
      default() {
          return {}
      }
    },
    // 数据源
    seriesData: {
      type: Array,
      default() {
          return []
      }
    },
    // x轴数据
    xA: {
      type: Object,
      default() {
          return {}
      }
    },
    // y轴数据
    yA: {
      type: Object,
      default() {
          return {}
      }
    }
  },
  data () {
    return {
      charts: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
        this.drawLine(this.id)
    })
    window.addEventListener('resize', () => {
        this.charts.resize()
    })
  },
  methods: {
    drawLine(id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      // loading
      this.charts.showLoading({
          text : '正在加载数据'
      });

      // 组装图表
      this.charts.setOption({
          title: {
              left: 'center',
              text: this.titleText,
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          legend: {
              left: this.legend.left,
              data: this.legend.data
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              name: this.xA.name,
              axisPointer: {
                  type: 'shadow'
              },
              axisLabel: {
                  formatter: '{value}' + this.xA.measure
              },
              data: this.xA.data
          },
          yAxis: {
              type: 'value',
              name: this.yA.name,
              min: this.yA.min,
              max: this.yA.max,
              interval: this.yA.interval,
              axisLabel: {
                  formatter: '{value}' + this.yA.measure
              }
          },
          series: this.seriesData  // 区域数据
      })
      if (this.seriesData.length > 0) {
          this.charts.hideLoading()
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
