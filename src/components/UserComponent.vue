<template>
    <tr>
      <td>{{ user.firstname }}</td>
      <td>{{ user.lastname }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.email }}</td>
      <td>
        <span>
          <button v-on:click="editUser" type="button" class="btn btn-info">Edit</button>
        </span>
      </td>
      <td>
        <span>
          <button v-on:click="removeUser" type="button" name="button" class="btn btn-danger">Delete</button>
        </span>
      </td>
    </tr>
</template>

<script>
 export default {
   props: ['user', 'index'],
   methods: {
     removeUser: function(){
       this.$emit("rmv", this.index)
     },
     editUser: function(){
       this.$emit("edit", this.user);
       this.$router.push('/do')
     }
   }
 }
</script>

<style scoped>
  .table {
    max-width: 760px;
    margin: 0 auto;
  }
  .table-bordered {
    width: 100%;
  }
</style>
