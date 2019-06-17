<template>
  <div class="container">
    <h3>Please, edit your user</h3>
    <table class="table-bordered">
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Email</th>
        <th></th>
      </tr>
      <tr>
        <td><input v-model="user.firstname"></td>
        <td><input v-model="user.lastname"></td>
        <td><input v-model="user.phone"></td>
        <td><input v-model="user.email"></td>
        <td><button type="button" v-on:click="clickOK" class="btn btn-success">OK</button></td>
      </tr>

    </table>

  </div>
</template>

<script>
   export default {
     props: ['user'],
     methods: {
       clickOK(){
         this.$router.push('/')
       }
     }
   }
</script>

<style scoped>
  input {
    border: hidden;
  }
</style>

































<!-- <template>
  <div>
    <form-component v-for="item in user" :item="item" :key="item"></form-component>
    <button type="button">OK</button>
  </div>
</template>

<script>
  import FormComponent from './FormComponent';

   export default {
     components: {
       FormComponent
     },
     props: ['user']
   }
</script>

<style scoped>
</style> -->
