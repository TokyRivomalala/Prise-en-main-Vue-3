<template>
    <li @click="clickPlayer(player.nom)">{{ player.nom }} {{ player.prenom }}</li> 
 
</template>

<script>
export default {
    props : {
        player : {
            type : Object,
            required : true
        },
        
    },
    methods : {
        clickPlayer(nom){
            return this.$emit('nom-clicked',nom);
        }
    }
}
</script>

<style>

</style>>