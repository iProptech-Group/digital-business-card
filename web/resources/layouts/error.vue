{{{{raw}}}}
<template>
  <section class="container has-text-centered">
    <img src="../assets/img/404-error-bg.jpg" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <Nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </Nuxt-link>
  </section>
</template>
{{{{/raw}}}}
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
