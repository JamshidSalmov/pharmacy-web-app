<template>
<div>
  <div class="container-flued border-bot" >
    <div class="row m-0">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2">
        <div class="paragriff">
          <p>Пользоватиль</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 name">
        <div class="box">
          <div class="name1">
             <my-input size="md" type="text" class="mt-1  form-control" ph="" v-model="fullname"/>
          </div>
          <div class="para">
            <p>Будит печатся на чеке</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 mt-3">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2 paragrfcenter">
        <div class="paragrif">
          <p>Телефон</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 imputscenter">
        <div class="box">
          <div class="name1">
             <my-input size="md" type="text" class="mt-1  form-control" ph="" v-model="phone"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 mt-3 mb-5">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2 paragrfcenter">
        <div class="paragrif">
          <p>Адрес</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 imputscenter">
        <div class="box">
          <div class="name1">
             <my-input size="md" type="text" class="mt-1  form-control" ph="" v-model="address"/>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="buttonss">
    <div>
    <button @click="addUser" class="btn btn-primary mt-2">Добавить и продолжит</button>
    <button class="btn btn-success mt-2" @click="addUser">Добавить</button>
    </div>
</div>
</div>
</template>

<script>
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
import {mapActions} from 'vuex'
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
      fullname: '',
      phone: '',
      address: '',
      id: this.$route.params.id
     }
 },


// Change qilish=======
 methods: {
   ...mapActions(['fetchUser']),
         async save_user(){
          const requestOptions = {
            method : "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
              "fio" : this.fullname,
              "id": this.id,
              "phone_number": this.phone, 
              "address": this.address
            })
          };
          try{
          const response = await fetch(this.$store.state.hostname +'/PosUsers', requestOptions);
          const data = await response.json();
          console.log(data)
          if(response.status==200 ||response.status==201){
            return true
          }
          this.fetchUser();
          this.fullname ="";
          this.address= "";
          this.phone ="";
          }
          catch{
            console.log('Conniction Error')
          }
        },
      async addUser(){
       if(await this.save_user()){
      this.$router.push('/user');
      }
   },
   },
   async created(){
      if(this.id != 0){
          const response = await fetch(this.$store.state.hostname +'/PosUsers/' + this.id);
          const data = await response.json();
        this.fullname = data.fio
        this.phone =data.phone_number
        this.address=data.address
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
.buttonss .btn{
  margin-right: 30px;
  padding: 5px 10px;
}
.border-bot{
  border-bottom: 1px solid blue;
}

.paragrif p{
  font-size: 16px;
}
.name{
  margin-top: 15px;
}

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
.paragrfcenter{
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputscenter{
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputscenter .form-control{
    margin: 0;
    padding-left: 5px;
}
.paragriff{
    margin-top: 20px;
}
</style>