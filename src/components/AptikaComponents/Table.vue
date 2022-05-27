<template>
  <div class="container">
    <div class="row roww">
      <div class="col-12 col- mt-3">
        <table>
          <thead>
            <tr class="main-row">
              <th>Id</th>
              <th v-for="(col, index) in options.columns" :key="index">
                {{ col }}
              </th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rows, index) in options.rows" :key="index">
              <td>{{ index + 1 }}</td>
              <td v-for="(col, index) in options.columns" :key="index">
                {{ rows[col] }}
              </td>
              <td><button  @click="$emit('remove',rows,index)" class="btn btn-danger mx-2">Delet</button><button :rows="rows"  @click="$emit('change',rows,index)" class="btn btn-primary">Change</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed :{
      ...mapState(['options']),
    },
}

</script>

<style scoped>
.roww{
    align-items: center;
    justify-content: center;
    display: flex;
}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}
td,
th {
  border: 1px solid black;
  font-size: 14px;
  padding: 5px;
}
th {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
}
table .main-row{
    background: #dddddd;
}
table tr:nth-child(even) {
  background-color: #dddddd;
}
.btn{
    padding: 0 5px;
}
</style>