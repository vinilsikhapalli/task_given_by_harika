import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import mainComponent from "./components/MainComponent.vue";
const app = createApp(App)
app.component('mainComponent' , mainComponent)

app.mount('#app');
