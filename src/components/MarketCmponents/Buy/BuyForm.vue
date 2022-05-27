<template>
  <div class="header">
    <!--=== Kompan Sklad Otdel=== -->
    <div class="header-top">
      <div class="boxSelect">
        <div class="paragrf">
          <div>
            <h3>Компании</h3>
          </div>
        </div>
        <div class="sellect">
          <select
            class="w-100 selects form-control"
            style="padding-left: 5px; height: 30px"
            v-model="companyId"
          >
            <option value="" disabled selected hidden>Выбирать...</option>
            <option
              v-for="(col, index) in companys.rows"
              :key="index"
              :value="col.id"
            >
              {{ col.name }}
            </option>
          </select>
          <small
            class="text-danger mt-0"
            style="margin-left: 5px"
            v-if="$v.companyId.$dirty && !$v.companyId.required"
          >
            Choose any Company.
          </small>
        </div>
      </div>
      <div class="boxSelect">
        <div class="paragrf">
          <div>
            <h3>Отдил</h3>
          </div>
        </div>
        <div class="sellect">
          <select
            class="w-100 selects form-control"
            style="padding-left: 5px; height: 30px"
            v-model="otdelId"
          >
            <option value="" disabled selected hidden>Выбирать...</option>
            <option
              v-for="(col, index) in otdels.rows"
              :key="index"
              :value="col.id"
            >
              {{ col.name }}
            </option>
          </select>
          <small
            class="text-danger mt-0"
            style="margin-left: 5px"
            v-if="$v.otdelId.$dirty && !$v.otdelId.required"
          >
            Choose any Otdel.
          </small>
        </div>
      </div>
      <div class="boxSelect">
        <div class="paragrf">
          <div>
            <h3>Склад</h3>
          </div>
        </div>
        <div class="sellect">
          <select
            class="w-100 selects form-control"
            style="padding-left: 5px; height: 30px"
            v-model="skladId"
          >
            <option class="options" value="" disabled selected hidden>
              Выбирать...
            </option>
            <option
              v-for="(col, index) in sklads.rows"
              :key="index"
              :value="col.id"
            >
              {{ col.name }}
            </option>
          </select>
          <small
            class="text-danger mt-0"
            style="margin-left: 5px"
            v-if="$v.skladId.$dirty && !$v.skladId.required"
          >
            Choose any Otdel.
          </small>
        </div>
      </div>
      <div class="boxSelect borderr">
        <div class="sellect w-100 mt-2">
          <my-input
            size="md"
            type="datetime-local"
            class="inputs w-100 form-control pl-1"
            ph=""
            v-model="data"
          />
        </div>
      </div>
    </div>
    <!-- ====Opesaniya Dolg NomerFaktura======== -->
    <div class="header-top two">
      <!-- <div class="boxSelect">
        <div class="paragrf">
          <div class="pencil d-flex align-items-center justify-content-center">
            <div>
              <mdb-icon icon="pencil-alt" />
            </div>
            <div>
              <h3>Exrcese</h3>
            </div>
          </div>
        </div>
        <div class="sellect w-100">
          <my-input
            size="md"
            type="text"
            class="inputs w-100 bordernone"
            ph="(90) 457-12-57"
            @input="workings"
            v-model="working"
          />
        </div>
      </div> -->
      <div class="boxSelect">
        <div class="paragrf">
          <div class="pencil d-flex align-items-center justify-content-center">
            <div>
              <mdb-icon icon="pencil-alt" />
            </div>
            <div>
              <h3>Описания</h3>
            </div>
          </div>
        </div>
        <div class="sellect w-100">
          <textarea
            rows="1"
            class="inputs w-100 bordernone"
            cols="50"
            name="comment"
            form="usrform"
            v-model="note"
          ></textarea>
        </div>
      </div>
      <div class="boxSelect">
        <div class="paragrf">
          <div>
            <h3>Номер фактуры</h3>
          </div>
        </div>
        <div class="sellect w-100">
          <my-input
            size="md"
            type="text"
            class="inputs w-100 bordernone"
            ph="0"
            v-model="credit_sum"
          />
        </div>
      </div>
      <div class="boxSelect">
        <div class="paragrf">
          <div>
            <h3>Долг</h3>
          </div>
        </div>
        <div class="sellect w-100">
          <my-input
            size="md"
            type="text"
            class="inputs w-100 bordernone"
            ph="0"
            v-model="debit_summ"
          />
        </div>
      </div>
    </div>
    <!-- ======================= -->
    <div
      class="button-input"
      style="border-bottom: 1px solid #f5f2f2; padding-bottom: 5px"
    >
      <div class="save-btn">
        <div class="d-flex align-items-center justify-content-center w-40">
          <div>
            <button
              @click="saveRow"
              style="
                color: red;
                font-wieght: 500;
                outlin: none;
                background: transparent;
                padding: 0px 8px;
                border: 3px solid red;
                border-radius: 5px;
              "
            >
              <mdb-icon style="color: red" icon="plus" /> Добаветь товар
            </button>
          </div>
          <div>
            <mdb-icon
              style="
                color: blue;
                border-radius: 5px;
                font-size: 16px;
                border: 3px solid blue;
                padding: 3px 6px;
                margin: 0px 5px;
                box-sizing: border-box;
              "
              icon="bars"
            />
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center w-60">
          <div class="mx-1">
            <mdb-icon
              style="
                color: blue;
                font-size: 23px;
                padding-top: 5px;
                margin-right: 5px;
              "
              icon="barcode"
            />
          </div>
          <div>
            <my-input
              size="md"
              type="text"
              class="inputs shtrix-code"
              ph="Штрихкод"
              @keyup.enter.native="addBarcode" 
              v-model="shtrix"
            />
            <!-- <small
              class="text-danger mt-0"
              style="margin-left: 5px"
              v-if="$v.shtrix.$dirty && !$v.shtrix.required"
            >
              Enter Shtrix code.
            </small> -->
          </div>
        </div>
      </div>
      <div class="btnn w-40 align-items-center justify-content-end">
        <div>
          <button @click="addBuy" class="btn btn-success save-btnn">
            <mdb-icon class="cheak" icon="check" /> Сoхранить
          </button>
        </div>
      </div>
    </div>
    <!-- ========================= -->
    <div class="buy-table px-2">
      <table>
        <thead>
          <tr class="main-row">
            <th class="trash"></th>
            <th
              style="color: grey"
              v-for="(col, index) in columns"
              :key="index"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index" class="rowws">
            <td @click="deleteTableRow(index, row)" class="trash">
              <mdb-icon class="trashsh" icon="trash" />
            </td>
            <td>
              <select-component
                :product_name="row.product_name"
                :option="products.rows"
                :index="index"
                @productId="productIndex"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="number"
                class="inputs form-control"
                @input="qtyChange(index)"
                ph=""
                v-model="row.qty"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="number"
                class="inputs form-control"
                @input="qtyChange(index)"
                ph=""
                v-model="row.qty_in_pack"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="text"
                class="inputs form-control"
                disabled
                ph=""
                v-model="row.unit_discount_price"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="number"
                class="inputs form-control"
                ph=""
                v-model="row.unit_buyed_price"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="number"
                class="inputs form-control"
                ph=""
                v-model="row.persantage"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="number"
                class="inputs form-control"
                ph=""
                v-model="row.unit_saled_price"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="datetime-local"
                class="inputs form-control"
                ph=""
                v-model="row.expired_date"
              />
            </td>
            <td>
              <my-input
                size="md"
                type="number"
                class="inputs form-control"
                ph=""
                v-model="row.summ"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <notes ref="message"></notes>
  </div>
