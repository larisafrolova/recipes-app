import { createApp } from 'vue';
import App from './App.vue';
import NewRecipe from './components/NewRecipe.vue';

const app = createApp(App);

app.component ('new-recipe', NewRecipe);

app.mount('#app');
