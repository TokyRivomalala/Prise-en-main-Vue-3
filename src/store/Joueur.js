export const JoueurModule = {
    namespaces : true,

    state: {
        //joueur : [{id : '1' , email : 'toky@gmail.com' , nom : 'Toky'}]
        joueur : null
      },
    
      mutations: {
        SET_JOUEUR(state, nouveauJoueur){
          state.joueur = nouveauJoueur;
        }
      },
    
      actions: {
        setJoueur({ commit }, nouveauJoueur){
          commit('SET_JOUEUR', nouveauJoueur);
        }
      },
    
}