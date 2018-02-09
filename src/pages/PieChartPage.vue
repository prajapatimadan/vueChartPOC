<template>
   <div class="container" >
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text">
              <pie-chart :data="datacollection" :options="{responsive: false, maintainAspectRatio: false}"></pie-chart>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart';

export default {
  name: 'PieChartPage',
  components: { PieChart },
  data() {
    return {
      title: "Pie Chart",
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: [
              '#f87979',
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
              '#DC1A16',
              '#E40051',
              '#a87070',
              '#c0c070',
              '#e0e070',
              '#087070',
              '#987070'
            ],
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
