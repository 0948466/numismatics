import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import(/* webpackChunkName: "AboutUs" */ './views/AboutUs.vue'),
    },
    {
      path: '/offer',
      name: 'offer',
      component: () => import(/* webpackChunkName: "Offer" */ './views/Offer.vue'),
    },
    {
      path: '/coin-card',
      name: 'coin-card',
      component: () => import(/* webpackChunkName: "CoinCard" */ './views/CoinCard.vue'),
    },
    {
      path: '/coin-buy',
      name: 'coin-buy',
      component: () => import(/* webpackChunkName: "CoinBuy" */ './views/CoinBuy.vue'),
    },
    {
      path: '/coin-sale',
      name: 'coin-sale',
      component: () => import(/* webpackChunkName: "CoinSale" */ './views/CoinSale.vue'),
    },
    {
      path: '/create-lot-sale',
      name: 'create-lot-sale',
      component: () => import(/* webpackChunkName: "CreateLotSale" */ './views/CreateLotSale.vue'),
    },
    {
      path: '/create-lot-buy',
      name: 'create-lot-buy',
      component: () => import(/* webpackChunkName: "CreateLotBuy" */ './views/CreateLotBuy.vue'),
    },
  ],
});
