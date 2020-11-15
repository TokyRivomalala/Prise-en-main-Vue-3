import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profil from '../views/Profil.vue'
import Admin from '../views/Admin.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil/:idJoueur',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta : {
      requiresAdmin : true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to,from,next) => {

  //const joueur = store.state.joueur;
  const joueur = store.state.Joueur.joueur;
  const liste = [
    {id : '1' , email : 'toky@gmail.com' , nom : 'Toky'},
    {id : '2' , email : 'koto@gmail.com' , nom : 'Koto'},
    {id : '3' , email : 'bema@gmail.com' , nom : 'Bema'}
  ];

  if(!joueur){
    //await store.dispatch('setJoueur' , liste[0]);
    await store.dispatch('Joueur/setJoueur' , liste[0]);
  }
  
  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin); 

  if(requiresAdmin && !isAdmin) next({name : 'Home'});
  else next();
})

export default router
