<template>
  <div>
    <div class="d-flex allContent">
      <div class=" border-right" :class="{'leftmenu': show_title, 'backleftmenu': !show_title }">
        <div class="d-flex  border-bottom pb-1 pt-1 mb-2">
          <svg v-if="show_title" xmlns="http://www.w3.org/2000/svg" @click="backMenu(!show_title)" class="icon icon-tabler icon-tabler-chevron-left leftdown visitkaShow" style="cursor:pointer;" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="15 6 9 12 15 18" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" @click="backMenu(!show_title)" class="icon icon-tabler icon-tabler-menu-2 backleftdown" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
          <div  v-if="show_title" class="mx-3 pt-1 d-flex align-items-center">
            <span style="font-size: 20px; " class="mb-1 mt-1 text-white">Маркет</span>
          </div>
        </div>
        <div class="" v-for="(link,index) in links" :key="index" >
          <div @click="update_down(index)">
            <router-link
            tag="li" custom v-slot="{ navigate }"
            :to="link.url"
            :class="{'active_link': link.view}"
            class="text-dark d-flex py-2 menuitem"
            >
            <li @click="navigate" role="link">
              <div  class="icon_div" style="width:15%;">
                <mdb-icon :style="{color: link.color}" :class="{'ico': show_title, 'backico': !show_title }" :icon="link.icon" />
              </div>
              <div v-if="show_title" class="d-flex justify-content-between" style="width:85%; text-align:left">
                <p  style="padding-left: 15px;" class="m-0 text-white">{{link.title}}</p>
                <svg v-if="link.down_list.length!=0" :class="{round:link.view}" xmlns="http://www.w3.org/2000/svg" class="icon mr-3 icon-tabler icon-tabler-chevron-right" style="margin-top: 3.5px;" width="13" height="13" viewBox="0 0 24 24" stroke-width="2" stroke="#999" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="9 6 15 12 9 18" />
              </svg>
              </div>
            </li>
            </router-link>
          </div>
          <!-- dropdown -->
          <div v-if="show_title">
            <div v-show="link.view">
              <div v-for="(list,i) in link.down_list" :key="i" @click="update_down_click(i)">
                <router-link
                  tag="li" custom v-slot="{ navigate }"
                  :to="list.url"
                  :class="{'active_drop_link': list.dview}"
                  active-class="active_drop_link"
                  class="drop_down justify-content-flex-start d-flex align-items-center list-group-item-action pointer w-100"
                  > 
                  <li @click="navigate" role="link" class="forSpan">
                    <span class="m-0 p-0 pl-2 d-flex" style="font-size:14px;">
                      <div class="icon_div ml-4">
                      <mdb-icon :icon="list.icon" :style="{color: link.color}"  class="mr-3 icon_color"/>
                    </div>
                      {{list.title}}</span>
                  </li>
                </router-link>
              </div>
            </div>
          </div>
        <!-- /dropdown -->
        </div>
        
        <div class="d-flex pb-1 pt-1 contents">
          <div   class=" d-flex align-items-center  justify-content-bettwen">
                <div class="profile-content" :class="{'leftmenuu': show_title, 'backleftmenuu': !show_title }">
                    <div style="min-width:65px;" :class="{'img-show': show_title, 'img-hide': !show_title }">
                        <img  class="img-border" src="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_960_720.jpg" alt="">
                    </div>
                    <div v-if="show_title" class="job-name" style="min-width:115px">
                        <div class="profile_name" style="color:#00abfb">Jamshid </div>
                        <div class="job" style="color:#00abfb">Web Disegner</div>
                        <div><icons /></div>
                    </div>
                    <div v-if="show_title" style="min-width:40px" class="d-flex align-items-center justify-content-center">
                        <i class='bx bx-log-out' style="font-size:22px; color:#00abfb;"></i>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <div class="main  bg-white" >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import Icons from "@/components/AlertComponents/icons.vue"
  import { mdbIcon } from 'mdbvue';
  // import { ref } from 'vue';


  export default {
    components: {
      mdbIcon,
      Icons,
      
    },
    mounted() {
      this.show_title = localStorage.sidebar;
      console.log(this.show_title)
      console.log('Jamshid qara',localStorage.sidebar)
      this.name = localStorage.Name;
      for (let j = 0; j < this.links.length; j++) {
        if(this.links[j].url == this.$route.fullPath){
          this.links[j].view = true;
          return
        }else{
          if(this.links[j].down_list.length > 0){
            for (let k = 0; k < this.links[j].down_list.length; k++){
              if(this.links[j].down_list[k].url == this.$route.fullPath){
                this.links[j].down_list[k].dview = true;
                this.links[j].view = true;
                this.indexMain = j;
                return
              }
            }
          }
        }
      }
    },
    data() {
      return {
        name: 'sidebar',
        show_title: localStorage.sidebar,
        indexMain: -1,
        links: [

            // ............... for Market ....................
          
            { title: 'Продукты', icon: 'clipboard', url: '/tableone', view: false, color: 'rgb(7, 224, 7)', 
              down_list:[]
            },
            { title: "Категория", icon: 'box', url: '/catigory', view: false, color: 'rgb(7, 224, 7)', down_list:[
              
            ] },
            { title: 'Складъ', icon: 'landmark', url: '/sklad', view: false, color: 'rgb(7, 224, 7)', down_list:[] },
            
            { title: 'Пользователь', icon: 'user', url: '/user', view: false, color: 'rgb(7, 224, 7)', down_list:[
                // { title: "", url: '/reportproduct', dview: false, color: 'rgb(7, 224, 7)', down_list:[] }
               
            ] },
          //  { title: 'Icons', icon: 'clipboard', url: '#', view: false, color: 'rgb(7, 224, 7)', down_list:[
          //   //   { title: "retunSpisaniya", url: '/retunSpisaniya', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
          //   //   { title: "retunContragent", url: '/retunContragent', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
          //   //   { title: "retunGetFromClientBack", url: '/retunGetFromClientBack', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
          //   ] },

            { title: 'Приход', icon: 'clipboard', url: '#', view: false, color: 'rgb(7, 224, 7)', down_list:[
               { title: "Покупка", icon: 'box', url: '/buy', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
            ] },

            
            { title: 'Кредиторы', icon: 'user', url: '#', view: false, color: 'rgb(7, 224, 7)', down_list:[
                // { title: "creditors_list", url: '/creditors_list', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
          
            ] },

            { title: 'Погода', icon: 'cloud-moon-rain', url: '/weather', view: false, color: 'rgb(7, 224, 7)', down_list:[
                // { title: "cashbox_costs", url: '/cashbox_costs', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
            ] },
          
            
            { title: "Продажа", icon: 'shopping-basket', url: '/salepage', view: false, color: 'rgb(7, 224, 7)', down_list:[] },

            { title: 'Настройкт', icon: 'tools', url: '#', view: false, color: 'rgb(7, 224, 7)', down_list:[
                { title: "Компания", url: '/company', dview: false,  color: 'rgb(7, 224, 7)', down_list:[] },
                { title: "Категория", url: '/catigory', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
                { title: "Отдель", url: '/otdel', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
                { title: "Пользователь", url: '/user', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
                { title: "Измерение", url: '/measure', dview: false, color: 'rgb(7, 224, 7)', down_list:[] },
            ] },
            { title: "Выйти", icon: 'sign-out-alt', url: '/login', view: false, color: 'rgb(7, 224, 7)', down_list:[] },


            // ...............End for MArket..................

        ],
      }
    },
    created() {
        this.$root.$refs.sidebar = this;
    },
    methods: {
      update_down: function (i) {
        this.indexMain = i;
        for (let j = 0; j < this.links.length; j++) {
          if (j !== i) {
            this.links[j].view = false
            if(this.links[j].down_list.length > 0) {
              for (let k = 0; k < this.links[j].down_list.length; k++) {
                  this.links[j].down_list[k].dview = false
              }
            }
          }
        }
        this.links[i].view = true
      },
      update_down_click: function (i) {
        for (let j = 0; j < this.links[this.indexMain].down_list.length; j++) {
          if (j !== i) {
            this.links[this.indexMain].down_list[j].dview = false
          }
        }
        this.links[this.indexMain].down_list[i].dview = true
      },
      backMenu(a){
        this.show_title = a
        localStorage.sidebar = this.show_title
        console.log(localStorage.sidebar)

      }
    }
  };
</script>

<style lang="scss">
*{
  font-family: 'Montserrat', sans-serif;
}
.main{
  background: #fff;

}
.forSpan span{
  color: #00abfb;
  font-size: 25px;

}
img{
    border: 3px solid rgba(113, 184, 255, 0.2);
}
.img-hide{
    background: rgba(113, 184, 255, 0.2);
}
.img-show{
margin: 0;
}
.leftmenu{
  width: 270px;
  position: sticky;
  top: 0px;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 2px 0px;
  background: #1B3446;
  font-size: 14px;
}
.leftmenuu{
  min-width:220px;
}
.backleftmenu{
  background: #1B3446;
  width: 75px;
  position: sticky;
  top: 0px;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 2px 5px;
  background: #1B3446;
  font-size: 20px;
}
.backleftmenuu{
  min-width: 75px;
}
.job-name{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.main{
  width: 100%;
}
.allContent{
  min-height: 100vh;
}
.active_link{
  background: rgba(113, 184, 255, 0.3);
  p{
    color: #fff;
  }
  .ico{
    color: #fff;
  }
}
.active_drop_link{
  background: rgba(131, 190, 250, 0.25);
  p{
    color: #fff;
  }
  .ico{
    color: #fff;
  }
}
.menuitem:hover{
  background: rgba(113, 184, 255, 0.2);
  p{
    color: #fff;
  }
  .ico{
    color: #fff;
  }
}
.snipper{
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
.activetext{
  cursor: pointer;
  a{
    color: #fff;
  }
  i{
    color: #fff;
  }
}
.drop_down{
  color: black;
  padding: 5px 0;
  position: relative;
  justify-content: space-between;
  a{
    flex: 1;
    color: #fff;
    font-size: 13.4px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }
  &:hover{
    background: rgba(113, 184, 255, 0.1);
    a{
      color: #fff;
    }
    i{
      color: #fff;
    }
    transition: background-color 0.2s;
    color: black;
  }
}
.round{
  transform: rotate(90deg);
  transition: all 0.5s;
}
.back_round{
  transition: all 0.5s;
}
.ico{
  padding-left: 15px;
}
.backico{
  padding-left: 17px;
}
.leftdown{
  margin: 10px 8px;
  padding: 2px;
}
.backleftdown{
  margin: 10px 12px;
  padding: 1px;
}

.profile-content{
    display: flex;
    box-sizing: border-box;
}
.profile-content img{
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 16px;
    // margin: 0 5px 0 5px;
    background: #1d1b31;
    transition: all 0.4s ease;
}
.big{
    width: 80px;
    height: 80px;
    text-align: center;

}
.profile_name,
.job{
color: #fff;
font-size: 15px;
font-weight: 500;
white-space: nowrap;
}
.contents{
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
}
.contents i{
    color: red;
    font-size: 20px;
}
</style>