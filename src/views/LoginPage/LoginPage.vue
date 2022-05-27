<template>
<div class="main-page">
    <div class="main-back">
       <div class="grid-wrapper">
            <div class="header-top">
                <div class="buttons">
                    <mdb-btn color="elegant">Руссский</mdb-btn>
                    <mdb-btn color="elegant">Английский</mdb-btn>
                </div>
            </div>
            <div class="box">
                 <div class="boxx">
                     <h2>Авторизатция</h2>
                     <form class="forms">
                        <div class="login">
                            <label for="login"><mdb-icon far class="icons" icon="user" /></label>
                            <input type="text" id="login" class="form-controls" placeholder="Ползоватиль" v-model="login">
                        </div>
                        <div class="password">
                            <label for="parol"><mdb-icon class="icons" icon="lock" /></label>
                            <div class="position">
                                <input :type="passwordType" id="parol" class="form-controls passwordicon w-100 m-0" placeholder="Парол" v-model="Password">
                                <span  @click="eyesShov" class="field-icon"><mdb-icon class="ikoncha" :icon="eyes" /></span>
                            </div>
                        </div>
                        <div class="buttonss">
                            <mdb-btn @click="enterPage" color="primary btnn">Входить</mdb-btn>
                        </div>
                     </form>
                 </div>
            </div>
       </div>
    </div>
    <notes ref="message"></notes>
</div>
</template>

<script>
import { mdbBtn,mdbIcon } from 'mdbvue';
export default {
    components: {
      mdbBtn,
      mdbIcon,
    },
    data() {
        return {
         passwordType:'password',
         eyes: 'eye',
         Password:'',
         login:'',
        }
    },
    mounted(){
        localStorage.Login = '';
    },
    methods: {
        eyesShov(){
             this.eyes = this.eyes ==='eye' ? 'eye-slash' : 'eye';
            this.passwordType =this.passwordType ==='password' ? 'text' : 'password';
        },
        async enterPage(){
            try{
                  var md5 = require('md5');

                  let parol = md5(this.Password);

                const response= await fetch(this.$store.state.hostname +"/PosAuthorizations/checkPosAuth?login="+this.login+'&password='+parol);

                const data = await response.json();
                console.log("Jamshid qara data",data)
                if(response.status ==201 || response.status ==200){
                    localStorage.Login =data.login
                    localStorage.Name_kassir =data.user_name
                    localStorage.Tel_number =data.user.phone_number
                    localStorage.UserId=data.id
                    
                    this.$refs.message.success('You Pass the Authorization Succesfuly')
                     this.$router.push("/tableone");
                }
                else if( response.status == 401 || response.status == 404){
                    this.$refs.message.error('Iformation not found') 
                }
            }
            catch{
                 this.$refs.message.error('Login or Password is incorrict')
            }

        },
       
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.passwordicon{
    padding-right: 15px;
}
 .field-icon {
  float: right;
  margin-top: -28px;
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  z-index: 2;
}
.ikoncha{
    font-size: 18px;
}
.main-page{
    background: url('@/assets/medical1.jpg') no-repeat center center / cover;
    width: 100%;
    height: 100vh;
    position: relative;
    opacity: 0.9;
}
.main-back{
    position: absolute;
    width: 100%;
    height: 100vh;
background-color: rgba(0, 0, 0, .7);
}
.grid-wrapper{
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 9fr;
    height: 100vh;
}
.header-top{
height: auto;
width: 100%;
display: grid;
justify-content: end;
align-items: center;
}
.header-top .buttons{
    padding: 5px 0;
}
.header-top .buttons button{
    margin: 0 5px;
    padding: 8px 25px;
    font-family: sans-serif;
    border-radius: 2px;
    font-weight: 500;
}
.box{
    display: flex;
    justify-self: center;
    align-self: center;
    width: 400px;
    height: 100%;
}
.boxx{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 5px;
}
.forms{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
   min-width: 400px;
    background: #fff;
    border-radius: 5px;
}
h2{
    margin-bottom: 20px;
    color: #fff;
    font-size: 28px;
}
.login{
    border-bottom: 1px solid rgb(158,158,158);
    min-width: 400px;
    min-height: 90px;
    display: grid;
    grid-template-columns: 2fr 8fr;
    justify-content: center;
    align-items: center;
box-sizing: border-box;
}
.password{
    border-bottom: 1px solid rgb(158,158,158);
   min-width: 400px;
   min-height: 90px;
    display: grid;
    grid-template-columns: 2fr 8fr;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

}
.buttonss{
    min-width: 400px;
    min-height: 90px;
    text-align: center;
        display: grid;
    justify-content: center;
    align-items: center;
   box-sizing: border-box;
}
.btnn{
    padding: 6px 20px;
    font-size: 14px;
    font-family: sans-serif;
    border-radius: 5px;

}
.form-controls{
    height: 35px;
    font-size: 18px;
    border: none;
    outline: none;
    margin-right: 10px;
}
.icons{
    color: rgb(158,158,158);
    font-size: 24px;
}
</style>