import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search } from 'vant';
import 'vant/lib/index.css';
import { Tab, Tabs } from 'vant';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { CountDown } from 'vant';


Vue.config.productionTip = false
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
