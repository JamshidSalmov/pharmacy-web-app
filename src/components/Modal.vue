<template>
  <div v-show="show" class="fixedP">
      <div class="box">
          <div class="header d-flex justify-content-between align-items-center w-100 px-3">
                <h4 class="m-0 p-0">Rigestr New User</h4>
                <span><button @click='xcha' class="btn btn-danger px-3 m-0">X</button></span>
            </div>
            <div class="p-4">
                <slot name="modal">
                </slot>
            </div>
      </div>
  </div>
</template>

<script>
export default {
props:{
    show:Boolean,
},
methods: {
    xcha(){
        this.$emit('close')
    }
},
}
</script>

<style>
.header{
    height: 50px;
    background: #eee;
}
.fixedP{
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
}
.box{
    background: rgb(255, 255, 255);
    width: 500px;
    height: 420px;
    overflow: hidden;
    /* overflow-y: scroll; */
}
</style>