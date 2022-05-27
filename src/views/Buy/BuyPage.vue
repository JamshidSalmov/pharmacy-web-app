<template>
  <div
    class="home TableView w-100"
    style="overflow-y: scroll;"
  >
    <div class="header-top">
      <h3>Покупка</h3>
      <router-link class="ml-2 router" to="/buyform/0">
      <button class="btnAdd btn btn-success">
        <mdb-icon class="plus" icon="plus" />Добавить
      </button>
      </router-link>
    </div>
    <div class="header-two">
      <div class="option">
        <mdb-dropdown class="drop">
          <mdb-dropdown-toggle class="dropp" slot="toggle">{{
            value
          }}</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item
              v-for="(count, i) in counts"
              :key="i"
              @click.native="pickSubject(count)"
              class="mb-item"
              >{{ count }}</mdb-dropdown-item
            >
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </div>
      <div class="seting">
        <div class="settings">
          <a href="#"><mdb-icon class="mr-1" icon="file-export" />Экспорт</a>
        </div>
        <div class="settings set">
          <a href="#"
            ><mdb-icon class="mr-1" icon="th-list" />Настройка колонок</a
          >
        </div>
      </div>
    </div>
    <!-- ============================= -->
    <div class="table">
      <buy-table />
    </div>
    <!-- ============================= -->

    <div class="header-twotwo">
      <div class="option">
        <mdb-dropdown>
          <mdb-dropdown-toggle class="dropps" slot="toggle">{{
            vall
          }}</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item
              v-for="(sell, i) in sellects"
              :key="i"
              class="mb-item"
              @click.native="sellfunc(sell)"
              >{{ sell }}</mdb-dropdown-item
            >
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </div>
      <div class="setings">
        <div class="page">
          <p>Первый</p>
        </div>
        <div class="page">
          <mdb-pagination>
            <mdb-page-nav prev disabled></mdb-page-nav>
            <mdb-page-item class="pagenation"><span>1</span></mdb-page-item>
            <mdb-page-nav next></mdb-page-nav>
          </mdb-pagination>
        </div>
        <div class="page page1">
          <p>Последний</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbIcon,
} from "mdbvue";
import BuyTable from "@/components/MarketCmponents/Buy/BuyTable.vue";
import { mdbPagination, mdbPageItem, mdbPageNav } from "mdbvue";
import { mapActions } from "vuex";

export default {
  components: {
    BuyTable,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
  },
  data() {
    return {
      value: "5",
      vall: "из 1 до 5",
      counts: ["5", "10", "15", "20"],
      sellects: ["из 1 до 5", "из 5 до 10", "из 10 до 15", "из 15 до 20"],
    };
  },
  async mounted() {
    await this.fetchBuy();
  },
  methods: {
    ...mapActions(["fetchBuy"]),
    pickSubject(count) {
      this.value = count;
    },
    sellfunc(sell) {
      this.vall = sell;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.router {
  color: #fff;
  font-size: 14px;
  padding: 0;
  margin: 0;

}
.drop {
  width: 160px;
}
.pagenation {
  background: blue;
  border-radius: 2px;
}
.pagenation span {
  color: #fff;
  font-weight: 600;
}
.plus {
  font-size: 10px;
  padding-right: 5px;
}
.dropp {
  width: 160px;
  font-size: 16px;
  text-align: end;
  padding: 2px 10px;
  color: rgb(124, 120, 120);
}
.dropps {
  width: 160px;
  font-size: 16px;
  text-align: center;
  padding: 2px 10px;
  color: rgb(124, 120, 120);
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  padding-left: 5px;
}
.mb-item {
  padding-left: 10px;
  color: rgb(124, 120, 120);
}
.header-top h3 {
  color: rgb(70, 70, 202);
  margin: 0 20px;
  margin-left: 10px;
  font-size: 18px;
  padding: 10px 0;
}
.header-two {
  border-top: 1px solid #f5f2f2;
  border-bottom: 1px solid #f5f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.header-twotwo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.option {
  padding: 0 10px;
}
.seting {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.setings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
.page {
  margin: 6px;
}
.page p {
  color: rgb(124, 120, 120);
  font-size: 14px;
}
.page1 {
  margin-right: 40px;
}

.settings a {
  text-decoration: none;
  color: rgb(70, 70, 202);
  font-size: 16px;
  padding: 5px 20px;
  margin-right: 15px;
}

.home::-webkit-scrollbar {
  display: none;
}
.home{
  height: 100vh;
}
.btnAdd {
  color: #fff;
  padding: 5px 15px;
  margin: 0 5px;
  font-size: 12px;
  font-weight: 300 !important;
}
</style>
