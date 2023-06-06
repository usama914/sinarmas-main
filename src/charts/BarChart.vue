<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        backgroundColor: '#f70000',
        labels: [ 'January', 'February', 'March' ,'April' ,'May' ,'June' ,'July' ,'August' ,'September','October' ,'November','December'],
        datasets: [ { label: 'Monthly', backgroundColor: '#f87979', data: [40, 20, 12 , 5 , 9 , 15 , 25 , 2 , 30 , 22 , 17, 1] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>