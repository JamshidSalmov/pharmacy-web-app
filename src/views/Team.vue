<template>
  <div class="header" style='height:calc(100vh - 60px)'>
     <div class="box">
      <div class="imgs">
        <img :class="gender" v-bind:src="picture" v-bind:alt="firstName">
      </div>
      <h1 class="my-1">{{firstName}} {{lastName}}</h1>
      <p class="my-1 mb-2">{{email}}</p>
      <button :class="gender" v-on:click="getUser()">Get Random User</button>
     </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    firstName: "John",
    lastName: 'Doe',
    email: 'doe@gmail.com',
    gender: 'male',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
  }
},
methods: {
   async getUser(){
   const res = await fetch('https://randomuser.me/api');
   const { results} = await res.json();
   console.log(results)
    this.firstName=results[0].name.first,
    this.lastName=results[0].name.last,
    this.email=results[0].email,
    this.gender=results[0].gender,
    this.picture=results[0].picture.large;
  },
},
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header{
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #0D6EFD;
  border-top: 2px solid grey;
}
.box{
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
}
.imgs{
  width: 250px;
  height: 250px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
}
.imgs img{
 width: 250px;
 height: 250px;
 border-radius: 50%;
 object-fit: cover;
 margin-bottom: 1rem;
}
.male{
  border-color: steelblue;
  background: steelblue;
  border: 3px solid steelblue;
}
.female{
  border-color: pink;
  background: pink;
  color: #333;
  border: 3px solid pink;
}
</style>