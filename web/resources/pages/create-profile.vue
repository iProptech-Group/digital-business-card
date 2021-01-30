<template>
  <form action="/profile/create" method="post">
    <div class="field" v-for="(item, id) in inputItems" :key="id">
      <label class="label" v-bind:for="item.inputId">{{item.label}}</label>
      <div class="control">
        <input class="input" v-bind:id="item.inputId" v-bind:type="item.type" v-bind:placeholder="item.placeholder">
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'create-profile',
    data () {
      return {
        inputItems: [
          { label: 'Full Name', inputId: 'name', type: 'text', placeholder: 'Put your name' },
          { label: 'Email', inputId: 'email', type: 'email', placeholder: 'Put your email' },
          { label: 'Phone', inputId: 'phone', type: 'tel', placeholder: 'Put your phone number' },
          { label: 'Facebook', inputId: 'facebook', type: 'url', placeholder: 'Put your facebook url' },
          { label: 'Instagram', inputId: 'instagram', type: 'url', placeholder: 'Put your instagram url' },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
