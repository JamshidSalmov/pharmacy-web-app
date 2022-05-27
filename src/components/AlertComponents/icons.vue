<template>
    <div class="icons-wrapper">
        
        <a href="https://www.instagram.com/p/Ca96Elqsrvh/?utm_source=ig_web_copy_link" target="_blank"><mdb-icon class="instabram" fab icon="instagram icons" /></a>
        <a href="https://t.me/Jamshid199806" target="_blank"><mdb-icon class="telegram" fab icon="telegram icons" /></a>
        <a href="#" target="_blank"><mdb-icon class="whatsap" fab icon="whatsapp icons" /></a>
        
    </div>
</template>

<script>
import { mdbIcon } from 'mdbvue';
export default {
    components:{
        mdbIcon,
    }
}
</script>

<style scoped>
.instabram{
    color: transparent;
    background: linear-gradient(90deg, rgba(255,224,134,1) 1%, rgba(252,188,144,1) 14%, rgba(243,82,43,1) 43%, rgba(224,44,152,1) 65%, rgba(218,66,185,1) 82%, rgba(236,45,194,1) 87%);
    -webkit-background-clip: text;
}
.telegram{
  color: #279FDB;
  animation-delay: 1s;
}
.whatsap{
color: rgb(7, 224, 7);
}
.icons{
    display: inline-block;
    font-size: 26px;
    animation: float 5s ease-in-out
    infinite;
    margin-right: 5px;
 }


.whatsapp{
 animation-delay: 2s;
 
}
 @keyframes float {
0%{
    transform: translateY(0);
}
50%{
    transform: translateY(-5px);
}
100%{
    transform: translateY(0);
}
}
</style>