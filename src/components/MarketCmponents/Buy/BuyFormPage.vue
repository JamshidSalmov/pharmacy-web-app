<template>
  <div class="main" style='overflow-y: scroll;'>
    <div class="header-top">
        <div class="text1">
           <router-link class="ml-2 router" to="/buy"><mdb-icon class="ico" icon="angle-left" />Добавить покупка</router-link>
        </div>

    </div>
    <buy-form />
  </div>
</template>
<script>
import BuyForm from '@/components/MarketCmponents/Buy/BuyForm.vue'
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbIcon } from 'mdbvue';
export default {
components: {
    BuyForm,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
}
}
</script>

<style scoped>
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
.main{
    height: 100vh;
    background: #fff;
}

</style>