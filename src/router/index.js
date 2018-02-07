import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import BarChartPage from '@/pages/BarChartPage';
import LineChartPage from '@/pages/LineChartPage';
import PieChartPage from '@/pages/PieChartPage';
import RadarChartPage from '@/pages/RadarChartPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/barchart',
      name: 'BarChartPage',
      component: BarChartPage
    },
    {
      path: '/linechart',
      name: 'LineChartPage',
      component: LineChartPage
    },
    {
      path: '/piechart',
      name: 'PieChartPage',
      component: PieChartPage
    },
    {
      path: '/radarchart',
      name: 'RadarChartPage',
      component: RadarChartPage
    }
  ]
});
