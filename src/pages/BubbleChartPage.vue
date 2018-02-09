<template>
   <div class="container" >
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text">
              <bubble-chart :data="datacollection" :options="{responsive: false, maintainAspectRatio: false}"></bubble-chart>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BubbleChart from '@/components/BubbleChart';

export default {
  name: 'BubbleChartPage',
  components: { BubbleChart },
  data() {
    return {
      title: "Bubble Chart",
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
              y: 25,
              r: 5
            },
            {
              x: 40,
              y: 10,
              r: 10
            },
            {
              x: 30,
              y: 22,
              r: 30
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
              y: 30,
              r: 15
            },
            {
              x: 20,
              y: 20,
              r: 10
            },
            {
              x: 15,
              y: 8,
              r: 30
            }]
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
