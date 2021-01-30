<template>
  <form action="/profile/create" method="post">
    <div class="field" v-for="(item, id) in inputItems" :key="id">
      <label class="label" v-bind:for="item.inputName">{{item.label}}</label>
      <div class="control">
        <input class="input" v-bind:name="item.inputName" v-bind:type="item.type" v-bind:placeholder="item.placeholder">
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
          { label: 'Full Name', inputName: 'full-name', type: 'text', placeholder: 'Put your name' },
          { label: 'Email', inputName: 'email', type: 'email', placeholder: 'Put your email' },
          { label: 'Phone', inputName: 'phone', type: 'tel', placeholder: 'Put your phone number' },
          { label: 'Facebook', inputName: 'facebook', type: 'url', placeholder: 'Put your facebook url' },
          { label: 'Instagram', inputName: 'instagram', type: 'url', placeholder: 'Put your instagram url' },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
