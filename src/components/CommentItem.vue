<template>
  <div class="hello comments">
      <div>
        <!-- <span>{{index}}</span> -->
        <p><b>Name:</b>{{ item.name }}</p>
        <p><b>Email</b>{{ item.email }}</p>
        <p><b>Content:</b>{{ item.body }}</p>
        <p><b>Address</b>{{item.posted}}</p>
      </div>
      <div>
        <button class="btn btn-danger" @click="deleteRow(index)">Delete</button>
        <button class="btn btn-success" @click="changeRow(index)">Change</button>
<!--  -->
      </div>
  </div>
</template>

<script>
export default {
 props: {
   item: {
       type: Object,
       required:true
   },
   index: {
     type:Number
   }
 },
 methods: {
   deleteRow(i){
     this.$emit('getIndex', i)
     console.log(i)
   },
   changeRow(i){
     this.$emit('changeIndex', i)
     console.log(i)
     this.$emit('Changecontent',i)
   }
 },
 
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .comments {
      border: 4px solid gray;
      margin: 10px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      }

</style>