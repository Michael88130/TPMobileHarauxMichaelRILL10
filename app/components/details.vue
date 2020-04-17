<template>
  <Page>
    <ActionBar  >
        <!-- Bouton retour -->
       <Button text="Retour" @tap="goBack" /> 
    </ActionBar >
    <StackLayout>
        <!-- Affichage du nom et de la déscription -->
         <Label :text="nom" v-bind:class="[activeClass, errorClass]"/>
         <Label :text="desc" />
    </StackLayout>
  </Page>
</template>

<script>
import dino from '@/models/model.dinosaure'; //Import du model
const page = {

}
//export default page;
 export default {
    name: "details",
    
props:{
    dinosaure: dino
},
  methods: {
    goBack() { //Méthode de retour
      this.$navigateBack();
    }
  },
   data(){
        return{
            //Retour du nom et de la description de l'item selectionné
                nom : this.dinosaure.nom, 
                desc : this.dinosaure.description
        }
    },  
}; 
</script>