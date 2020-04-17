<template>
  <Page>
    <ActionBar class="action-bar" title="Home Page">
    </ActionBar>
    <StackLayout>
        <ListView height='100%' for="item in dinosaures" @itemTap="onItemTap">
  <v-template>
   
    <Label :text='item.nom' />
    <Label text="Bonjour" />
  </v-template>
</ListView>
 

    </StackLayout>
  </Page>
</template>

<script>
import details from './details';
import dinosaure from '@/models/model.dinosaure';

const Dinosaures = [];

const Diplodocus = new dinosaure("Diplodocus");
Dinosaures.push(Diplodocus);
const Stegosaure = new dinosaure("Stégosaure");
Dinosaures.push(Stegosaure);
const Tyrannosaure = new dinosaure("Tyrannosaure");
Dinosaures.push(Tyrannosaure);

export default {
    name :"Home",
    methods: {
    onItemTap(event) {
      this.$navigateTo(
          details, 
          { props: {dinosaure: event.item}});
         
    }
  },

/*    data(){
        return{
               // dinosaures: [{text:'Diplodocus'},{text:'Stégosaure'},{text:'Tricératops'},{text:'Dilophosaure'}],
                 dinosaures :Dinosaures
        }
        
    }, */

  components: {
    details,
   dinosaure
    },

    computed: {
        dinosaures(){
            return Dinosaures;
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
