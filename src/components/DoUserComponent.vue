<template>
  <div class="table">
    <edit-user-component v-if="user" :user="user"></edit-user-component>
    <add-user-component v-else></add-user-component>
  </div>
</template>


<script>
  import EditUserComponent from './EditUserComponent';
  import AddUserComponent from './AddUserComponent';

  export default {
    components: {
      EditUserComponent,
      AddUserComponent
    },
    props: ['user']
  }

</script>

<style>

</style>
