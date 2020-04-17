<template>
  <Page>
    <ActionBar  :title="dinosaure.nom">
       <Button text="back" @tap="goBack" />
    </ActionBar >
    <StackLayout>
         <Label :text="nom" />
   
    </StackLayout>
  </Page>
</template>

<script>
import dino from '@/models/model.dinosaure';
const page = {

}
//export default page;
 export default {
    name: "details",
    
props:{
    dinosaure: dino
},
  methods: {
        goBack() {
      this.$navigateBack();
    }
  },
    

/* computed:{
    nom() {
        return { nom : dinosaure.nom} 
    }
},  */

   data(){
        return{
            
                nom : this.dinosaure.nom
        }
        
    },  

}; 
</script>