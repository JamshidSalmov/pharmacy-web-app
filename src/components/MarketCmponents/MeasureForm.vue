<template>
<div>
  <div class="container-flued border-bot" >
    <div class="row m-0">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2">
        <div class="paragrif">
          <p>Едю изм</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 name">
        <div class="box">
          <div class="name1">
             <my-input size="md" type="text" class="mt-1  form-control" ph="" v-model="name"/>
          </div>
          <div class="para">
            <p>Будит печатся на чеке</p>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="buttonss">
    <div>
    <button @click="addMeasure" class="btn btn-primary mt-2">Добавить и продолжит</button>
    <button class="btn btn-success mt-2" @click="addMeasure"><router-link style="color:white" to="/measure"><mdb-icon class="ico" icon="angle-left" />Добавить</router-link></button>
    </div>
</div>
  
</div>
</template>

<script>
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
import {mapMutations, mapActions} from 'vuex'
import MyInput from '@/components/Ui/Input.vue'
export default {
 components: {
     MyInput,
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

// Change qilish=======
async created(){
      if(this.id != 0){
          const response = await fetch(this.$store.state.hostname +'/PosProductUnitMeasurments/' + this.id);
          const data = await response.json();
        this.name = data.name 
        console.log('tuliq data',data)
        console.log('name=',data.name)
        console.log('time=',data.created_date_time)
      }
    },
// Change qilish=======
 methods: {
   ...mapActions(['fetchMeasurment']),
     ...mapMutations(['addMeasure']),
         async addMeasure(){
          const requestOptions = {
            method : "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
              "name" : this.name,
              "id": this.id
            })
          }
          const response = await fetch(this.$store.state.hostname +'/PosProductUnitMeasurments', requestOptions);
          const data = await response.json();
          console.log(data)
          this.fetchMeasurment();
          this.name ="";
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
.buttonss{
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  margin: 40px;
}
.buttonss .btn{
  margin-right: 30px;
  padding: 5px 10px;
}
.border-bot{
  border-bottom: 1px solid blue;
}
.paragrif{
  margin-top: 15px;
  padding-top: 15px;
}
.paragrif p{
  font-size: 16px;
}
/* salom */
.name{
  margin-top: 15px;
}
/* salom */

.box{
  width: 75%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
.name1{
  width: 100%;
  text-align: start;
  border-radius: 3px;
}
.para{
  width: 100%;
 text-align: start;
 margin: 15px;
}
/* salom */
.form-control{
  padding-left: 5px;
}
</style>