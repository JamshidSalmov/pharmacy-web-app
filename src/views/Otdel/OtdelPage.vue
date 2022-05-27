<template>
  <div
    class="home  w-100"
    style="overflow-y: scroll; height: calc(100vh - 60px)"
  >
    <div class="header-top">
      <h3>Отдел</h3>
      <button class="btnAdd btn btn-success">
        <router-link class="ml-2 router" to="/otdelform/0"
          ><mdb-icon class="plus" icon="plus" />Добавить</router-link
        >
      </button>
    </div>
    <!-- good -->
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

    <div class="table">
      <otdel-table />
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
import OtdelTable from "@/components/MarketCmponents/Otdel/OtdelTable.vue"
import { mdbPagination, mdbPageItem, mdbPageNav } from "mdbvue";
import { mapActions } from "vuex";

export default {
  components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
    mdbPagination,
    mdbPageItem,
    mdbPageNav,
    OtdelTable,
  },
  data() {
    return {
      value: "5",
      counts: ["5", "10", "15", "20"],
    };
  },
  mounted() {
    this.fetchOtdel();
  },
  methods: {
    ...mapActions(["fetchOtdel"]),
    pickSubject(count) {
      this.value = count;
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
}
.drop {
  width: 160px;
}
.plus {
  font-size: 12px;
  padding-right: 5px;
}
.dropp {
  width: 160px;
  font-size: 16px;
  text-align: end;
  padding: 2px 10px;
  color: rgb(124, 120, 120);
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
}
/*  */


.mb-item {
  padding-left: 10px;
  color: rgb(124, 120, 120);
}
/*  */
.header-top h3 {
  color: rgb(70, 70, 202);
  margin: 0 20px;
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
.option {
  padding: 0 10px;
}
.seting {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.btnAdd {
  color: #fff;
  padding: 2px 10px;
  margin: 0 20px;
  font-size: 12px;
  font-weight: 300 !important;
}
</style>
