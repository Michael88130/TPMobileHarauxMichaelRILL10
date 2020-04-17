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
const page = {

}
//export default page;
 export default {
    name: "details",
    
props:{
    nom: String
},
  methods: {
        goBack() {
      this.$navigateBack();
    }
  },
    
    data() {
        return {};
    }
}; 
</script>