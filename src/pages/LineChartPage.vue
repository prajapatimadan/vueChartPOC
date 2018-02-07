<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6">
          <div class="card">
            <div class="card-block">
              <h4 class="card-title">{{title}}</h4>
              <p class="card-text">
                <line-chart :data="datacollection" :options="{responsive: false, maintainAspectRatio: false}"></line-chart>
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';

export default {
  name: 'LineChartPage',
  components:{LineChart},
    data () {
      return {
        title: "Line Chart",
        datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p.card-text canvas {
  margin: auto;
}
</style>
