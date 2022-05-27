<template>
  <div class="container-flued mt-3">
    <div class="row m-0">
      <div class="col-12 m-0">
        <table> 
          <thead class="w-100">
            <tr class="main-row">
              <th class="numbers">N</th>
              <th v-for="(col,index) in buying.columns" :key="index" >{{col}}</th>
              <th>Статус заявки</th> 
              <th>Статус заявки</th>
              <th class="buttonss">Действия</th>
            </tr> 
          </thead>
          <tbody class="tbodytd">
            <tr v-for="(row,index) in buying.rows" :key="index">
                <td>{{index+1}}</td>
                <td v-for="(col,index) in buying.columns" :key="index">{{row[col]}}</td>
                <td>
                  <div v-if="row.applyment_status">
                    <button class="btn btn-success btnsss" >true</button>
                  </div>
                  <div v-else>
                    <button class="btn btn-danger btnsss">false</button>
                  </div>
                  </td>
                <td>
                  <div v-if="row.applyment_status == false">
                    <button @click="prinimat(row.id)" style=" padding:2px 10px;  outline:none; border:none; border-radius:5px; font-size:12px;" class="btn btn-success m-0 ">приминять</button>
                  </div>
                  <div v-else>
                    <button @click="otmenet(row.id)" style=" padding:2px 10px;  outline:none; border:none; border-radius:5px; font-size:12px;" class="btn btn-danger m-0 ">Отмина</button>
                  </div>
                </td>
                <td>
                  <div class="buttons w-100">
                    <button  class="btns" >
                      <router-link class="ml-2 router" :to="'/buyform/' + row.id"><mdb-icon class="pincil" icon="pencil-alt" /></router-link></button>
                    <button class="btns" @click="deleteBuy(row.id, index)"><mdb-icon class="trash" icon="trash" /></button>
                  </div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  <notes ref="message"></notes>
  </div>
</template>

<script>
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
import { mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
  },
  data(){
    return{
      show:true,
    }
  },
    computed: {
        ...mapGetters(['buying']),
    },
    methods: {
        // ...mapActions(['fetchMeasurment']),
        ...mapMutations(['DeleteRowBuy']),
        ...mapActions(['fetchBuy']),
        async deleteBuy(id,index){
            const requestOptions = {
              method: "delete",
            };
            const res = await fetch(this.$store.state.hostname +'/PosInvoices/' + id,requestOptions)
            const data = await res.json();
            if(res.status == 200 || res.status == 201){
              console.log('muvafaqiyatli bajarildi')
              this.$refs.message.success('Delete_successfully')
              this.DeleteRowBuy(index);
              console.log(index);
              
            }
        },
        async prinimat(id){
          
          try {
            console.log(id)
            const response = await fetch(this.$store.state.hostname + '/PosInvoices/applyOrDisableBuyedProductListByInvoiceId?invoice_id=' + id + '&apply_status=true');
            const data = await response.json();
             console.log('qarasang qarab quy eh jningdan', data)
             if(response.status ==200 || response.status==201){
                await this.fetchBuy();
             }
             
          }
          catch {
              console.log("Connection error");
          }
        },
        async otmenet(id){
        
         console.log('jamshid qara',id)
         
          try {
            console.log(id)
            const response = await fetch(this.$store.state.hostname + '/PosInvoices/applyOrDisableBuyedProductListByInvoiceId?invoice_id=' + id + '&apply_status=false');
            const data = await response.json();
             if(response.status ==200 || response.status==201){
                await this.fetchBuy();
             }
          }
          catch {
              console.log("Connection error");
          }
        }
    },
}
</script>

<style scoped>
.trash{
color: red;
}
.btnsss{
  font-size: 10px;
  font-weight: 500;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
  padding: 2px 10px;
  border-radius: 10px;
  line-height: 12px;
}
.pincil{
color: green;
}
.falses{
  text-align: start;
}
.falsee{
  background: red;
  padding: 2px 10px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 10px;
}
.buttons{
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
}
.buttonss{
  text-align: center;
  width: 10%;
}
.numbers{
  width: 5%;
}
.buttons .btns{
 margin: 0 5px;
  outline: none;
  border: none;
  background: transparent;

}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}
th{
  font-size: 14px;
  font-weight: 600;
  color: black;
  padding: 5px 5px;
  text-align: start;
}
th:nth-child(1){
  width: 45px;
  text-align: center;
}
th{
  width: 150px;
}

td{
   font-size: 15px;
  font-weight: 400;
  color: rgb(124, 120, 120);
  padding: 5px 10px;
   text-align: start;
}
table .main-row{
    background: #f5f2f2;
    width: 100%;
}
table tr:nth-child(even) {
  background: #f5f2f2;
}
td:first-child{
  text-align: center;
}


</style>