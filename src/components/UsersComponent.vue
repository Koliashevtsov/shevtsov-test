<template>
<div class="table">
  <button type="button" class="btn btn-primary"  v-on:click="clearEditData">Add New User</button>
  <table class="table-bordered">
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    <user-component v-for="(user, index) in users" :user="user" :index="index" :key="index" v-on:rmv="removeUser" v-on:edit="edit">

    </user-component>
  </table>
</div>
</template>

<script>
import UserComponent from './UserComponent.vue'
import UsersMyLocalList from '../UsersMyLocalList.js'

export default {
  data() {
    return {
    }
  },
  computed: {
    users(){
      return this.$store.state.users
    }
  },
  components: {
    UserComponent
  },
  created(){
    // this.$store.commit('loadUsers', UsersMyLocalList.users)
    this.$store.dispatch('loadUsers', UsersMyLocalList.users)
  },
  methods: {
    removeUser: function(index) {
      this.users.splice(index, 1);
    },
    edit: function(user) {
      this.$emit("edit", user)
    },
    clearEditData: function(user){
      this.$emit("clearEditData", user)
      this.$router.push('/do')
    }
  }
}
</script>

<style scoped>
  .table {
    width: 930px;
    margin: 0 auto;
  }
  .table-bordered {
    width: 100%;
  }
  .btn  {
    float: left;
    margin-bottom: 10px;
  }
</style>
