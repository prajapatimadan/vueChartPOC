<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6">
        <div class="card">
            <div class="card-block">
              <h4 class="card-title">{{title}}</h4>
              <p class="card-text" v-if="datacollection">
                <bar-chart :data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></bar-chart>
              </p>
            </div>
          </div>
      </div>
    </div>
    <div class="row" v-if="errors">{{errors}}</div>
  </div>
</template>

<script>

import BarChart from '@/components/BarChart';
import {HTTP} from '@/http-common';

export default {
  name: 'BarChartPage',
  components: { BarChart },
  data() {
    return {
      title: "Bar Chart",
      datacollection: undefined,
      errors: undefined
    };
  },
  methods: {
    getData() {
      var self = this;
      HTTP.get('gitdata.json',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      mode: 'no-cors'
    }).then(response => {
        //(this.datacollection = response.data).bind(this);
        const data = JSON.parse(JSON.stringify(response.data));
        self.datacollection = data;
        console.log("-------1111---- ", data.datasets[0]);
      })
      .catch(e => {
        (this.errors).bind(this).push(e);
      });
    }
  },
  mounted: function () {
      this.getData();
    console.log(this.datacollection);
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
