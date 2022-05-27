<template>
  <div class="date">
      <div class="datatime">
           <div>
              <span id="minutes">{{year}}.{{month}}.{{day}} {{hour}}:{{minutes}}:</span>
              <span style=" background:#2E94E3;">{{seconds}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            year: "",
            month: "",
            day:"",

            hour: "",
            minutes: '',
            seconds: "",
           
        }
    },
    created(){
      setInterval(this.timeFunc,1000);
    },
    methods:{
       timeFunc(){
        var today = new Date();
        this.year=today.getFullYear();
        this.month=today.getMonth()+1;
        this.day=today.getDay();
        this.hour=today.getHours();
        this.minutes=today.getMinutes();
        this.seconds=today.getSeconds();
        if(this.seconds<10){
             this.seconds="0"+this.seconds;
        }
        if(this.hour<10){
            this.hour="0"+this.hour;
        }
        if(this.minutes<10){
            this.minutes="0"+this.minutes;
        }
        if(this.month<10){
            this.month="0"+this.month;
        }
        if(this.day<10){
            this.day="0"+this.day;
        }

       }
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* .date{
    background: #10101E;
} */
.datatime{
    color: black;
    padding: 2px 5px;
    border-radius: 10px;
    border-bottom: 1px solid #2E94E3;
    transition: 0.5s;
    transition-property: background, box-shadow;
}
.datatime:hover{
    background: #2E94E3;
    box-shadow: 0 0 15px #2E94E3;
}
.date{
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
}
.time{
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

}
 span{
    font-size: 12px;
}

</style>