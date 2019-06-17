<template>
  <div class="container">
    <h3>Please, add new user</h3>
    <table class="table-bordered">
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Email</th>
        <th></th>
      </tr>
      <tr>
        <td><input v-model="newUser.firstname" placeholder="firstname"></td>
        <td><input v-model="newUser.lastname" placeholder="lastname"></td>
        <td><input v-model="newUser.phone" placeholder="phone"></td>
        <td><input v-model="newUser.email" placeholder="email"></td>
        <td><button class="btn btn-success" v-on:click="getInput">Add User</button></td>
      </tr>
    </table>
    <h3>Or add JSON</h3>
    <input v-model="jsonUser" placeholder="Please insert JSON">
    <button type="button" v-on:click="addJson" class="btn btn-success">Add</button>
  </div>
</template>

<script>

  import UsersMyLocalList from '../UsersMyLocalList.js'

  export default {
    data(){
      return {
        newUser: {
          firstname: '',
          lastname: '',
          phone: '',
          email: ''
        },
        jsonUser: ''
      }
    },
    computed: {
      users(){
        return this.$store.state.users
      }
    },
    methods: {
      getInput(){
        var firstname = this.newUser.firstname.trim();
        var lastname = this.newUser.lastname.trim();
        var phone = this.newUser.phone.trim();
        var email = this.newUser.email.trim();

        if (firstname && lastname && phone && email){
          this.users.push({
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email
          })
        for (var i in this.newUser){
          this.newUser[i] = ''
        }

        this.$router.push('/')
        }
      },
      addJson() {
        var newUsers = JSON.parse(this.jsonUser);
        Array.prototype.push.apply(this.users, newUsers);
        this.$router.push('/')
      }
    },
    created(){
      this.$store.dispatch('loadUsers', UsersMyLocalList.users)
    }

  }

</script>


<style scoped>
  .table {
    min-width: 760px;
    margin: 0 auto;
  }
  .table-bordered {
    min-width: 100%;
  }
  td input {
    border: hidden;
  }
</style>
