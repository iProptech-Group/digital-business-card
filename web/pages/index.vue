<template>
  <div id="container">
    <TheBanner />
    <TheMember />
    <TheFooter />
    <TheEmailSubscription />
    <TheOurRealEstate />
    <TheAboutUs />
    <TheContactUs />
  </div>
</template>

<script>
    import TheFooter from '../components/partials/TheFooter';
    import TheBanner from '../components/homepage/TheBanner';
    import TheMember from '../components/homepage/TheMember';
    import TheEmailSubscription from '../components/homepage/TheEmailSubscription';
    import TheOurRealEstate from '../components/homepage/TheOurRealEstate';
    import TheContactUs from '../components/homepage/TheContactUs';
    import TheAboutUs from '../components/homepage/TheAboutUs';
    export default {
        name: 'Index',
        components: {TheAboutUs, TheContactUs, TheOurRealEstate, TheEmailSubscription, TheMember, TheBanner, TheFooter},
    };
</script>
