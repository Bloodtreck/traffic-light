import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Screen1 from './components/Screen1.vue'
import Screen2 from './components/Screen2.vue'
import Screen3 from './components/Screen3.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/red', component: Screen1 },
    { path: '/yellow', component: Screen2 },
    { path: '/green', component: Screen3 },
  ]
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  data: {
    current: '',
    previous: '',
    message: 'Hello'
  },
  router,
  created: function() {
    this.current = this.$route.fullPath;
    if (this.current === '/') {
      this.setRed();
    }
    else if (this.current === '/red') {
      this.previous = this.current;
      setTimeout(() => this.setYellow(), 10000);
    } else if (this.current === '/yellow') {
      if (this.previous === '/red') {
        setTimeout(() => this.setGreen(), 3000);
      } else {
        setTimeout(() => this.setRed(), 3000);
      } 
    } else if (this.current === '/green') {
      this.previous = this.current;
      setTimeout(() => this.setYellow(), 15000);
    }
  },
  methods: {
    setRed: function() {
      this.$router.push('/red');
      this.current = this.$route.fullPath;
      this.previous = this.current;
      setTimeout(() => this.setYellow(), 10000);
    },
    setYellow: function() {
      this.$router.push('/yellow');
      this.current = this.$route.fullPath;
      if (this.previous === '/red') {
        setTimeout(() => this.setGreen(), 3000);
      } else {
        setTimeout(() => this.setRed(), 3000);
      } 
    },
    setGreen: function() {
      this.$router.push('/green');
      this.current = this.$route.fullPath;
      this.previous = this.current;
      setTimeout(() => this.setYellow(), 15000);
    }
  }
}).$mount('#app')
