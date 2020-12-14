<template>
  <div>
    <TheMenu />
    <EstateGallery />
  </div>
</template>

<script>
    import TheMenu from "../components/partials/TheMenu";
    import EstateGallery from "../components/partials/EstateGallery";

    export default {
        name: 'OurRealEstate',
        components: {TheMenu, EstateGallery}
    };
</script>

<style scoped>

</style>
