<template>
  <div class="hello mt-3">
    <div class="mt-4" v-show="comments.length > 0">
      <h3 class="text-primary">Comments</h3>
      <transition-group name="jamshid">
       <comment-item class="comments w-75 mx-auto" 
          v-for="(comment, i) in comments"
          :item="comment"
          :key="comment.id"
          :index="i"
          @getIndex="itemGetIndex"
          @changeIndex="changeRowList"
          @Changecontent="otachangecomment"/>
      </transition-group>
         
    </div>
    <div v-show="comments.length === 0">
      <h2 class="text-center text-danger">We Can not found any Comment</h2>
    </div>
    <!--  -->
  </div>
</template>


<script>
//  bu yerda CommentItemdan Import qilib olyabmz 
import CommentItem from './CommentItem.vue'
export default {
  // bu yerda CommentItemni ruyxardan utkazib quyyabmiz
  components: {
    CommentItem
  },
  // bu <props:{} bilan Ona componentdan type:Array bulgan comments[] nomli massivni qabul qilib olyabmiz
 props: {
     comments: {
         type: Array,
         required: true
     }
 },
 methods: {
   itemGetIndex(index){
     this.$emit("otaGetIndex", index)
   },
   changeRowList(index){
     this.$emit("changeOta", index)
   },
   otachangecomment(comm){
     this.$emit("changeComm", comm)
   }
 },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jamshid-item {
  display: inline-block;
  margin-right: 10px;
}
.jamshid-enter-active,
.jamshid-leave-active {
  transition: all 1s ease;
}
.jamshid-enter-from,
.jamshid-leave-to{
    opacity: 0;
    transform: translateY(30px);
}

.jamshid-move {
  transition: transform 0.8s ease ;
}
</style>