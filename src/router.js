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
    {
      path: '/sing-in',
      name: 'sing-in',
      component: () => import(/* webpackChunkName: "SingIn" */ './views/SingIn.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "ProfileView" */ './views/ProfileView.vue'),
    },
    {
      path: '/profile-edit',
      name: 'profile-edit',
      component: () => import(/* webpackChunkName: "ProfileEdit" */ './views/ProfileEdit.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "Order" */ './views/Order.vue'),
    },
    {
      path: '/bid',
      name: 'bid',
      component: () => import(/* webpackChunkName: "Bid" */ './views/Bid.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import(/* webpackChunkName: "Orders" */ './views/Orders.vue'),
    },
    {
      path: '/bids',
      name: 'bids',
      component: () => import(/* webpackChunkName: "Bids" */ './views/Bids.vue'),
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: () => import(/* webpackChunkName: "ChangePassword" */ './views/ChangePassword.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "ContactsView" */ './views/ContactsView.vue'),
    },
  ],
});
