<template>
  <div id="app">
    <router-view :user="user" v-on:edit="editUser" v-on:clearEditData="clearEditData"></router-view>
  </div>
</template>

<script>
  import UsersMyLocalList from './UsersMyLocalList.js'


  export default {
    data(){
      return {
        user: ''
      }
    },
    components: {
      UsersMyLocalList
    },
    methods: {
      editUser: function(user){
        this.user = user;
      },
      clearEditData: function(){
        this.user = ''
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin: 20px auto;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.1);
  padding: 30px 0;
}
</style>


















<!--
<template>
  <div id="app">
    <users-component v-on:edit="editUser"></users-component>
    <edit-user-component :user="user"></edit-user-component>
  </div>
</template>

<script>
  import UsersMyLocalList from './UsersMyLocalList.js'
  import UsersComponent from './components/UsersComponent';
  import EditUserComponent from './components/EditUserComponent';

  export default {
    data(){
      return {
        user: ''
      }
    },
    components: {
      UsersMyLocalList,
      UsersComponent,
      EditUserComponent
    },
    methods: {
      editUser: function(user){
        this.user = user;
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
