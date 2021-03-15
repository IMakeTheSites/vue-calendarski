import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyApTP2vEAUPqlbfhSfjqPLTkjl_9uH5O8M',
  authDomain: 'vue-calendarski.firebaseapp.com',
  projectId: 'vue-calendarski',
  storageBucket: 'vue-calendarski.appspot.com',
  messagingSenderId: '76831155984',
  appId: '1:76831155984:web:03c4c27b6295de6af3a795',
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
