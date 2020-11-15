<template>
    <h1>{{ joueur.email }}</h1>
    <router-view />
</template>

<script>
//import { reactive } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
    name : 'App',
    setup(){
        // const state = reactive({
        //     joueur : {
        //         email : 'soa@gmail.com'
        //     }
        // })

        const store = useStore();
        // const joueur  = computed( () => store.state.joueur );
        const joueur  = computed( () => store.state.Joueur.joueur );

        return{
            joueur
        }
    }
}
</script>>



