<template>
<div>
  <div class="container-flued border-bot" >
    <div class="grid-wrapper">
        <div class="paragrf">
          <p>Названи</p>
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
        <div class="grid-wrapper">
        <div class="paragrf">
          <p>Отдил</p>
        </div>
        <div class="sellect">
            <select class="w-75 selects form-control" v-model="otdelId">
                  <option value="" disabled selected hidden>Выбирать...</option>
                  <option  v-for="(col,index) in otdels.rows" :key="index" :value="col.id">{{col.name}}</option>
              </select>
              <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.otdelId.$dirty && !$v.otdelId.required">
              Choose any Otdel.
              </small>
        </div>
    </div>
  </div>
<div class="buttonss">
    <div>
    <button @click="addSklad" class="btn btn-primary mt-2">Добавить и продолжит</button>
    <button class="btn btn-success mt-2" @click="addSklad">Добавить</button>
    </div>
</div>
<notes ref="message"></notes>
</div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
import {mapMutations, mapActions,mapGetters} from 'vuex'
export default {
 components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
 },
  validations: {
    otdelId: {
      required,
    },
  },
  data() {
     return {
      name: '',
      otdelId: '',
      id: this.$route.params.id
     }
 },
  computed: {
      ...mapGetters(['otdels']),
     
},
 mounted(){
     this.fetchSklad();
     this.fetchOtdel();
    },
 methods: {
   ...mapActions(['fetchOtdel','fetchSklad']),
     ...mapMutations(['AddSklad']),
         async save_Sklad(){
          if (this.$v.$invalid){
             this.$v.$touch();
               this.$refs.message.error('please_fill')
             return false;
            }
          const requestOptions = {
            method : "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
              "name" : this.name,
              'department_id':this.otdelId,
              "id": this.id,
            })
          };
        try{
          const response = await fetch(this.$store.state.hostname+'/PosSklads', requestOptions);
          const data = await response.json();
          if(response.status==200 || response.status==201){
              return true
          }
            this.fetchSklad();
              this.name ="";
          
        }
        catch{
             console.log('Conniction Error')
        }
      },
       async addSklad()
        {
        if(await this.save_Sklad())
            {
            this.$router.push("/sklad");
            }

        },
    },
    async created(){
        if(this.id != 0){
            const response = await fetch(this.$store.state.hostname+ '/PosSklads/' + this.id);
            const data = await response.json();
            this.name = data.name; 
            this.otdelId=data.department_id;
            console.log('thisss',data)
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