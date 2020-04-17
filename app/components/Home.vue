<template>
  <Page>
    <ActionBar class="action-bar" title="Les Dinosaures">
    </ActionBar>
    <StackLayout>
        <ListView for="item in dinosaures" @itemTap="onItemTap">
  <v-template>
    <!-- Shows the list item label in the default color and style. -->
    <Label :text="item.nom" />
  </v-template>
</ListView>
    </StackLayout>
  </Page>
</template>

<script>
import details from './details';
import dino from '@/models/model.dinosaure';

const Dinosaures = [];

const Diplodocus = new dino("Diplodocus");
Dinosaures.push(Diplodocus);
const Stegosaure = new dino("Stégosaure");
Dinosaures.push(Stegosaure);
const Tyrannosaure = new dino("Tyrannosaure");
Dinosaures.push(Tyrannosaure);
const Dilophosaure = new dino("Dilophosaure");
Dinosaures.push(Dilophosaure);
const Albertosaure = new dino("Albertosaure");
Dinosaures.push(Albertosaure);

export default {
    name :"Home",
   data(){
        return{
              // dinosaures: [{nom:'Diplodocus'},{nom:'Stégosaure'},{nom:'Tricératops'},{nom:'Dilophosaure'}],
                dinosaures :Dinosaures
        }
        
    }, 

  components: [
    details,
   
    ],

 
methods: {
    onItemTap(event) {
      this.$navigateTo(
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