</template>

<script>
import SelectComponent from "@/components/MarketCmponents/Buy/SelectComponent.vue";
import { required } from "vuelidate/lib/validators";
import {
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbIcon,
} from "mdbvue";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {
    SelectComponent,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
  },
  //  ======= Validations for Requared =====
  validations: {
    companyId: {
      required,
    },
    otdelId: {
      required,
    },
    skladId: {
      required,
    },
    // shtrix: {
    //   required,
    // },
  },
  data() {
    return {
      columns: [
        "Продукт",
        "Кол_во",
        "Шт",
        "Кол_во_лек",
        "Цина",
        "Процинт",
        "Продается",
        "до_срока",
        "Сумма",
      ],
      rows: [],
      working: "",
      data: "",
      companyId: null,
      otdelId: null,
      skladId: null,
      note: "",
      credit_sum: null,
      debit_summ: null,
      shtrix: null,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(["companys", "otdels", "sklads", "products"]),
  },
  mounted() {
    this.fetchBuy();
    this.fetchCompany();
    this.fetchOtdel();
    this.fetchSklad();
    this.fetchProduct();
  },

  methods: {
    ...mapActions([
      "fetchBuy",
      "fetchCompany",
      "fetchOtdel",
      "fetchSklad",
      "fetchProduct",
    ]),
    ...mapMutations(["AddBuy"]),
    saveRow() {
      let objects = {
        product_id: null,
        qty: 0,
        real_qty: 0,
        qty_in_pack: 0,
        saved_in_pack: 0,
        unit_discount_price: 0,
        unit_buyed_price: 0,
        persantage: 0,
        unit_saled_price: 0,
        expired_date: "",
        summ: 0,
        change_price_status: true,
        id: 0,
        real_company_id: this.companyId,
        persantage_nds: 0,
        persantage_discount: 0,
        product_name: "",
      };
      this.rows.push(objects);
      objects = {};
    },
    workings() {
      var x = this.working
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
      this.working = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    deleteTableRow(index, row) {
      this.rows.splice(index, 1);
    },
    qtyChange(index) {
      let donaPrice = 0;
      let allQty = 0;
      allQty =
        this.rows[index].unit_discount_price * this.rows[index].qty +
        parseInt(this.rows[index].qty_in_pack);
      donaPrice =
        this.rows[index].unit_buyed_price /
        this.rows[index].unit_discount_price;
      this.rows[index].summ = donaPrice * allQty;
      this.rows[index].real_qty = this.rows[index].qty;
      this.rows[index].saved_in_pack = parseInt(this.rows[index].qty_in_pack);
      this.rows[index].qty_in_pack = parseInt(this.rows[index].saved_in_pack);
    },
    productIndex(index, col) {
      // console.log('Salom Dunyo',this.rows[index].unit_discount_price)
      this.rows[index].product_id = col.id;
      // console.log(this.rows[index].product_id)
      this.rows[index].unit_discount_price = col.contains_number_in_pack;
      this.rows[index].unit_buyed_price = col.buyed_price;
      this.rows[index].persantage = col.percentage;
      this.rows[index].unit_saled_price = col.price;
      this.rows[index].product_name = col.name;
    },
    async add_buy() {
      if (
        this.$v.invalid ||
        this.companyId == null ||
        this.otdelId == null ||
        this.skladId == null
      ) {
        this.$v.$touch();
        this.$refs.message.warning("please_fill");
        return false;
      }
      //  console.log('tuldirildi va davom etmoqda')
      let AllSum = 0;
      for (let i = 0; i < this.rows.length; i++) {
        AllSum += this.rows[i].summ.toFixed(2);
        console.log('Jamshid Qara',AllSum)
        // AllSum.toFixed(2);
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          'date': this.data,
          'postavshik_id': this.companyId,
          'department_id': this.otdelId,
          'sklad_id': this.skladId,
          'note': this.note,
          'credit_sum': this.credit_sum,
          'debit_summ': this.debit_summ,
          'id': this.id,
          'real_company_id': this.companyId,
          'invoiceItems': this.rows,
          'summ': AllSum,
          'expired_date': this.expired_date,
        }),
      };
      try {
        const response = await fetch(this.$store.state.hostname + "/PosInvoices",requestOptions);
        const data = await response.text();
        if (response.status == 201 || response.status == 200) {
          this.$refs.message.success("Added_successfully");
          return true;
        }
      } catch {
        console.log("Connection error");
      }
      this.fetchBuy();
    },
    async addBuy() {
      if (await this.add_buy()) {
        this.$router.push("/buy");
      }
    },
    async addBarcode() {

        try {
        const response = await fetch(this.$store.state.hostname + "/PosProducts/checkProductByBarcode?barcode="+ this.shtrix);
        const data = await response.json();
        console.log('this.dta=barcode',data);
        let barObjects = {
        product_id: data.id,
        qty_in_pack: 0,
        saved_in_pack: 0,
        unit_discount_price: data.contains_number_in_pack,
        unit_buyed_price: data.buyed_price,
        persantage: data.percentage,
        unit_saled_price: data.price,
        expired_date: "",
        summ: 0,
        change_price_status: true,
        id: 0,
        real_company_id: this.companyId,
        persantage_nds: 0,
        persantage_discount: 0,
        product_name: data.name,
      };
      this.rows.push(barObjects);
        // this.product_name=data.bot_name
        // this.real_qty=min_qty
        if (response.status == 201 || response.status == 200) {
          this.$refs.message.success("Added_successfully");
          return true;
        }
      } catch {
        console.log("Connection error");
      }
      this.fetchBuy();
      },
  },
  






  async created() {
    if (this.id != 0) {
      const response = await fetch(
        this.$store.state.hostname +
          "/PosInvoices/getInvoiceFullInfoById?invoice_id=" +
          this.id
      );
      const data = await response.json();
      this.companyId = data.postavshik_id;
      this.otdelId = data.department_id;
      this.skladId = data.sklad_id;
      this.data = data.date.slice(0, 16);

      this.note = data.note;
      this.credit_sum = data.credit_sum;
      this.debit_summ = data.debit_summ;
      this.shtrix = data.factura_number;

      for (let i = 0; i < data.invoiceItems.length; i++) {
        this.saveRow();
        this.rows[i].product_name = data.invoiceItems[i].product_name;
        this.rows[i].qty = data.invoiceItems[i].qty;
        this.rows[i].real_qty = data.invoiceItems[i].real_qty;
        this.rows[i].qty_in_pack = data.invoiceItems[i].qty_in_pack;
        this.rows[i].saved_in_pack = data.invoiceItems[i].saved_in_pack;
        this.rows[i].saved_in_pack = data.invoiceItems[i].saved_in_pack;
        this.rows[i].unit_discount_price =
          data.invoiceItems[i].unit_discount_price;
        this.rows[i].unit_buyed_price = data.invoiceItems[i].unit_buyed_price;
        this.rows[i].persantage = data.invoiceItems[i].persantage;
        this.rows[i].unit_saled_price = data.invoiceItems[i].unit_saled_price;
        this.rows[i].expired_date = data.invoiceItems[i].expired_date;
        this.rows[i].summ = data.invoiceItems[i].summ;
        this.rows[i].id = data.invoiceItems[i].id;
      }
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  height: 100vh;
}
.shtrix-code {
  border: none;
  outline: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  padding-left: 5px;
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
}
.two {
  justify-content: start;
  border-bottom: 1px solid #f5f2f2;
  padding-bottom: 50px;
}
.rowws {
  border-bottom: 1px solid rgb(202, 196, 196);
}
.boxSelect {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 5px 20px;
}
.sellect {
  width: 100%;
}
.paragrf {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}
.paragrf h3 {
  padding: 5px 0;
  padding-left: 5px;
  font-size: 16px;
  color: gray;
  font-weight: 400;
  font-family: sans-serif;
}
.borderr {
  margin-top: 20px;
}
.inputs {
  height: 30px;
}
.bordernone {
  border: none;
  outline: none;
  border-bottom: 1px solid grey;
  border-radius: 0;
  padding-left: 5px;
}
/* INFRAME SECTION======= */
.button-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 20px 5px 20px;
}
.save-btn {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.save-btnn {
  padding: 5px 20px;
  font-weight: 500;
}
/* table============== */
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}
.buy-table {
  margin: 0 20px;
}
th {
  font-size: 14px;
  font-weight: 400;
  color: black;
  padding: 10px 10px;
  text-align: start;
}
td {
  font-size: 12px;
  font-weight: 400;
  color: rgb(124, 120, 120);
  padding: 10px 5px;
  text-align: start;
}
table .main-row {
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;
}

th {
  width: 100px;
}
th:nth-child(2) {
  min-width: 260px;
}
.trash {
  width: 45px;
  text-align: center;
}
.form-control {
  padding-left: 5px;
}
.trashsh {
  color: red;
}
</style>