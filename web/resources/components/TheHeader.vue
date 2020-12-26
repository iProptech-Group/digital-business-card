<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" v-bind:to="logoData.url">
        <img v-bind:src="logoData.imageUrl" width="112" height="28">
      </NuxtLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink class="navbar-item" v-for="item in menuItems" v-bind:to="item.url">
          {{item.name}}
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <NuxtLink class="button is-primary" to="/create-profile">
              <strong>Create Profile</strong>
            </NuxtLink>
            <NuxtLink class="button is-light" to="/">
              Log in
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "TheHeader",
      data() {
        return {
          menuItems: [
            {name: 'Home Page', url: '/'},
            {name: 'About Us', url: '/'},
            {name: 'Contact Us', url: '/'},
          ],
          logoData:
            {url: '/', name: 'Digital Business Card', imageUrl: '/'}
        };
      }
    }
</script>

<style scoped>

</style>
