<template>
  <div class="container-flued">
    <div class="row m-0">
      <div class="col-12 m-0">
        <table>
          <thead>
            <tr class="main-row">
              <th class="numbers">N</th>
              <th v-for="(col,index) in users.columns" :key="index" >{{col}}</th>  
              <th class="buttonss">Действия</th>
            </tr> 
          </thead>
          <tbody>
            <tr v-for="(row,index) in users.rows" :key="index">
                <td>{{index+1}}</td>
                <td v-for="(col,index) in users.columns" :key="index">{{row[col]}}</td>
                <td>
                  <div class="buttons">
                    <button  class="btns"> <router-link class="ml-2 router" :to="'/secure/'+ row.id"><mdb-icon class="lock" icon="lock" /></router-link></button>
                    <button  class="btns"><router-link class="ml-2 router" :to="'/userpagee/' + row.id"><mdb-icon class="pincil" icon="pencil-alt" /></router-link></button>
                    <button class="btns" @click="deletUser(row.id,index)"><mdb-icon class="trash" icon="trash" /></button>
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
import { mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
  },
  
    computed: {
        ...mapGetters(['users']),
    },
    methods: {
      // ...mapActions(['fetchMeasurment']),
        ...mapMutations(['deleteUsers']),
        async deletUser(id,index){
            const requestOptions = {
              method: "delete",
            };
            const res = await fetch(this.$store.state.hostname + '/PosUsers/' + id,requestOptions)
            const data = await res.json();
            console.log(data)
            if(res.status == 200 || res.status == 201){
              this.$refs.message.success('Delete_successfully')
            }
            this.deleteUsers(index);
        },
    },
}
</script>

<style scoped>
.trash{
color: red;
}
.pincil{
color: green;
}
.lock{
    color:rgb(255, 196, 0)
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
  justify-content: center;
  flex-wrap: wrap;
}
.buttonss{
  text-align: center;
  width: 20%;
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
  padding: 5px 10px;
  text-align: start;
}
td{
   font-size: 13px;
  font-weight: 400;
  color: rgb(124, 120, 120);
  padding: 5px 10px;
   text-align: start;
  

}
table .main-row{
    background: #f5f2f2;
}
table tr:nth-child(even) {
  background: #f5f2f2;
}

</style>