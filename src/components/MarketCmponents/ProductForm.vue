<template>
<div  style= 'height:calc(93vh)'>
  <!-- header-top -->
    <div class="AllName" style= 'height:calc(11vh)' >
      <div class="text1" style= 'height:calc(6vh)'>
        <div class="text" >
            <p>Название</p>
        </div>
        <div class="main_top">
          <div class="new_text">
            <p>{{allName}}</p>
          </div>
        </div>
      </div>
      <div class="text1" style= 'height:calc(5vh)'>
        <div class="text" >
            
        </div>
        <div class="main_top">
          <div class="new_text" style="border:none;">
             <p>Будит печатся на чеке</p>
          </div>
        </div>
      </div>
    </div>
  <!-- header-form1 -->
    <div class="AllName" style= 'height:calc(30vh)' >
      <div class="text1" style= 'height:calc(30vh)'>
        <div class="text_form1" >
            <p>Продукт</p>
        </div>
        <div class="main_top">
          <form class="new_form1">
            <div class="full">
              <div class="full-box">
                 <p>Торговое название</p> 
              </div>
              <div class="full-box">
                 <my-input size="md" type="text" class=" form-control"  @input="allNames" ph="" v-model="name"/>
              </div>
              <div class="full-box razmer">
                 <div class="w-50">
                    <p>Размер</p>
                 </div>
                 <div class="w-50" style="padding-left:10px">
                    <p>Размер</p>
                 </div>
              </div>
              <div class="full-box">
                 <div class="w-50" style="padding-right:10px">
                   <my-input size="md" type="text" class="form-control" @input="allNames"  ph="XL" v-model="Xl"/> 
                 </div>
                 <div class="w-50" style="padding-left:10px">
                   <my-input size="md" type="text" class="form-control" @input="allNames" ph="40" v-model="razmer"/>
                 </div>
              </div>
              <div class="full-box">
                 <div class="w-50">
                    <p>Кол-во-товари</p>
                 </div>
                 <div class="w-50" style="padding-left:10px">
                    <p>Едю изм</p>
                 </div>
              </div>
              <div class="full-box">
                 <div class="w-50" style="padding-right:10px">
                   <my-input size="md" type="number" class="form-control" ph="1" v-model="soni"/>
                 </div>
                 <div class="w-50" style="padding-left:10px">
                  <select name="cars" class="form-control" style="max-height:28px; box-sizing:border-box;" v-model="measuresId">
                    <option value="" disabled selected hidden>Выбирать...</option>
                    <option v-for="(eg,index) in measures.rows" :key="index" :value="eg.id">{{eg.name}}</option>
                  </select>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  <!-- choose katigory -->
    <div class="AllName" style= 'height:calc(10vh)' >
      <div class="text1" style= 'height:calc(10vh)'>
        <div class="text" >
            <p>Категория</p>
        </div>
        <div class="main_top">
          <div class="new_text" style="border:none">
            <select name="cars" class="form-control katigory" style="max-height:30px;" v-model="categoryId">
              <option value="" disabled selected hidden>Выбирать...</option>
              <option v-for="(ka,index) in catigory.rows" :key="index" :value="ka.id"  > {{ka.name}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  <!-- single-form -->
    <div class="AllName" style= 'height:calc(25vh)' >
      <div class="text1" style= 'height:calc(25vh)'>
        <div class="text_form1" >
            <p>Цена и штрихкод</p>
        </div>
        <div class="main_top">
          <form class="new_form1">
            <div class="form2">
              <div class="full-box">
                 <p><input type="radio" ><span style="color:black; font-weight:600;">Single</span>(Один вид товара)</p>
              </div>
              <div class="full-box">
                 <div class="w-50">
                    <p>Штрихкод</p>
                 </div>
                 <div class="w-50" style="padding-left:10px">
                    <p>Код</p>
                 </div>
              </div>
              <div class="full-box ">
                 <div class="w-50" style="padding-right:10px">
                     <my-input size="md" type="text" class="form-control"  ph="ShtrixCode" v-model="ShtrixCode"/>
                 </div>
                 <div class="w-50" style="padding-left:10px">
                     <my-input size="md" type="text" class="form-control"  ph="Code" v-model="code"/>
                 </div>
              </div>
              <div class="saled">
                 <div class="price1" style="">
                   <p>Цина</p>
                 </div>
                 <div class="price1" style="">
                   <p>Процент</p>
                 </div>
                 <div class="price1" style="">
                   <p>Продается</p>
                 </div>
              </div>
              <div class="full-box">
                 <div class="price1 price2">
                   <div class="input_sina">
                     <my-input size="md" type="number" class="form-control"  ph="" v-model="buyed_price"/>
                   </div>
                   <div class="input_sina1">
                     <p>+</p>
                   </div>
                 </div>
                 <div class="price1 price2" style="">
                    <div class="input_sina">
                     <my-input size="md" @input="Persent" type="number" class="form-control"  ph="" v-model="percentage"/>
                   </div>
                   <div class="input_sina1">
                     <p> % = </p>
                   </div>
                 </div>
                 <div class="price1 price2" style="">
                   <my-input size="md" @input="PersentageFunc" type="number" class="form-control"  ph="" v-model="total"/>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  <!-- Min kol vo -->
    <div class="AllName border1" style= 'height:calc(8vh)' >
      <div class="text1" style= 'height:calc(8vh)'>
        <div class="text" >
            <p>Мин, кол-во</p>
        </div>
        <div class="main_top">
          <div class="new_text" style="border:none">
            <my-input size="md" type="number" class="form-control"  ph="Code" v-model="collwo"/>
          </div>
        </div>
      </div>
    </div>
  <!-- buttons=== -->
    <div class="buttonss" style= 'height:calc(9vh)'>
      <div>
        <button @click="addProduct" class="btn btn-primary mt-2">Добавить и продолжит</button>
        <router-link style="color:white" to="/tableone"><button class="btn btn-success mt-2" @click="addProduct"><mdb-icon class="ico" icon="angle-left" />Добавить</button></router-link>
      </div>
    </div>








</div>
</template>

<script>
    import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,mdbIcon } from 'mdbvue';
    import {mapMutations, mapGetters, mapActions} from 'vuex'
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
      Xl: '',
      razmer: '',
      ShtrixCode: '',
      soni: null,
      code: '',
      buyed_price: null,
      percentage: null,
      total: null,
      categoryId: '',
      measuresId: '',
      allName: '',
      collwo: null,
      id: this.$route.params.id
     }
 },
