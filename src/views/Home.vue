<template>
  <div class="home" style="overflow-y: scroll; height: calc(100vh - 60px)">
    <div class="container">
      <div class="searchs">
        <my-input
          size="lg"
          type="text"
          class="inputs form-control"
          ph="Search..."
          v-model="searchQuary"
        />
        <my-select
          class="select"
          v-model="selectedSort"
          :options="selectedOptions"
        />
        <button class="btn btn-primary" @click="updateShow">
          Add New Comment
        </button>
      </div>
    </div>
    <comment-list
      :comments="searchAndFiltered"
      @otaGetIndex="delIndexItem"
      @changeComm="changecomment"
      v-if="!isLoading"
    />
    <div v-else>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <my-modal :show="addcomments" @close="addcomments = false">
      <template v-slot:modal>
        <comment-form
          @close="addcomments = false"
          @addComment="createComment"
          :obektcha="item"
        />
      </template>
    </my-modal>
  </div>
</template>

<script>
import MyModal from "../components/Modal";
// import CommentForm from "../components/CommentForm";
// import CommentList from "../components/CommentList";
// import axios from "axios";
import MySelect from "../components/Ui/MySelect";
import MyInput from "../components/Ui/Input";

export default {
  components: {
    // CommentForm,
    // CommentList,
    MyModal,
    // axios,
    MySelect,
    MyInput,
  },
  data() {
    return {
      comments: [],
      vlue1: "",
      name: "",
      email: "",
      body: "",
      addres: "",
      item: {},
      searchQuary: "",
      addcomments: false,
      comment: "",
      isLoading: false,
      selectedSort: "teb",
      selectedOptions: [
        { value: "name", name: "Filter by name" },
        { value: "email", name: "Filter by email" },
      ],
    };
  },
  methods: {
    createComment(comment) {
      console.log("comment");
      console.log(comment);
      this.comments.push(comment);
    },
    delIndexItem(i) {
      this.comments.splice(i, 1);
    },
    changecomment(x) {
      this.item = this.comments[x];
      this.comments.splice(x, 1);
      this.addcomments = true;
    },
    shox() {
      this.addcomments = false;
    },
    updateShow() {
      this.addcomments = !this.addcomments;
    },
    // bu quydagi funksiya bazadan kelayotgan malumotlarni comments[] arrayiga qushadi
    async fetchComments() {
      try {
        this.isLoading = true;
        const respons = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=5"
        );
        // await axios.get('') buyrug'i bu bazadan malumot kelishini kutib turadi va kelgan malumotni respons ga tenglaydi
        this.comments = respons.data;
        this.isLoading = false;
      } catch (e) {
        alert("Soething went wrong");
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchComments();
  },
  // Harif buyicha FELTER qilish funksiyasi
  computed: {
    filteredComments() {
      return [...this.comments].sort((a, b) => {
        if (this.selectedSort === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.selectedSort === "email") {
          return a.email.localeCompare(b.email);
        }
      });
    },
    searchAndFiltered() {
      if (this.searchQuary != "") {
        console.log("dasdas");
      }
      return this.filteredComments.filter((comment) => {
        return (
          comment.name.toLowerCase().includes(this.searchQuary.toLowerCase()) ||
          comment.email.toLowerCase().includes(this.searchQuary.toLowerCase())
        );
      });
    },
    // search metodi===================
  },
  // Harif buyicha FELTER qilish funksiyasi
  // watch: {
  //   //     sortAndSearchComments(){
  //   //   return this.filteredComments.filter(comment => {
  //   //     return comment.name.toLowerCase().includes(this.searchQuary.toLowerCase()) || comment.email.toLowerCase().includes(this.searchQuary.toLowerCase());
  //   //   });
  //   // }
  //   // selectedSort(newValue) {
  //   //   console.log(newValue);
  //   //   this.comments.sort((comm1, comm2) =>{
  //   //     if(newValue === "name"){
  //   //       return comm1.name.localeCompare(comm2.name);
  //   //     }else if(newValue === "email"){
  //   //       return comm1.email.localeCompare(comm2.email);
  //   //     }
  //   //   });
  //   // }
  // }
};
</script>

<style scoped lang="scss">
.home::-webkit-scrollbar {
  display: none;
}
.home {
  padding-top: 25px;
}
.select {
  width: 200px;
  height: 35px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.searchs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.inputs {
  width: 450px;
  height: 35px;
}
</style>