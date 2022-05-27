<template>
  <div>
    <div class="container-flued border-bot">
      <div class="row m-0">
        <div class="col-2 col-sm-2 col-md-2 col-lg-2">
          <div class="paragrif">
            <p>Категоря</p>
          </div>
        </div>
        <div class="col-10 col-sm-10 col-md-10 col-lg-10 name">
          <div class="box">
            <div class="name1">
              <my-input
                size="md"
                type="text"
                class="mt-1 form-control"
                ph=""
                v-model="newCatigory.name"
              />
            </div>
            <div class="para">
              <p>Будит печатся на чеке</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonss">
      <div>
        <button @click="addCatigory" class="btn btn-primary mt-2">
          Добавить и продолжит
        </button>
        <button class="btn btn-success mt-2" @click="addCatigory">
          <router-link style="color: white" to="/catigory"
            ><mdb-icon class="ico" icon="angle-left" />Добавить</router-link
          >
        </button>
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
import { mapMutations, mapActions } from "vuex";
import MyInput from "@/components/Ui/Input.vue";
export default {
  components: {
    MyInput,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
  },
  data() {
    return {
      newCatigory: {
        name: "",
      },
      id: this.$route.params.id,
    };
  },
  async created() {
    if (this.id != 0) {
      const response = await fetch(
        this.$store.state.hostname + "/PosCategories/" + this.id
      );
      const data = await response.json();
      this.newCatigory.name = data.name;
    }
  },
  methods: {
    ...mapActions(["fetchCatigory"]),
    ...mapMutations(["addCatigory"]),
    async addCatigory() {
      const requestCatigory = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.newCatigory.name,
          id: this.id,
        }),
      };
      const response = await fetch(
        this.$store.state.hostname + "/PosCategories",
        requestCatigory
      );
      const data = await response.json();
      this.fetchCatigory();
      this.newCatigory = {};
    },
    clears() {
      this.newCatigory = {
        name: "",
      };
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
.buttonss {
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  margin: 40px;
}
.buttonss .btn {
  margin-right: 30px;
  padding: 5px 10px;
}
.border-bot {
  border-bottom: 1px solid blue;
}
.paragrif {
  margin-top: 15px;
  padding-top: 15px;
}
.paragriff {
  margin-top: 15px;
  padding-top: 5px;
}
/* salom */
.name {
  margin-top: 15px;
}
/* salom */

.box {
  width: 75%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
.name1 {
  width: 100%;
  text-align: start;
  border-radius: 3px;
}
.para {
  width: 100%;
  text-align: start;
  margin: 15px;
}
/* salom */
.form-control {
  padding-left: 5px;
}
</style>