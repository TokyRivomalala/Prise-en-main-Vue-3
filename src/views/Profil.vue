<template>

    <div class="joueur">
    <router-link to = "/">
        <h4>Home</h4>
    </router-link>
        <h4>Les joueurs</h4>
        <Joueur
            v-for="player in info.joueur" 
            :key="player.id" 
            :player = "player" 
            @nom-clicked = "tempNom"
        />
    </div>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
    <div class="container">
        <form>
        <h2>Id joueur = {{ idJoueur }}</h2>
            <div class="formulaire">
                <div class="row mt-4">
                    <div class="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control col-md-6" v-model = "info.newNom">
                    </div>
                    <div class="form-group">
                        <label>Prenom</label>
                        <input type="text" class="form-control col-md-6" v-model = "info.newPrenom">
                    </div>
                </div>
                <div class="row">
                    <button class="btn btn-primary" @click.prevent="addJoueur">Valider</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    import Joueur from '../components/Joueur.vue';
    import {useRoute} from 'vue-router';
    import {reactive , computed} from 'vue';

    export default {
        name: 'Profil',
        components: {
            Joueur
        },
        setup(){
            const route = useRoute();
            const idJoueur = computed ( () => route.params.idJoueur);


            const info = reactive({
                newNom : "",
                newPrenom : "",
                admin : {
                    id : 'ADM_1',
                    email : 'toky@gmail.com',
                    nom : 'Rivomalala',
                    prenom : 'Toky Anthony',
                    mdp : '1234',
                    isAdmin : true
                },
                joueur : [
                    { id : 1 , nom : 'Lionel' , prenom : 'Messi'},
                    { id : 2 , nom : 'Cristiano' , prenom : 'Messi'},
                    { id : 3 , nom : 'Kylian' , prenom : 'Mbappe'},
                    { id : 4 , nom : 'Neymar' , prenom : 'Jr'}
                ],
                followers : 0,
            });

            return{
                info,
                idJoueur
            }
        },
        watch : {
            followers(newFollower, oldFollower){
                if (oldFollower < newFollower ){
                    //console.log(`${ this.admin.prenom } has gained a follower` );
                }
            }
        },
        computed : {
            fullName(){
                return `${this.admin.prenom} ${this.admin.nom}`;
            }
        },
        methods : {
            addFollowers(){
                this.followers++;
            },

            tempNom(nomTemp){
                console.log(nomTemp + ' was clicked');
            },
            addJoueur(){
                if(this.info.newNom != "" && this.info.newPrenom != ""){
                    this.info.joueur.unshift({
                        id : this.info.joueur.length + 1,
                        nom : this.info.newNom,
                        prenom : this.info.newPrenom
                    });
                }
            }
        },
        mounted() {
            this.addFollowers();
        }
    }
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
}

.joueur-list:hover {
    transform : scale(1,1,1,1);
}
</style>
