<template>
  <Page>
    <ActionBar class="action-bar" title="Home Page">
    </ActionBar>
    <StackLayout>
        <ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <!-- Shows the list item label in the default color and style. -->
    <Label :text="item.text" />
  </v-template>
</ListView>
 

    </StackLayout>
  </Page>
</template>

<script>
import details from './details'

export default {
    name :"Home",
    data(){
        return{
                listOfItems: [{text:'Diplodocus'},{text:'Stégosaure'},{text:'Tricératops'},{text:'Dilophosaure'}],
        }
        
    },

  components: [
    details,
  ],
  methods: {
    onItemTap(event) {
      this.$navigateTo(
          details, 
          { props: {nom:event.item.text}});
         
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