computed: {
      ...mapGetters(['measures','catigory']),
     
},
 mounted(){
     this.fetchProduct();
      this.fetchMeasurment();
      this.fetchCatigory();
    },
 methods: {
        ...mapActions(['fetchProduct','fetchMeasurment','fetchCatigory']),
        ...mapMutations(['AddProduct']),
        async addProduct(){
          let barcodeList=[
            {
              id: 0,
              barcode:this.ShtrixCode,
            }
          ];
          console.log('barcodeList', barcodeList)
        const requestProduct ={
         method : "POST",
         headers: { "Content-Type" : "application/json" },
           body: JSON.stringify({
             "name":this.name,
             "id": this.id,
             "dozirofka": this.Xl,
             "note": this.razmer,
             "barcode": this.ShtrixCode,
             "contains_number_in_pack" : this.soni,
             "code": this.code,
             'buyed_price': this.buyed_price,
             'percentage': this.percentage,
             "subProductList": [
               {
                //  name: this.name,
                 price: this.total,
                 buyed_price: this.buyed_price,
                 barcodeList: barcodeList,
                 percentage: this.percentage,
                 id:0,
               }
             ],
             'price': this.total,
             'global_name': this.allName,
             'manifacturer_name': this.collwo,
            "unitmeasurment_id": this.measuresId,
            "category_id": this.categoryId
           })
         }
         const responsess = await fetch(this.$store.state.hostname +'/PosProducts',requestProduct);
         const data1 = await responsess.json();

         this.fetchProduct();

       },
       allNames(){
         this.allName=(this.name +' '+ ' ' + this.Xl +' ' + 'N' + this.razmer)
       },
       Persent(){
         console.log('Persent',this.percentage)
         this.total = ((parseFloat(this.buyed_price)*parseFloat(this.percentage)/100)+parseFloat(this.buyed_price));
       },
       PersentageFunc(){
           this.percentage=(100*parseFloat(this.total)/parseFloat(this.buyed_price)-100);
       },

     },
      async created(){
      if(this.id != 0){
          const responsess = await fetch(this.$store.state.hostname+'/PosProducts/' + this.id);
          const data = await responsess.json();
          console.log('salom',data)
          this.name=data.name
          this.Xl=data.dozirofka
          this.razmer=data.note
          this.ShtrixCode=data.product_reg_code
          this.code=data.code,
          this.buyed_price=parseInt(data.buyed_price),
          this.percentage=parseInt(data.percentage),
          this.total=parseInt(data.price),
          this.measuresId=data.measurment.id
          this.soni=data.contains_number_in_pack
          this.allName=data.global_name
          this.collwo=data.manifacturer_name
          this.categoryId=data.category_id
        console.log('tuliq data1',data)
        console.log('name=',data.name)
        console.log('time=',data.dozirofka)
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
/* ====All Name style Start==== */
.AllNamee{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.text1{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.text{
  width: 20%;
  text-align: start;
  padding-left: 20px;
}
.text_form1{
  width: 20%;
  text-align: start;
  padding-left: 20px;
}
.main_top{
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}
.text_form1{
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
}
.new_text{
 width: 65%;
 border: 1px solid #f5f2f2;
 border-radius: 5px;
}
.katigory{
  width: 80%;
}
.new_form1{
  width: 65%;
  height: 100%;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
}
.new_form1 .full{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.form2{
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.form2 .full-box{
  display: flex;
  align-items: center;
  justify-content: start;
  height: 20%;
  width: 100%;
  text-align: start;
}
.saled{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 100%;
  text-align: start;
}
.price1{
  width: 30%;
}
.price2{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.input_sina{
  width: 80%;
}
.input_sina1{
  width: 20%;
}
.input_sina1 p{
  padding: 0;
  text-align: center;
}
.price1 p{
  padding-left: 5px;
}
.full-box{
  display: flex;
  align-items: center;
  justify-content: start;
  height: 16%;
  width: 100%;
  text-align: start;
}
.full-box p{
  padding-left: 5px;
}
.new_text p{
  text-align: start;
  font-size: 16px;
  margin: 0;
  padding: 0;
  padding-left: 3px;
  height: 30px;
  line-height: 30px;
}
.border1{
  border-bottom: 1px solid blue;
}
/* ====All Name style end==== */

.buttonss{
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
}
.buttonss .btn{
  margin-right: 30px;
  padding: 3px 15px;
  font-size: 12px;

}
.form-control{
  padding-left: 5px;
}
</style>