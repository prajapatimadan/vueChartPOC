<template>
   <div class="container" >
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text">
              <scatter-chart :data="datacollection" :options="{responsive: false, maintainAspectRatio: false}"></scatter-chart>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScatterChart from '@/components/ScatterChart';

export default {
  name: 'ScatterChartPage',
  components: { ScatterChart },
  data() {
    return {
      title: "Scatter Chart",
      datacollection: {
        datasets: [
          {
            label: 'Product 1',
            backgroundColor: "#9966FF",
            hoverBackgroundColor: "#000000",
            hoverBorderColor: "#9966FF",
            hoverBorderWidth: 5,
            hoverRadius: 5,
            data: [{
              x: 20,
              y: 25
            },
            {
              x: 40,
              y: 10
            },
            {
              x: 30,
              y: 22
            }]
          },
          {
            label: 'Product 2',
            backgroundColor: 'rgba(255,99,132,0.2)',
            hoverBackgroundColor: 'rgba(255,99,100,0.5)',
            hoverBorderColor: 'rgba(255,99,132,0.5)',
            hoverBorderWidth: 5,
            hoverRadius: 5,
            data: [{
              x: 10,
              y: 30
            },
            {
              x: 20,
              y: 20
            },
            {
              x: 15,
              y: 8
            }]
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
