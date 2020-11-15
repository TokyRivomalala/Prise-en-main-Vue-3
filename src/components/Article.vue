<template>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    
    <div class="container">
        <h2>Article Form</h2>
        <!-- <form class="form-article" @submit="validateArticle">
            <div class="form-group">
              <label class = "mt-2">Code</label>
              <input type="text" class="form-control col-md-2" v-model = "code">

            </div>
            <div class="form-group">
              <label>Prix Unitaire</label>
              <input type="number" class="form-control col-md-2" v-model = "pu">
            </div>
            <div class="form-group">
              <label>Date Achat</label>
              <input type="date" class="form-control col-md-2" v-model = "dateAchat">
            </div>
            <div class="form-group">
                <label>Categorie</label><br>
                <select class="custom-select col-md-2" v-model = "categ">
                    <option :value = "cat.name" v-for="(cat,index) in categorie" :key = "index">{{ cat.value }}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form> -->
    </div>

</template>

<script>
export default {
    // data() {
    //     return {
    //         categorie : [
    //             { name : 'tous' , value : 'Tous'},
    //             { name : 'ppn' , value : 'PPN'}
    //         ],
    //         code : "",
    //         pu : "",
    //         dateAchat : "",
    //         categ : ""
    //     }
    // },
    // methods : {
    //     validateArticle(){

    //         console.log('code = '+ this.code);
    //         console.log('pu = '+ this.pu);
    //         console.log('date = '+ this.dateAchat);
    //         console.log('categorie = '+ this.categ);
    //     }
    // }
}
</script>

<style>

</style>>