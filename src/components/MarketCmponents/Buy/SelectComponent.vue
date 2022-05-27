<template>
   <div>
        <div class="boxx" @click="showHide(!show_title)">
            <my-input  size="md" type="text" class="inputs form-control w-100" ph="" v-model="collName"/>
        </div>
        <div v-if="show_title" class="box" >
            <p @click="select(col,index)" class="w-100" v-for="(col,index) in  filteredList" :key="index">{{col.name}}</p>
        </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            show_title:false,
            collName: this.product_name,
        }
    },
    props:{
        option: {
        type:Array,

        },
        index: Number,
        product_name: String,
    },
    watch:{
        product_name(){
            console.log('dsadas')
            this.collName = this.product_name;
        }
    },
    computed: {
      filteredList() {
          if(this.collName){
            return this.option.filter(post => {
            return post.name.toLowerCase().includes(this.collName.toLowerCase())
            })
          }
          else{
              return this.option;   
          }
       },
    },
    
    mounted() {
      this.show_title = false;
      console.log(this.show_title)
    },
    methods: {
        showHide(show){
        this.show_title = show;
        console.log(this.show_title)
          
        },
        select(col,index){
            this.$emit('productId',this.index,col)
            this.collName=col.name
            this.show_title = false;
            console.log(index)
        },
    
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.boxx{
    position: relative;
}
.box{
    position: absolute;
    border: 2px solid gray;
    min-width: 240px;
}
 p{
     border-bottom: 1px solid gray;
     width: 100%;
     padding-left: 5px;
     color: gray;
     font-size: 16px;
 }
 p:last-child{
     border: none;
 }
</style>