<template>
  <div v-show="closeModal" class="fixedP">
      <div class="box">
          <div class="header d-flex justify-content-between align-items-center w-100 px-3">
                <h4 class="m-0 p-0">Rigestr New User</h4>
                <span><button @click="openClose" class="btn btn-danger px-3 m-0">X</button></span>
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
props: {
    closeModal:Boolean
},
methods: {
    openClose(){
        this.$emit('openClose')
    }
},
}
</script>

<style scoped>


.header{
    height: 50px;
    background: #eee;
}
.fixedP{
    position: fixed;
    top: 0;
    left:10%;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
}
.box{
    background: rgb(255, 255, 255);
    width: 500px;
    height: 500px;
    overflow: hidden;
}
</style>