<template>
  <div class="main" style='overflow-y: scroll; height:calc(100vh - 60px)'>
    <div class="header-top">
        <div class="text1">
           <router-link class="ml-2 router" to="/user"><mdb-icon class="ico" icon="angle-left" />Добавить авторизация</router-link>
        </div>
    </div>
    <secure-form />
  </div>
</template>
<script>
import SecureForm from '@/components/MarketCmponents/Secure/SecureForm.vue'
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbIcon } from 'mdbvue';
export default {
components: {
    SecureForm,
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