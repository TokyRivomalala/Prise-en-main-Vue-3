<template>
    <h3>Bienvenue {{ nom }} , tu as {{ age }} ans !</h3>
</template>

<script>
    export default {
        name : 'Accueil',
        props : {
            nom : String,
            age : String
        }
    }
</script>
