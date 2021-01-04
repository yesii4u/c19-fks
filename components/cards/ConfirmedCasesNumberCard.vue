<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      id="number-of-confirmed-cases"
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="graphData.patients.date"
      :last-acquisite-date="lastAcquisiteDate"
      :unit="$t('人')"
      :url="
        'https://www.pref.fukushima.lg.jp/sec/21045c/fukushima-hasseijyoukyou.html'
      "
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeLineChart.vue' // yesii
// import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  props: {
    graphData: {
      type: Object,
      required: false,
      default: Data
    }
  },
  data() {
    // 陽性患者数
    const patientsGraph = formatGraph(this.graphData.patients_summary.data)
    // 直近の公表日の取得
    const lad = new Date(
      this.graphData.patients_summary.data[
        this.graphData.patients_summary.data.length - 1
      ]['日付']
    )

    const data = {
      patientsGraph,
      isReady: false,
      lad,
      // lastAcquisiteDate: `${lad.getMonth() + 1}/${lad.getDate()}`  //yesii
      lastAcquisiteDate: `${lad.getFullYear()}/${(
        '00' +
        (lad.getMonth() + 1)
      ).slice(-2)}/${('00' + lad.getDate()).slice(-2)}`
    }
    return data
  },
  mounted() {
    this.Data = this.graphData
    this.patientsGraph = formatGraph(this.graphData.patients_summary.data)
    this.isReady = true
    // this.lastAcquisiteDate = `${lad.getMonth() + 1}/${lad.getDate()}`   //yesii
    this.lastAcquisiteDate = `${this.lad.getFullYear()}/${(
      '00' +
      (this.lad.getMonth() + 1)
    ).slice(-2)}/${('00' + this.lad.getDate()).slice(-2)}`
  }
}
</script>
