<template>
  <div class="main" style='overflow-y: scroll; height:calc(100vh - 60px)'>
    <div class="header-top">
        <div class="text1">
           <router-link class="ml-2 router" to="/sklad"><mdb-icon class="ico" icon="angle-left" />Добавить Склад</router-link>
        </div>
    </div>
    <sklad-form />
  </div>
</template>
<script>
import SkladForm from '@/components/MarketCmponents/Sklad/SkladForm.vue'
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbIcon } from 'mdbvue';
export default {
components: {
    SkladForm,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
}
}
</script>

<style>
.header-top{
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 10px;
    border-bottom: 1px solid #f5f2f2;
}
.ico{
    margin-right: 8px;
}

</style>