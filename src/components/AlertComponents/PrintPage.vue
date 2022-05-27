<template>
  <div class="Print">
      <div class="boxy_print">
         <div class="p-2 w-100">
            <p class="name_print" style="margin-top:40px">OOO {{backspake_left}}JAMSHID SALIMOV {{backspake_right}} Taш. обл</p>
            <p class="name_print" style="margin-bottom:40px">Aккурганский р-н, Дустлик КФЙ</p>
            <div class="w-100 boxy_cha">
                <div class="boxy" style="text-align:start;">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Kассир
                    </p>
                </div>
                <div class="boxy"  style="text-align:end;">
                    <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Shohrux kassir
                    </p>
                </div>
            </div>
            <div class="w-100 boxy_cha mt-2">
                <div class="boxy" style="text-align:start;">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Haпечатан
                    </p>
                </div>
                <div class="boxy"  style="text-align:end;">
                    <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        19.04.2022
                    </p>
                </div>
            </div>
            <div class="w-100 mt-1">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            </div>
            <div class="w-100 boxy_cha mt-3">
                <div class="boxyx" style="text-align:start;">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Название
                    </p>
                </div>
                <div class="boxyx"  style="text-align:center;">
                    <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Кол_во
                    </p>
                </div>
                <div class="boxyx" style="text-align:center;">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Цена
                    </p>
                </div>
                <div class="boxyx"  style="text-align:end;">
                    <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Итого
                    </p>
                </div>
            </div>
            <div class="w-100 mt-1">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            </div>
            <div class="w-100 boxy_cha mt-2">
                <div class="boxy" style="text-align:start;">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Итого
                    </p>
                </div>
                <div class="boxy"  style="text-align:end;">
                    <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        0
                    </p>
                </div>
            </div>
            <div class="w-100">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            </div>
            <div class="w-100 boxy_cha mt-2">
                <div class="boxy" style="text-align:start;">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        Итого  к оплате:
                    </p>
                </div>
                <div class="boxy"  style="text-align:end;">
                    <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                        0
                    </p>
                </div>
            </div>
            <div class="w-100">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            </div>
            <div class="w-100 mt-3">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">**********************************************************</p>
            </div>
            <div class="w-100 mt-1">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">Контакты:</p>
            </div>
            <div class="w-100 mt-1">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">+998 904571257</p>
            </div>
            <div class="w-100 mt-1">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">+998 334571257</p>
            </div>
            <div class="w-100 mt-3">
                <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">**********************************************************</p>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        backspake_left:"<<",
        backspake_right: ">>"
    }

}
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.boxyx{
    width: 25%;
}
.Print{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
}
.boxy_print{
    background: rgb(255, 255, 255);
    width: 400px;
    height: 100vh;
    overflow: hidden;
}
.name_print{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
    text-align: center;
}
.boxy_cha{
    display: flex;
    align-items: center;
    justify-content: center;
}
.boxy_cha p{

}
.boxy{
    width: 50%;
}
</style>