<template>
<div>
  <div class="container-flued border-bot" >
    <div class="grid-wrapper">
        <div class="paragrf">
          <p>Компании Названи</p>
        </div>
        <div>
            <my-input size="md" type="text" class="inputs w-75 form-control" ph="" v-model="name"/>
        </div>
    </div>
    <div class="grid-wrapper">
      <div>
         
      </div>
      <div class="paragrff">
         <p>Будит печатся на чеке</p>
      </div>
    </div>
  </div>
<div class="buttonss">
    <div>
    <button @click="addCompany" class="btn btn-primary mt-2">Добавить и продолжит</button>
    <button class="btn btn-success mt-2" @click="addCompany"><router-link style="color:white" to="/company"><mdb-icon class="ico" icon="angle-left" />Добавить</router-link></button>
    </div>
</div>
</div>
</template>
<script>
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
import {mapMutations, mapActions} from 'vuex'
export default {
 components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
 },
  data() {
     return {
      name: '',
      id: this.$route.params.id
     }
 },


 methods: {
   ...mapActions(['fetchCompany']),
     ...mapMutations(['AddCompany']),
         async addCompany(){
          const requestOptions = {
            method : "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
              "name" : this.name,
              "id": this.id
            })
          }
          const response = await fetch(this.$store.state.hostname +'/PosCompanies', requestOptions);
          const data = await response.json();
          console.log('sALOM',data)
          this.fetchCompany();
          this.name ="";
        },
 },
 async created(){
      if(this.id != 0){
          const response = await fetch(this.$store.state.hostname + '/PosCompanies/' + this.id);
          const data = await response.json();
        this.name = data.name; 
        console.log(data)
      }
    },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.buttonss{
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  margin: 40px;
}
.grid-wrapper{
      display:grid;
      padding: 10px 20px 10px 20px;
      grid-template-columns: 2fr 8fr;
      grid-gap: 20px 20px;
  }
  .paragrf{
    display: inline-grid;
    justify-self: center;
    align-self: center;
  }
    .paragrff{
    display: inline-grid;
    justify-self: start;
    align-self: center;
    padding-left: 5px;
  }
  .inputs{
    margin: 0;
    padding-left: 5px;
    height: 35px;
  }
.buttonss .btn{
  margin-right: 30px;
  padding: 5px 10px;
}
.border-bot{
  border-bottom: 1px solid blue;
}
.form-control{
  padding-left: 5px;
}
</style>