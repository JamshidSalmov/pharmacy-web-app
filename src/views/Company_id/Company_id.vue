<template>
  <div>
    <div class="header-top">
      <h3>Компонии</h3>
      <button class="btnAdd btn btn-success">
        <router-link class="ml-2 router" to="/company/0">
        <mdb-icon class="plus" icon="plus" />Добавить</router-link>
      </button>
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
    <company-table />
  </div>
</template>
<script>
import CompanyTable from "@/components/MarketCmponents/Company_id/CompanyTable.vue";
import {
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbIcon,
} from "mdbvue";
import { mapActions } from "vuex";
export default {
  components: {
    CompanyTable,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
  },
    data() {
    return {
      value: "5",
      counts: ["5", "10", "15", "20"],
    };
  },
  mounted() {
    this.fetchCompany();
  },

  methods: {
    ...mapActions(["fetchCompany"]),
  },
};
</script>
<style scoped>
.btnAdd {
  color: #fff;
  padding: 5px 15px;
  margin: 0 20px;
  font-size: 12px;
  font-weight: 300 !important;
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
}
.header-top h3 {
  color: rgb(70, 70, 202);
  margin: 0 20px;
  font-size: 18px;
  padding: 10px 0;
}
.router {
  color: #fff;
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
.drop {
  width: 160px;
}
.dropp {
  width: 160px;
  font-size: 16px;
  text-align: end;
  padding: 2px 10px;
  color: rgb(124, 120, 120);
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
.plus {
  font-size: 12px;
  padding-right: 5px;
}
</style>