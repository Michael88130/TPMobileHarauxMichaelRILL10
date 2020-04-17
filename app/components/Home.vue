<template>
  <Page>
    <ActionBar class="action-bar" title="Les Dinosaures">
    </ActionBar>
    <StackLayout>
       <!-- Itération sur la liste de Dinosaures  -->
        <ListView for="item in dinosaures" @itemTap="onItemTap" separatorColor = blue>
  <v-template>
    <label :text="item.nom" />
  </v-template>
</ListView>
    </StackLayout>
  </Page>
</template>

<script>
import details from './details'; // Import se la fiche détail
import dino from '@/models/model.dinosaure'; // Import du model "dinosaure"

// Déclaration dans un tableau des objets "dinosaure" selon le model
const Dinosaures = [];
const Diplodocus = new dino("Diplodocus","C'est un très grand quadrupède herbivore au long cou,...");
Dinosaures.push(Diplodocus);
const Stegosaure = new dino("Stégosaure","Stegosaurus, communément appelé stégosaure,...");
Dinosaures.push(Stegosaure);
const Tyrannosaure = new dino("Tyrannosaure","Les premiers restes significatifs furent découverts en 1902",);
Dinosaures.push(Tyrannosaure);
const Dilophosaure = new dino("Dilophosaure");
Dinosaures.push(Dilophosaure);
const Albertosaure = new dino("Albertosaure");
Dinosaures.push(Albertosaure);
const Titanosaure = new dino("Titanosaure");
Dinosaures.push(Titanosaure);
const Velociraptor = new dino("Vélociraptor");
Dinosaures.push(Velociraptor);
const Brachiosaurus = new dino("Brachiosaurus");
Dinosaures.push(Brachiosaurus);
const Ankylosaure = new dino("Ankylosaure");
Dinosaures.push(Ankylosaure);

export default {
    name :"Home",
   data(){
        return{
              // Test avec une liste 
              // dinosaures: [{nom:'Diplodocus'},{nom:'Stégosaure'},{nom:'Tricératops'},{nom:'Dilophosaure'}],
            dinosaures :Dinosaures // On retourne la liste pour l'utilisation dans listview
        } 
    }, 
    //Déclaration des Components
    components: [
    details,
    ],
 
    methods: {
    onItemTap(event) {
      this.$navigateTo( // Navigation vers détails selon l'item selectionné
          details, 
          { props: {dinosaure: event.item}});
         
    }
  }
}
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
       // horizontal-align: center;
        vertical-align: center;
    }
</style>
