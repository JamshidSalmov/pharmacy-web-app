<template>
      <select :value="value" @change="changeOption" class="form-control ">
        <option disabled value="teb">Catigory</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
      </select>
</template>

<script>
export default {
   name: "my-select",
   props: {
       value: String,
       options: {
           type: Array,
           default: () =>[],
       }
   },
   methods: {
       changeOption(e){
          this.$emit('input', e.target.value)
       }
   },
}
</script>

<style>

</style>