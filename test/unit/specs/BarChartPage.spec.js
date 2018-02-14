import Vue from 'vue';
import BarChartPage from '@/pages/BarChartPage';
import chartService from '@/services/ChartService'

describe('BarChartPage.vue', () => {
  let vm
  before(() => {
    const Constructor = Vue.extend(BarChartPage)
    vm = new Constructor({
      propsData: {
        service: chartService
      }
    }).$mount()
  })
  it('should render', function () {
    // Wrapping the tick inside a promise, bypassing PhantomJS's lack of support
    return (new Promise(resolve => Vue.nextTick(() => resolve()))).then(() => {
      expect(vm.$el.querySelector('h1').textContent).to.equal('C')
    })
  })
})
