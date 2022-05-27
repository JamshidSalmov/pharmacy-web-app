<template>
<div>
  <div class="container-flued border-bot" >
    <div class="row m-0">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2">
        <div class="paragriff">
          <p>Логин</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 name">
        <div class="box">
          <div class="name1">
             <my-input size="md" type="text" class="mt-1  form-control" ph="" v-model="login"/>
             <small class="text-danger mt-0" style="margin-left:5px; "  v-if="$v.login.$dirty && !$v.login.required">
              Enter Your Login
              </small>
              <small class="text-danger mt-0" style="margin-left:5px; "  v-if="$v.login.$dirty && !$v.login.minLength">
              Login must have at least {{ $v.login.$params.minLength.min }} letters.
              </small>
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
          <p>Пароль</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 imputscenter">
        <div class="box">
          <div class="name1">
             <my-input size="md" :type="passwordFieldType" class="mt-1  form-control" ph="" v-model="password"/>
            <span @click="switchVisble" class="field-icon"><mdb-icon :icon="eyess" /></span>
             <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.password.$dirty && !$v.password.required">
              Enter Your Password
              </small>
              <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.password.$dirty && !$v.password.minLength ">
              Password must have at least {{ $v.password.$params.minLength.min }} semvoll.
              </small>
          </div>

        </div>
      </div>
    </div>
    <div class="row m-0 mt-3">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2 paragrfcenter">
        <div class="paragrif">
          <p>Подтвердите пароль</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 imputscenter">
        <div class="box">
          <div class="name1">
            <my-input size="md" :type="passwordFieldTypeKey" class="mt-1  form-control" ph="" v-model="keys"/>
            <span  @click="switchVisbleKey" class="field-icon"><mdb-icon :icon="eyes" /></span>
            <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.keys.$dirty && !$v.keys.sameAsPassword">
              Passwords must be identical.
            </small>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0 mt-3 ">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2 paragrfcenter">
        <div class="paragrif">
          <p>Компонии</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 imputscenter">
        <div class="box">
          <div class="name1">
              <select class="w-100 selects" v-model="companyId">
                  <option value="" disabled selected hidden>Выбирать...</option>
                  <option  v-for="(col,index) in companys.rows" :key="index" :value="col.id">{{col.name}}</option>
              </select>
              <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.companyId.$dirty && !$v.companyId.required">
                     Choose any Company.
              </small>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 mt-3 mb-5">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2 paragrfcenter">
        <div class="paragrif">
          <p>Тип доступа</p>
        </div>
      </div>
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 imputscenter">
        <div class="box">
          <div class="name1">
              <select class="w-100 selects" v-model="acces_user">
                  <option value="0" disabled selected hidden>Выбирать...</option>
                  <option  v-for="(coll) in katigoryTip" :key="coll.id"  :value="coll.id">
                    {{coll.name}}</option>
              </select>
              <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.acces_user.$dirty && !$v.acces_user.required">
                     Choose Authorization.
              </small>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="buttonss">
    <div>
    <!-- <buttonclass="btn btn-primary mt-2">Добавить и продолжит</buttonclass=> -->
    <button class="btn btn-success mt-2" @click="addSecure">Добавить</button>

    </div>
</div>
<notes ref="message"></notes>
</div>
</template>

<script>
import { required,sameAs,minLength } from 'vuelidate/lib/validators'
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
import { mapGetters, mapActions} from 'vuex'
export default {
 components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
 },
 validations: {
    login: {
      required,
      minLength: minLength(6),
    },
    password: {
      required,
      minLength: minLength(6),
    },
    keys: {
      sameAsPassword: sameAs('password')
    },
    companyId: {
      required
    },
    acces_user: {
      required
    }
  },

  data() {
     return {
         katigoryTip: [
           { id:1, name:'Admin'},
           {id:2,name:'User'},
           {id:3,name:'Deweloper'}
           ],
         login: '',
         password: '',
         keys: '',
         id: this.$route.params.id,
         user_id: '',
        acces_user: 0,
        companyId:'',

        //  ================
         showPass:false,
         passwordFieldType: "password",
         passwordFieldTypeKey: "password",
         eyes: 'eye',
         eyess:'eye',
         opacityy:'hideShow',
         loginn: "hideLogin",
     }
     
 },
 computed: {
      ...mapGetters(['companys']),
     
},
 mounted(){
     this.fetchCompany();
    //  this.fetchUserSecure();
    },

 methods: {
   ...mapActions(['fetchCompany']),
        switchVisble(){
            this.eyess = this.eyess ==='eye' ? 'eye-slash' : 'eye';
            this.passwordFieldType =this.passwordFieldType ==='password' ? 'text' : 'password';
        },
        switchVisbleKey(){
            this.eyes = this.eyes ==='eye' ? 'eye-slash' : 'eye';
            this.passwordFieldTypeKey =this.passwordFieldTypeKey ==='password' ? 'text' : 'password';
        },
//  ...mapActions(['fetchCompany']),
        // =============================== 
    async save_data(){
           if (this.$v.$invalid){
             this.$v.$touch();
               this.$refs.message.warning('please_fill')
             return false;
           }
          // bu passwordni md5 ga uzgartirish==============
           var md5 = require('md5');
          let parol = md5(this.password);
        
          const requestOptions = {
            method : "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
              "id": 0,
              "login" : this.login,
              "password": parol, 
              "password_not_md5":parol,
              'company_id': this.companyId,
              'access_type': this.acces_user,
              "user_id": this.id
            })
          };
          try{
          const response = await fetch(this.$store.state.hostname +'/PosAuthorizations/', requestOptions);
          // const data = await response.json();
            if(response.status == 201 || response.status == 200)
            {
              this.$refs.message.success('Added_successfully')
              
              return true;
            }
          }
          catch{
           console.log('Conniction Error')
          }

        },
        async addSecure()
        {
          if(await this.save_data())
          {
            this.$router.push("/user");
          }

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

 .field-icon {
  float: right;
  margin-top: -25px;
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  z-index: 2;
}
.selects{
    border: none;
  color: rgb(124, 120, 120);
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 3px;
  height: 30px;
}
.background{
    border: 1px solid red;
}
.mb-item {
  padding-left: 10px;
  color: rgb(124, 120, 120);
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
.paraa{
  width: 100%;
 text-align: start;
}
.showHide{
  opacity: 1;
  color: red;
}
.hideShow{
  opacity: 0;
}
.hideLogin{
  opacity: 0;
}
.showLogin{
  opacity: 1;
  color: red;
}
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
.drops{
    height: 30px;
    min-width: 160px

}
</style>