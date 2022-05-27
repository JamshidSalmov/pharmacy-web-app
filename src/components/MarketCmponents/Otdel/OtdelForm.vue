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
            <p>Компании</p>
          </div>
          <div class="sellect">
              <select class="w-75 selects form-control" v-model="companyId">
                    <option value="" disabled selected hidden>Выбирать...</option>
                    <option  v-for="(col,index) in companys.rows" :key="index" :value="col.id">{{col.name}}</option>
                </select>
                <small class="text-danger mt-0" style="margin-left:5px; " v-if="$v.companyId.$dirty && !$v.companyId.required">
                Choose any Company.
                </small>
          </div>
       </div>
  </div>
<div class="buttonss">
    <div>
    <button @click="addOtdel" class="btn btn-primary mt-2">Добавить и продолжит</button>
    <button class="btn btn-success mt-2" @click="addOtdel">Добавить</button>
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
    companyId: {
      required,
    },
  },
  data() {
     return {
      name: '',
      companyId: '',
      id: this.$route.params.id
     }
 },
  computed: {
      ...mapGetters(['companys']),
     
},
 mounted(){
     this.fetchOtdel();
     this.fetchCompany();

    },
 methods: {
   ...mapActions(['fetchOtdel','fetchCompany']),
     ...mapMutations(['AddOtdel']),
         async save_Otdel(){
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
              'company_id':this.companyId,
              "id": this.id,
            })
          };
        try{
          const response = await fetch(this.$store.state.hostname+'/PosDepartments', requestOptions);
          const data = await response.json();
          if(response.status==200 || response.status==201){
              return true
          }
            this.fetchOtdel();
              this.name ="";
          
        }
        catch{
             console.log('Conniction Error')
        }
      },
       async addOtdel()
        {
        if(await this.save_Otdel())
            {
            this.$router.push("/otdel");
            }

        },
    },
    async created(){
        if(this.id != 0){
            const response = await fetch(this.$store.state.hostname+'/PosDepartments/'+ this.id);
            const data = await response.json();
            this.name = data.name; 
            this.companyId=data.company_id;
            console.log('Jamshid Qara thisss',data)
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