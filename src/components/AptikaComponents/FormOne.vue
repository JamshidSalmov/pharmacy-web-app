<template>
<div>
    <div class="mx-auto mt-3 w-80">
      <form>
        <my-input size="md" type="text" class="mt-4  form-control" ph="Your Name..." v-model="newHavola.name"/>
        <my-input size="md" type="text" class="mt-4  form-control" ph="Your Phone..." v-model="newHavola.phone"/>
        <my-input size="md" type="text" class="mt-4  form-control" ph="Your Email..." v-model="newHavola.email"/>
        <my-input size="md" type="text" class="mt-4  form-control" ph="Your Address..." v-model="newHavola.address"/>
        <button class="btn btn-success mt-2" @click="addUser">Add User</button>
      </form>
    </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
import MyInput from '@/components/Ui/Input.vue'
export default {
 components: {
     MyInput,
 },
  data() {
     return {
      newHavola: {
          name:'',
          phone:'',
          email:'',
          address:''
      }
     }
 },
  props:{
    sendRows: {
      type:Object,
       default(){
       return {
          name: "",
          phone: null,
          email: "",
          address: "",
      }
  }
 }
  },
  watch: {
    sendRows(){
      this.newHavola.name = this.sendRows.name
      this.newHavola.phone = this.sendRows.phone
      this.newHavola.email = this.sendRows.email
      this.newHavola.address =this.sendRows.address
    }
  },



 methods: {
     ...mapMutations(['AddUser']),
     addUser(e){
         e.preventDefault();
         this.AddUser(this.newHavola);
         this.newHavola={};
         this.$emit('openClose')
     },
     clears(){
         this.newHavola={};
     }
 },
}
</script>

<style>

</style>