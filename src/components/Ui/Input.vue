<template>
   <input :type="type"  :class="{'small': size=='sm', 'medium': size=='md', 'heigh': size=='lg'}"
          :placeholder="ph" :value="value" @input="update($event.target.value)">
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default: 'text'
        },
        ph:{
            type:String,
            default: '...'
        },
        value: [Number, String],
        size: {
            type:String,
            default: 'md'
        },
    },
    methods: {
        update(value){
          this.$emit('input',value)
        }
    },
}
</script>
<style lang="scss">
    .small{
        height: 20px;
    }
    .medium{
        height: 30px;
    }
    .heigh{
        height: 40px;
   
    }
</style>