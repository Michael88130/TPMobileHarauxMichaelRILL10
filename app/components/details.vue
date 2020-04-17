<template>
  <Page>
    <ActionBar class="action-bar" title="Details Page">
    
    </ActionBar>
    <StackLayout>
         <Label :text="nom" />
      <Button text="back" @tap="goBack" />
    </StackLayout>
  </Page>
</template>

<script>
import dinosaure from '@/models/model.dinosaure';
const page = {

}
//export default page;
 export default {
    name: "details",
    
props:{
    dinosaure: dinosaure
},
  methods: {
        goBack() {
      this.$navigateBack();
    }
  },
    
  /*  data() {
        return {};
    }*/
computed:{
    nom() {
        return  dinosaure.nom;
    }
},

/*     data(){
        return{
              
                 name : $this.dinosaure.nom
        }
        
    }, */
}; 
</script>