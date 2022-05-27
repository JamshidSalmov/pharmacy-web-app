<template>
  <div class="main w-100">
    <div class="header-top w-100" style="max-height:40px">
        <div class="text1">
           <div class="text-box">
               <div class="pl-1">
                   <router-link style="font-size:20px;" class="ml-2 router" to="/tableone"><mdb-icon  class="ico" icon="shopping-basket" />Продажа</router-link>
               </div>
           </div>
        </div>
        <div class="text2">
            <div class="buttonss">
                <button class="w-80 btns1">Закрыть касса</button>
            </div>
            <div class="buttonss border-r">
                <button class="w-80 btns2">EXTREMSOFT</button>
            </div>
            <div class="buttonsss">
                <date-time class="w-100" />
            </div>
        </div>
    </div>
    <div class="header-main w-100" style=' height:calc(100vh - 40px)'>
        <div class="tables">
            <div class="table-one" style='overflow-y: scroll; height:calc(40vh - 20px)'>
                <table>
                    <thead>
                        <tr class="main-row">
                            <th>N</th>
                            <th v-for="(col,index) in columnss" :key="index" >{{col}}</th>  
                            <th class="trashs"></th>
                        </tr> 
                    </thead>
                    <tbody>
                        <tr v-for="(row,index) in rowwsss" :key="index" style="background: #f7f5f5">
                            <td>{{index+1}}</td>
                            <td>{{row.product_name}}</td>
                            <td>
                                <my-input
                                size="md"
                                type="text"
                                class="inputs form-control"
                                disabled
                                ph="0" v-model="row.real_qty" /> 
                            </td>
                            <td>
                                <my-input
                                size="md"
                                type="text"
                                class="inputs form-control"
                                disabled
                                ph="0" v-model="row.qty_in_pack" /> 
                            </td>
                            <td>{{row.unit_saled_price}}</td>
                            <td>{{row.expired_date}}</td>
                            <td>{{row.summ}}</td>
                            <td>
                                <button @click="deleteTableSale(row.id)" class="btns"><mdb-icon class="trash" icon="trash" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-btns" style='height:calc(20vh - 0px)'>
                <div class="w-100 karzina-btn">
                    <div class="savat1" v-for="(item, i) in allRowsSavat" :key="i">
                        <div class="xcha">
                            <button @click="PassKarzina(i)">Карзина {{i+1}}</button> 
                        </div>
                        <div class="xxxx">
                            <button @click="DeletKarzina(i)" style="font-weight:700; color: red; font-size:14px; padding: 0 5px; ">X</button>
                        </div>
                    </div>
                    <div class="savat2">
                        <button @click="addCustomer()"><mdb-icon class="plus" icon="plus" /></button>
                    </div>
                </div>
                <div class="w-100 shtrix-btn">
                    <div class="search" style="margin-right:50px">
                        <div class="text w-100">
                            <p>Искать здис...</p>
                        </div>
                        <div class="w-100 mt-1">
                            <my-input style="padding-left:5px;" size="md" type="text" class="iskat inputs  w-100" ph="" @keyup.enter.native="addSearch" v-model="searchDrag" />
                        </div>
                    </div>
                    <div class="shtrix-box">
                        <div class="text w-100">
                            <p style="color:blue;">Штрихкод</p>
                        </div>
                        <div class="w-100 mt-1">
                            <my-input style="padding-left:5px;" size="md" type="text" class="shtrix inputs  w-100" ph="" @keyup.enter.native="addBarcode1" v-model="shtrix1" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-two" style='overflow-y: scroll; height:calc(40vh - 20px)'>

                <table style="margin: 10px 10px; width:98%;">
                    <thead>
                        <tr class="main-row">
                            <th>N</th>
                            <th v-for="(col,index) in columnsss" :key="index" >{{col}}</th>  
                        </tr> 
                    </thead>
                    <tbody>
                        <tr @click="showRow(row)" v-for="(row,index) in rowss" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{row.product_name}}</td>
                            <td>{{row.real_qty}}</td>
                            <td>{{row.unit_saled_price}}</td>
                            <td>{{row.expired_date}}</td>
                            <td style="text-align: start">
                               0
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="sales" style=' height:calc(100vh - 40px)'>
            <div class="chek1 w-100" style=' height:calc(35vh - 40px)'>
                <div class="sumSkidke w-100">
                    <div class="summa w-50">
                        <div style="height:50%;">
                            <p style="text-align:start;">Cумма</p>
                        </div>
                        <div style="height:50%;">
                            <p style="text-align:end; font-weight:600;">{{clentSum}}</p>
                        </div>
                    </div>
                    <div class="summa w-50">
                        <div style="height:50%;">
                            <p style="text-align:start;">Cкидка</p>
                        </div>
                        <div style="height:50%;">
                            <p style="text-align:end; font-weight:600;">0</p>
                        </div>
                    </div>
                </div>
                <div class="oplate w-100">
                    <div class="summa">
                        <div style="height:50%;">
                            <p style="text-align:start;">K оплате</p>
                        </div>
                        <div style="height:50%;">
                            <p style="text-align:end; font-weight:600;">{{clentSum}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chek2 w-100" style=' height:calc(65vh - 0px)'>
                <div class="sumSkidke w-100" style="max-height:50px; margin-top:8px;">
                     <div class="w-50" style="height:100%;">
                         <p class="paragrif" style="line-height:50px; font-size: 18px; font-weight:600;">Чек</p>
                     </div>
                     <div class="w-50">
                         <button @click="PayModalReal()" style="line-height:50px; font-size:18px" class="tugma btn btn-success w-100">НАЛИЧНЫЕ</button>
                     </div>
                </div>
                <div class="sumSkidke w-100" style="max-height:50px; margin-top:5px;">
                     <div class="w-50">
                         <p class="paragrif" style="line-height:50px; font-size: 18px;  font-weight:600;">Клиент</p>
                     </div>
                     <div class="w-50">
                         <button @click="PayModalUzcard()" style="line-height:50px; font-size:18px" class="tugma btn btn-primary w-100">UZCARD</button>
                     </div>
                </div>
                <div class="sumSkidke w-100" style="max-height:50px; margin-top:5px;">
                     <div class="w-50">
                         <p class="paragrif" style="line-height:50px; font-size: 18px;  font-weight:600;">Оплата клиент</p>
                     </div>
                     <div class="w-50">
                         <button @click="PayModalHumo()" style="line-height:50px; font-size:18px" class="tugma btn btn-blue-grey w-100">HUMO</button>
                     </div>
                </div>
                <div class="sumSkidke w-100" style="max-height:50px; margin-top:5px;">
                     <div class="w-50">
                         <p class="paragrif" style="line-height:50px; font-size: 18px;  font-weight:600;">Скидка</p>
                     </div>
                     <div class="w-50">
                         <button @click="PayModalClick()" style="line-height:50px; font-size:18px" class="tugma btn btn-yellow w-100">CLICK</button>
                     </div>
                </div>
                <div class="sumSkidke w-100" style="max-height:50px; margin-top:5px;">
                     <div class="w-50">
                         <p class="paragrif" style="line-height:50px; font-size: 18px;  font-weight:600;">Скидка</p>
                     </div>
                     <div class="w-50">
                         <button @click="PayModalOnline()" style="line-height:50px; font-size:18px" class="tugma btn btn-deep-purple w-100">ONLINE</button>
                     </div>
                </div>
                <div class="sumSkidke w-100" style="max-height:50px; margin-top:5px;">
                     <div class="w-50">
                         <p class="paragrif" style="line-height:50px; font-size: 18px;  font-weight:600;">Очистить кассу</p>
                     </div>
                     <div class="w-50">
                         <button @click="ClearFunck()" style="line-height:50px; font-size:18px" class="tugma btn btn-danger w-100">ВОЗОВРАТЬ</button>
                     </div>
                </div>      
            </div>
        </div>
    </div>
    <notes ref="message"></notes>
    <!-- Modal for Sale Start -->
    <div v-show="showModal" class="fixedP">
        <div class="box">
            <div class="p-4">
                <div class="modal-box">
                    <div class="w-100">
                        <my-input
                        size="md"
                        type="text"
                        class="form-control w-100"
                        disabled
                        ph="" v-model="product_name" />   
                    </div>
                    <div class="w-100" style="padding-top:10px">
                        <my-input
                        size="md"
                        type="text"
                        class="form-control w-100"
                        disabled
                        ph="" v-model="qty" /> 
                    </div>
                    <div class="SinaSkidka w-100" style="padding-top:10px">
                        <div class="modal-box w-50 p-0 m-0" style="min-height:120px">
                            <div class="modal-box w-100 " style="min-height:60px; padding-right:10px;">
                                <div class="w-100" style="min-height:20px">
                                    <p>Cкидка</p>
                                </div>
                                <div class="w-100" style="min-height:40px;">
                                    <my-input
                                    style="text-align:end;"
                                    size="md"
                                    type="text"
                                    class="form-control m-0 pr-1"
                                    disabled
                                    ph="" v-model="skidka" /> 
                                </div>
                            </div>
                            <div class="modal-box m-0 w-100 " style="min-height:60px; padding-right:10px">
                                <div class="w-100" style="min-height:20px">
                                    <p>Дата срока</p>
                                </div>
                                <div class="for-bottom w-100 p-0 m-0" style="min-height:40px;">
                                <div class="w-100">
                                        <my-input
                                        style="text-align:end;"
                                        size="md"
                                        type="text"
                                        class="form-control m-0 pr-1"
                                        disabled
                                        ph="" v-model="expired_date" /> 
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-box w-50  p-0 m-0" style="min-height: 120px;">
                            <div class="w-100" style="min-height:20px; padding-left:10px">
                                <p>Цена</p>
                            </div>
                            <div class="w-100 border" style="min-height:100px; padding-left:10px">
                                <p style="padding-top:45px; min-height:100px; text-align:end; padding-right:5px; font-size:35px; color:black; font-weight: 600;">{{unit_saled_price}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-box w-100 " style="min-height:60px; padding-top:10px">
                        <div class="w-100" style="min-height:20px">
                            <p>Остатка</p>
                        </div>
                        <div class="w-100 p-0 m-0" style="min-height:40px;">
                            <div class="w-100">
                                <my-input
                                style=" font-weight: 600; min-height:40px; color:black; font-size:28px; padding-left:5px;"
                                size="md"
                                type="text"
                                class="form-control m-0"
                                ph="" v-model="ostatka_sale" /> 
                            </div>
                        </div>
                    </div> 
                    <div class="Shtt mt-3">
                        <div class="w-50 Shtt">
                            <div class="w-50 modal-box" style="padding-right:10px">
                                <div class="w-100">
                                    <p>Уп</p>
                                </div>
                                <div class="w-100">
                                    <my-input
                                    style="font-weight: 600; font-size:20px;  min-height:50px; color:black; padding-left:5px;"
                                    size="md"
                                    type="text"
                                    class="form-control m-0"
                                    ph="" @input="pochka()" v-model="up_sale" /> 
                                    <small class="text-danger mt-0" style="margin-left: 5px" v-if="$v.up_sale.$dirty && !$v.up_sale.required">
                                        please_fill
                                    </small>
                                </div>
                            </div>
                            <div class="w-50 modal-box" style="padding-right:10px">
                                <div class="w-100">
                                    <p>Шт</p>
                                </div>
                                <div class="w-100">
                                    <my-input
                                    style=" font-weight: 600; min-height:50px; color:black; font-size:20px; padding-left:5px;"
                                    size="md"
                                    type="text"
                                    class="form-control m-0"
                                    ph="" @input="pochka()" v-model="dona_sale"/>
                                    <small class="text-danger mt-0" style="margin-left: 5px" v-if="$v.dona_sale.$dirty && !$v.dona_sale.required">
                                        please_fill
                                    </small> 
                                </div>
                            </div>
                        </div>
                        <div class="w-50 summaa">
                            <div class="w-100 border" style="min-height: 74px; margin-top:24px">
                                    <my-input
                                    style=" font-weight: 600; min-height:74px; color:black; font-size:35px; line-height: 74px; text-align:end;"
                                    size="md"
                                    type="text"
                                    class="form-control m-0 w-100"
                                    ph="" @input.native="pochka()" v-model="mijoz_summ"/>  
                            </div>
                        </div>
                    </div>  
                    <div class="button-sale w-100">
                        <div class="w-50">

                        </div>
                        <div class="w-50 button_ok">
                            <div class="w-50">
                                <button @click="okay"  class="mr-2 btn btn-success ok">OK</button>
                            </div>
                            <div class="w-50">
                                <button @click="Otmena" class="otmena btn btn-danger w-100">OТМИНА</button>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    </div>
    <!-- Modal for Sale Start -->

    <!-- Modal For Pay Start -->
    <div v-show="showModalPay" class="fixedP">
        <div class="box">
            <div class="modal-box">
                <div class="p-4 w-100">
                    <div class="w-100 clentAllSum">
                        <h1>{{clentSum}}</h1>
                    </div>
                    <div class="w-100 skidka-value">
                        <my-input
                        style="text-align:end; font-size:30px; font-weight:700;"
                        size="md"
                        type="number"
                        @input="Qaytim_funk"
                        class="form-control w-100"
                        ph="" v-model="mone" />   
                    </div>
                    <div>
                        <my-input
                        style="margin-top:20px; text-align:end; font-size:25px; font-weight:700; color:red; border:none; outline:none;"
                        size="md"
                        type="text"
                        class="w-100 "
                        ph="" v-model="qaytim" />  
                    </div>
                    <div class="w-100  first-row">
                        <div class="price_button">
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>Скидка</p>
                                </div>
                                <div class="w-100 input">
                                    <my-input
                                    size="md"
                                    type="number"
                                    class="form-control w-100"
                                    disabled
                                    ph="" v-model="skidka" />
                                </div>
                            </div>
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>К Оплате</p>
                                </div>
                                <div class="w-100 input">
                                    <my-input
                                    size="md"
                                    type="number"
                                    class="form-control w-100"
                                    disabled
                                    ph="41 666.67" v-model="clentSum" />
                                </div>
                            </div>
                            <div class="px-2  w-100 button_okk">
                                <div class="w-100 title" >
                                    <p style="height:22px;"></p>
                                </div>
                                <div class="w-100">
                                    <button @click="PrintFunction()" class="w-100 btn btn-primary">ПЕЧАТ</button>
                                </div>
                                <div class="w-100">
                                   <button @click="PayFunctionOk()" class="w-100 btn btn-success">OK</button> 
                                </div>
                                <div class="w-100">
                                    <button @click="otminaFunction()" class="w-100 btn btn-danger">OТМИНА</button>
                                </div>
                            </div>
                        </div>
                        <div class="all_input">
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>Наличные</p>
                                </div>
                                <div class="w-100 input">
                                    <div @click="RealPay_func()">
                                        <input
                                        @blur="cheak_Real"
                                        size="md"
                                        type="number"
                                        class="form-control w-100"
                                        v-on:keyup="changeValue"
                                        ph="" v-model="RealPay" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>Uzkard</p>
                                </div>
                                <div class="w-100 input">
                                    <div @click="Uzkard_function()">
                                        <input
                                        size="md"
                                        type="number"
                                        @blur="cheak_Uz"
                                        v-on:keyup="changeValueUz"
                                        class="form-control w-100"
                                        ph="" v-model="UzkardPay" />
                                    </div> 
                                </div>
                            </div>
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>Humo</p>
                                </div>
                                <div class="w-100 input">
                                    <div @click="HumoPay_func()">
                                        <input
                                        size="md"
                                        type="number"
                                        @blur="cheak_Humo"
                                        v-on:keyup="changeValueHu"
                                        class="form-control w-100"
                                        ph="" v-model="HumoPay" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>Click</p>
                                </div>
                                <div class="w-100 input">
                                    <div @click="ClickPay_func()">
                                        <input
                                        size="md"
                                        type="number"
                                        @blur="cheak_Click"
                                        v-on:keyup="changeValueClick"
                                        class="form-control w-100"
                                        ph="" v-model="ClikcPay" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-2  w-100">
                                <div class="w-100 title">
                                    <p>Онлайн</p>
                                </div>
                                <div class="w-100 input">
                                    <div @click="OnlinePay_runction()">
                                        <input
                                        size="md"
                                        type="number"
                                        @blur="cheak_Online"
                                        v-on:keyup="changeValueOnline"
                                        class="form-control w-100"
                                        ph="" v-model="OnlinePay" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-2  w-100 mt-2">
                                <div class="w-100 input" v-if="show_div">
                                        <div
                                        :class="{'blue_color': !show_redBlue, 'red_coor': show_redBlue }"
                                        size="md"
                                        type="text"
                                        class="red_blue w-100"
                                         >{{redBlue}}</div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal For Pay End -->
    <!-- Print Page Modal Start-->
    <div v-show="showPrint" class="Print">
        <div class="boxy_print">
            <div class="p-2 w-100">
                <p class="name_print" style="margin-top:15px">OOO {{backspake_left}}JAMSHID SALIMOV {{backspake_right}} Taш. обл</p>
                <p class="name_print" style="margin-bottom:15px">Aккурганский р-н, Дустлик КФЙ</p>
                <div class="w-100 boxy_cha">
                    <div class="boxy" style="text-align:start;">
                        <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                            Kассир
                        </p>
                    </div>
                    <div class="boxy"  style="text-align:end;">
                        <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                            {{kassir_name}}
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
                            {{print_data}}
                        </p>
                    </div>
                </div>
                <div class="w-100 mt-1">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                </div>
                <div class="w-100 boxy_cha">
                    <div class="w-100">
                        <table>
                            <thead>
                                <tr class="Product_row w-100 p-0 m-0">
                                    <th class="w-25 p-0 m-0" v-for="(row,index) in ProduvtRows" :key="index" >{{row}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="Product_row w-100 p-0 my-1" v-for="(row,index) in rowwsss" :key="index">
                                    <td class="w-25 p-0 m-0">{{row.product_name}}</td>
                                    <td class="w-25 p-0 m-0">{{row.contains_number_in_pack}}</td>
                                    <td class="w-25 p-0 m-0">{{row.unit_saled_price}}</td>
                                    <td class="w-25 p-0 m-0">{{row.summ}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w-100 mt-1">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                </div>
                <div class="w-100 boxy_cha mt-2">
                    <div class="boxy" style="text-align:start;">
                        <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                            Итого
                        </p>
                    </div>
                    <div class="boxy"  style="text-align:end;">
                        <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                            {{print_all_summ}}
                        </p>
                    </div>
                </div>
                <div class="w-100">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                </div>
                <div class="w-100 boxy_cha mt-2">
                    <div class="boxy" style="text-align:start;">
                        <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                            Итого  к оплате:
                        </p>
                    </div>
                    <div class="boxy"  style="text-align:end;">
                        <p  style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">
                            {{print_all_summ}}
                        </p>
                    </div>
                </div>
                <div class="w-100">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                </div>
                <div class="w-100 mt-3">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">**********************************************************</p>
                </div>
                <div class="w-100 mt-1">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">Контакты:</p>
                </div>
                <div class="w-100 mt-1">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">{{tel_number}}</p>
                </div>
                <div class="w-100 mt-3">
                    <p style="font-weight: 600; font-size: 14px; font-family: sans-serif; ">**********************************************************</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Print Page Modal End-->

    <notes ref="message"></notes>
  </div>
</template>
<script>
import DateTime from "@/components/MarketCmponents/Sale/DataTime.vue"
import ModalForm from '@/components/MarketCmponents/Sale/ModalComponent.vue'
import { required } from "vuelidate/lib/validators";
import { mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbIcon } from 'mdbvue';
import {mapGetters,mapMutations} from 'vuex'
export default {
components: {
    DateTime,
    ModalForm,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
},
validations: {
    up_sale: {
      required,  
    },
    dona_sale: {
        required,
    }
},
data(){
    return {
      shtrix1:null,
      searchDrag:null,
      showModal:false,
      showModalPay:false,
      columnss:['product_name',"real_qty","qty_in_pack","unit_saled_price","expired_date","summ"],
      columnsss:['product_name',"real_qty","unit_saled_price","expired_date","sale"],
      rowss:[],
      rowwss:[],
      product_name:'',
      qty:null,
      expired_date:'',
      skidka:0,
      unit_saled_price: null,
      ostatka_sale:null,
      up_sale:null,
      dona_sale:null,
      barObjectsss:{},
      mijoz_summ:null,
      contains_number_in_pack:null,
      Up_sale:null,
      Dona_sale:null,
      allDona:null,
      AllRows:[],
      clentSum:0,
      show_redBlue: false,
    //   data for Pay Modal
      mone:null,
      qaytim: null,
      RealPay:null,
      UzkardPay:null,
      HumoPay:null,
      ClikcPay:null,
      OnlinePay:null,
      AllInputVal:0,
      S:'',
      redBlue:null,
      show_div:true,
    // Data for Print start
        backspake_left:"<<",
        backspake_right: ">>",
        showPrint:false,
        print_data:"19.04.2022",
        print_product_name:"",
        print_pachka:null,
        print_Summa:null,
        print_all_summ:null,
        print_summ:null,
        ProduvtRows:['Название',"Кол_во","Цена","Итого"],
        kassir_name:localStorage.Name_kassir,
        tel_number:localStorage.Tel_number,

    // Data for Print end

    }
},
computed: {
    ...mapGetters(['rowwsss', 'allRowsSavat',"ClentSumma"]),
},
methods:{
    ...mapMutations(['getObj', 'addNewRows',"passRow","CountSumma"]),
    // Functions for Sale Start------
    async addBarcode1() {
        try {
            const response = await fetch(this.$store.state.hostname + "/PosInvoiceItems/getProductListForSaleByItemSearchByBarcode?barcode=" + this.shtrix1 + '&res_count=500');
            const data = await response.json();
            this.rowss=data;
            console.log('rowss',this.rowss)
            if (response.status == 201 || response.status == 200) {
                this.$refs.message.success("Added_successfully");
                return true;
            }
        } 
        catch {
            console.log("Connection error");
        }
    },
    async addSearch() {
        try {
            const response = await fetch(this.$store.state.hostname + "/PosInvoiceItems/getProductListForSaleByItemSearchByName?name=" + this.searchDrag + '&res_count=500');
            const data = await response.json();
            this.rowss=data;
            if (response.status == 201 || response.status == 200) {
                this.$refs.message.success("Added_successfully");
                return true;
            }
        } 
        catch {
            if(response.status == 400 || response.status == 404){
                this.$refs.message.error("Product Not Found");
                return true;
            } 
        }
    },
    pochka(){
        let x= parseFloat(this.up_sale*this.unit_saled_price)
        let y=this.unit_saled_price/this.contains_number_in_pack*this.dona_sale;
        this.mijoz_summ = (x+y).toFixed(2)
    },
    showRow(row){
        this.product_name=row.product_name,
        this.qty=row.real_qty,
        this.expired_date=row.expired_date,
        this.unit_saled_price=row.unit_saled_price,
        this.contains_number_in_pack=row.product.contains_number_in_pack,
        this.ostatka_sale=(row.qty)+"уп. " + (row.qty_in_pack) +"/"+row.product.contains_number_in_pack+" Шт"
        this.allDona=parseInt(row.qty*row.product.contains_number_in_pack)+parseInt(row.qty_in_pack)
        this.showModal=!this.showModal;

        // Bu yergacha Modal oynani Ochib uni "row" ning datalari bilan tuldirib chiqadi
        for(let i=0; i<this.rowwsss.length; i++){
            if(row.invoice.id == this.rowwsss[i].invoice_id){
                if(row.qty_in_pack<this.rowwsss[i].qty_in_pack){
                    let a =parseInt( this.rowwsss[i].qty_in_pack/row.qty_in_pack)
                    let qty=row.qty-a
                    let b=this.rowwsss[i].qty_in_pack - (a*row.qty_in_pack)
                    let c=row.product.contains_number_in_pack-b
                    qty=qty-this.rowwsss[i].real_qty;                  
                    this.ostatka_sale=(qty)+"уп. " + (c) +"/"+row.product.contains_number_in_pack+" Шт"
                    this.allDona=parseInt(qty*row.product.contains_number_in_pack)+parseInt(c)
                }
                else{
                    this.ostatka_sale=(row.qty - this.rowwsss[i].real_qty)+"уп. " + (row.qty_in_pack-this.rowwsss[i].qty_in_pack) +"/"+row.product.contains_number_in_pack+" Шт"
                    this.allDona=parseInt((row.qty - this.rowwsss[i].real_qty)*(row.product.contains_number_in_pack))+parseInt((row.qty_in_pack-this.rowwsss[i].qty_in_pack))
                }
            }
        }
        this.barObjectsss = {
            product_name: row.product_name,
            real_qty: null,
            qty_in_pack:null,
            summ: 0,
            contains_number_in_pack:row.product.contains_number_in_pack,
            unit_saled_price: row.unit_saled_price,
            expired_date:row.expired_date,
            change_price_status: true,
            id: 0,
            product_id: row.product.id,
            invoice_id: row.invoice.id,
        }; 
    },
    okay(){
        this.barObjectsss.real_qty=this.up_sale;
        this.barObjectsss.qty_in_pack = this.dona_sale;
        this.barObjectsss.summ=this.mijoz_summ;
        if(this.barObjectsss.real_qty===null){
            this.barObjectsss.real_qty=0
        }
        if(this.barObjectsss.qty_in_pack===null){
            this.barObjectsss.qty_in_pack=0
        }
        let AllDona=parseInt(this.barObjectsss.real_qty*this.barObjectsss.contains_number_in_pack)+parseInt(this.barObjectsss.qty_in_pack)
        if(AllDona<=this.allDona){
            this.getObj(this.barObjectsss)
            this.CountSumma(this.barObjectsss)
            this.up_sale=null,
            this.dona_sale=null,
            this.mijoz_summ=null,
            this.showModal=!this.showModal;
        }
        else{
            this.$refs.message.warning('Product is not enaught') 
        }
        this.clentSum=this.ClentSumma;
    },
    deleteTableSale(id) {
      this.rowwsss.splice(id, 1);
    },
    Otmena(){
        this.up_sale=null,
        this.dona_sale=null,
        this.mijoz_summ=null,
        this.showModal=!this.showModal;
    },
    addCustomer(){
        let row = [];
        this.addNewRows(row)
        this.clentSum=0;
    },
    PassKarzina(i){
        this.passRow(i)
        this.clentSum=this.ClentSumma;
    },
    DeletKarzina(i){
        this.allRowsSavat.splice(i,1)
    },
    // Functions for Sale End------

    // Functions for Pay Start-----
    Qaytim_funk(){
        if(this.mone == ''){
            this.qaytim=0;
        }
        else{
            this.qaytim=parseFloat(this.mone)-parseFloat(this.clentSum)
        }
    },

// Pay modal Function=====
    PayModalReal(){
        this.RealPay=this.clentSum
        this.showModalPay=!this.showModalPay;
    },
    PayModalUzcard(){
        this.UzkardPay=this.clentSum
        this.showModalPay=!this.showModalPay;
    },
    PayModalHumo(){
        this.HumoPay=this.clentSum
        this.showModalPay=!this.showModalPay;
    },
    PayModalClick(){
        this.ClikcPay=this.clentSum
        this.showModalPay=!this.showModalPay;
    },
    PayModalOnline(){
        this.OnlinePay=this.clentSum
        this.showModalPay=!this.showModalPay;
    },  
    ClearFunck(){

    },
// Pay modal Function=====
    PayFunctionOk(){
        this.showModalPay=!this.showModalPay;
    },
    otminaFunction(){
        this.mone=null
        this.qaytim=null
        this.RealPay=null,
        this.UzkardPay=null,
        this.HumoPay=null,
        this.ClikcPay=null,
        this.OnlinePay=null,
        this.AllInputVal=0,
        this.S='',
        this.showModalPay=!this.showModalPay;
        this.redBlue=null
    },
    RealPay_func(){
        this.S="";
        if(this.UzkardPay==null){
            this.UzkardPay=0;
        }
        if(this.ClikcPay==null){
            this.ClikcPay=0;
        }
        if(this.HumoPay==null){
            this.HumoPay=0;
        }
        if(this.OnlinePay==null){
            this.OnlinePay=0;
        }
        let RePay=0;
         RePay=parseFloat(this.clentSum)-(parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay)+parseFloat(this.OnlinePay))
        if(RePay>0){
            this.RealPay=RePay
        }
        this.Minus_Plus_funck()
    },
    Uzkard_function(){
        if(this.RealPay==null){
            this.RealPay=0;
        }
        if(this.ClikcPay==null){
            this.ClikcPay=0;
        }
        if(this.HumoPay==null){
            this.HumoPay=0;
        }
        if(this.OnlinePay==null){
            this.OnlinePay=0;
        }
        let UzPay=0
        UzPay=parseFloat(this.clentSum)-(parseFloat(this.RealPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay)+parseFloat(this.OnlinePay))
        if(UzPay>0){
            this.UzkardPay=UzPay
        }
        this.Minus_Plus_funck()
    },
    HumoPay_func(){
        if(this.RealPay==null){
            this.RealPay=0;
        }
        if(this.ClikcPay==null){
            this.ClikcPay=0;
        }
        if(this.UzkardPay==null){
            this.UzkardPay=0;
        }
        if(this.OnlinePay==null){
            this.OnlinePay=0;
        }
        let HPay=0;
        HPay=parseFloat(this.clentSum)-(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.ClikcPay)+parseFloat(this.OnlinePay))
        if(HPay>0){
            this.HumoPay=HPay
        }
        this.Minus_Plus_funck()
    },
    ClickPay_func(){
        if(this.RealPay==null){
            this.RealPay=0;
        }
        if(this.HumoPay==null){
            this.HumoPay=0;
        }
        if(this.UzkardPay==null){
            this.UzkardPay=0;
        }
        if(this.OnlinePay==null){
            this.OnlinePay=0;
        }
        let CPay=0
        CPay=parseFloat(this.clentSum)-(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.OnlinePay))
        if(CPay>0){
            this.ClikcPay=CPay
        }
        this.Minus_Plus_funck()
    },
    OnlinePay_runction(){
        if(this.RealPay==null){
            this.RealPay=0;
        }
        if(this.HumoPay==null){
            this.HumoPay=0;
        }
        if(this.UzkardPay==null){
            this.UzkardPay=0;
        }
        if(this.ClikcPay==null){
            this.ClikcPay=0;
        }
        let OPay=0
        OPay=parseFloat(this.clentSum)-(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay))
        if(OPay>0){
            this.OnlinePay=OPay
        }
        this.Minus_Plus_funck()
    },
    cheak_Real(){
        if(this.RealPay==null || this.RealPay==''){
            this.RealPay=0;
        }
        this.S="";
    },
    cheak_Uz(){
        if(this.UzkardPay==null || this.UzkardPay==''){
            this.UzkardPay=0;
        }
        this.S="";
    },
    cheak_Humo(){
        if(this.HumoPay==null || this.HumoPay==''){
            this.HumoPay=0;
        }
        this.S="";
    },
    cheak_Click(){
        if(this.ClikcPay==null || this.ClikcPay==''){
            this.ClikcPay=0;
        }
        this.S="";
    },
    cheak_Online(){
        if(this.OnlinePay==null || this.OnlinePay==''){
            this.OnlinePay=0;
        }
        this.S="";
    },
    Minus_Plus_funck(){
        let Sh =parseFloat(this.RealPay)+ parseFloat(this.UzkardPay)+parseFloat(this.ClikcPay)+parseFloat(this.OnlinePay)+parseFloat(this.HumoPay)
            let J = parseFloat(this.clentSum) - parseFloat(Sh)
            if(J==0){
                this.show_div=false
                console.log('J=000')
                console.log("J", J)
            }
            if(J>0){
                this.show_redBlue=true;
                this.redBlue= J*(-1);
                console.log("J>0")
                console.log("J", J)
                this.show_div=true;
            }
            if(J<0){
                this.show_redBlue=false;
                this.redBlue= (-1)*J;
                console.log("J<0")
                console.log("J", J)
                this.show_div=true;
            }
    },
    changeValue(e){
        let allValue=parseFloat(this.OnlinePay)+(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay))
        if(allValue==this.clentSum){
            this.RealPay=null
        } 
        if(e.key==0 || e.key==1 || e.key==2 || e.key ==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key ==8 || e.key==9){
        this.S=this.S+e.key
           this.Minus_Plus_funck()
            if(parseFloat(this.S)<this.clentSum){
                this.RealPay=parseFloat(this.S)
            } 
        }
    },
    changeValueUz(e){
            let allValueUz=parseFloat(this.OnlinePay)+(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay))

            if(allValueUz==this.clentSum){
                this.UzkardPay=null
            } 
            if(e.key==0 || e.key==1 || e.key==2 || e.key ==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key ==8 || e.key==9){
               this.S=this.S+e.key
               this.Minus_Plus_funck()
                if(parseFloat(this.S)<this.clentSum){
                    this.UzkardPay=parseFloat(this.S)
                } 
            }
    },
    changeValueHu(e){

            let allValueUz=parseFloat(this.OnlinePay)+(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay))

            if(allValueUz==this.clentSum){
                this.HumoPay=null
            } 
            if(e.key==0 || e.key==1 || e.key==2 || e.key ==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key ==8 || e.key==9){
               this.S=this.S+e.key
               this.Minus_Plus_funck()
                if(parseFloat(this.S)<this.clentSum){
                    this.HumoPay=parseFloat(this.S)
                } 
            }
    },
    changeValueClick(e){

            let allValueClick=parseFloat(this.OnlinePay)+(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay))

            if(allValueClick==this.clentSum){
                this.ClikcPay=null
            }

            if(e.key==0 || e.key==1 || e.key==2 || e.key ==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key ==8 || e.key==9){
            this.S=this.S+e.key
            this.Minus_Plus_funck()
                if(parseFloat(this.S)<this.clentSum){
                    this.ClikcPay=parseFloat(this.S)
                } 
            }
    },
    changeValueOnline(e){

            let allValueUz=parseFloat(this.OnlinePay)+(parseFloat(this.RealPay)+parseFloat(this.UzkardPay)+parseFloat(this.HumoPay)+parseFloat(this.ClikcPay))

            if(allValueUz==this.clentSum){
                this.OnlinePay=null
            }
            if(e.key==0 || e.key==1 || e.key==2 || e.key ==3 || e.key==4 || e.key==5 || e.key==6 || e.key==7 || e.key ==8 || e.key==9){
                this.S=this.S+e.key
                this.Minus_Plus_funck()  
                if(parseFloat(this.S)<this.clentSum){
                this.OnlinePay=parseFloat(this.S)
                }           
            }
    },
    // Functions for Pay End===

    // Function for Print Start==
    PrintFunction(){
        this.print_product_name=this.barObjectsss.product_name
        this.print_Summa=this.barObjectsss.unit_saled_price
        this.print_pachka=this.barObjectsss.contains_number_in_pack
        this.print_summ=this.barObjectsss.summ
        this.print_all_summ=this.ClentSumma
        setTimeout(() => {
            this.showPrint=!this.showPrint;
            
        }, 1000)
        setTimeout(() => { 
            window.print()
            this.showPrint=!this.showPrint;
        }, 1500)
        
    },
    // Function for Print End==

}
}


</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.button_okk button{
height: 30px;
width: 100%;
color: #fff;
font-size: 16px;
font-weight: 500;
font-family: sans-serif;
}
.button_okk .btn-success{
    margin: 10px 0px;
}
.fixedP{
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
.box{
    background: rgb(255, 255, 255);
    width: 600px;
    height: 500px;
    overflow: hidden;
}

.skidka-value .form-control{
    height: 40px;
    background: #fff;
    border-radius: 0;
    margin-top: 10px;
}
.clentAllSum h1{
    font-size: 35px;
    font-weight: 700;
    font-family: sans-serif;
    color: black;
    line-height: 35px;
}
.first-row{
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    /* border: 1px solid red; */
}
.price_button{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
}
.all_input, .price_button .title{
    text-align: start;
}
.price_button .title p{
    font-size: 16px;
    color: gray;
    font-weight: 700;
    text-align: start;
}

.price_button .input .form-control{
    text-align: end;
    height: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
}
.all_input{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.all_input .input .form-control{
    text-align: end;
    height: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
}
.all_input .title p{
    font-size: 16px;
    color: gray;
    font-weight: 700;
    text-align: start;
}
.title{
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
}
.for-bottom{
    display: flex;
    align-items: end;
}
.ok{
    margin-right: 5px;
    width: 90%;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 500;
    font-family: sans-serif;
}
.otmena{
    padding: 5px 15px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    font-family: sans-serif;
}
.modal-box{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    
}
.button-sale{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
}
.button_ok{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.Shtt{
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    max-height: 100px;
    width: 100%;
}
.summaa{
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    max-height: 100px;
    width: 100%;
}
.modal-box p{
    text-align: start;
    padding-left: 5px;
    font-weight: 500;
    color: gray;
    font-size: 16px;
}
.SinaSkidka{
    display: flex;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
}

.karzina-btn{
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px;
    border-top: 1px solid #979292;
    border-bottom: 1px solid #979292;
}
.header-main tbody{
    border-bottom: 1px solid #979292;
}
.table-two tbody{
    border-bottom: 1px solid #979292;
}
.shtrix-btn{
    display: flex;
    align-items: center;
    justify-content: start;
    border-top: 1px solid #979292;
    border-bottom: 1px solid #979292;
    padding: 5px;
}
.search{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    min-width: 420px;
}
.shtrix-box{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    min-width: 300px;
}
.iskat{
    border: none;
    outline: none;
    height: 30px;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid #979292;
    font-size: 18px;
}
.shtrix{
    border: none;
    outline: none;
    height: 30px;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid blue;
    font-size: 18px;
}
.text p{
    text-align: start;
    padding-left: 5px;
}
.savat1{
     position: relative;
}
.savat1 button{
    background: orange;
    color: white;
    padding: 5px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
}
.xxxx{
    position: absolute;
    top: 0;
    right: 0;
}
.savat2 button{
    padding: 3px 5px;
    outline: none;
    border: none;
    background: #00c851;
    border-radius: 50%;
    margin-left: 10px;
}
.plus{
   font-size: 15px;
   color: #fff;
}

.header-top{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;  
}
.header-main{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
}
.tables{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.table-one{
    width: 100%;
}
/* .table-one::-webkit-scrollbar {
  display: none;
} */
.table-two{
    width: 100%;
}
.table-btns{
    width: 100%;
}
/* .table-two::-webkit-scrollbar {
  display: none;
} */
.sales{
    width: 30%;
    border: 1px solid #979292;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
}
.chek1{
    box-sizing: border-box;
    
}
.sumSkidke{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 50%;
}
.paragrif{
     border-bottom: 1px solid #979292;
     border-top: 1px solid #979292;  
}
.oplate{
   height: 50%;
}
.koplate{
    height: 100%;
    border: 1px dotted #979292;
}
.summa{
    height: 100%;
    border: 1px dotted #979292; 
}
.summa p{
    font-size: 30px;
    padding: 0 10px;

}
.skidka{
    height: 100%;
 border: 1px dotted #979292;
}
.chek2{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
}
.ico{
    margin-right: 8px;
}
.main{
    height: 100vh;
    background: #fff;
}
.text1{
    width: 70%;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    border-bottom: 1px solid #979292;
}
.text2{
    width: 30%;
    min-height: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
     border-bottom: 1px solid #979292;
     box-sizing: border-box;
}
.btns1{
    border: none;
    outline: none;
    background: transparent;
    color: red;
    font-weight: 600;
    font-size: 15px;
    border-radius: 10px;
    margin-right: 5px;
    padding: 0 5px;
    border-bottom: 1px solid red;
    transition: 1.5s;
    
}
.btns1:hover{
color: #fff;
background: red;
}
/* .border-r{
    border-right: 1px solid #979292;
} */
.btns2{
    border: none;
    outline: none;
    background: transparent;
    color: orange;
    font-weight: 600;
    font-size: 15px;
    border-radius: 10px;
    margin-right: 5px;
    padding: 0 5px;
    border-bottom: 1px solid orange;
    transition: 1.5s;
}
.btns2:hover{
color: #fff;
background: orange;
}
.btns3{
    color: black;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    margin: 0 5px;
}
.buttonss{
    width: 28%;
    /* height: 30px; */
}
.buttonsss{
    width: 40%;
    /* height: 30px; */
}
.text-box{
    display: flex;
    align-items: center;
    min-height: 30px;
    
}
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background: #fff;
   margin-top: 5px;
}
table .main-row {
  background: rgb(181, 241, 241);
}
th {
  font-size: 16px;
  font-weight: 600;
  color: black;
  padding: 5px 5px;
  text-align: start;
  width: 100px;
}
th:nth-child(1){
    width: 35px;
    text-align: center;
}
.main-row th:nth-child(2) {
  min-width: 260px;
}
th:nth-child(3){
    width: 100px;
}
th:nth-child(4){
    width: 100px;
}
th:nth-child(6){
    width: 200px;
}
th:nth-child(5){
    width: 200px;
}
td {
  font-size: 16px;
  font-weight: 400;
  color: rgb(124, 120, 120);
  padding: 5px 8px;
  text-align: start;
}
td:nth-child(1){
    width: 35px;
    text-align: center;
}
.main-row td:nth-child(2){
    min-width: 260px;
}
td:last-child{
    width: 65px;
    text-align: center;
}
.form-control {
  padding-left: 5px;
}
.btns{
   border: none;
   outline: none;
   background: transparent;
}
.trash{
    color: red;
}
.red_blue{
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 600;
    text-align: end;
}
.blue_color{
    color:blue;
}
.red_coor{
    color:red
}
/* Style For Print Start */
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
    height: 600PX;
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

.boxy{
    width: 50%;
}
.Print_table{
    background: yellow;
}
.boxy_cha .Product_row th{
    margin-top: 5px;
    text-align: center;
    color: black;
    font-size: 14px;
    font-weight: 600;
}
.Product_row td{
    margin-top: 5px;
    text-align: center;
    color: black;
    font-size: 14px;
    font-weight: 600;
}
.Product_row td:nth-child(1){
    text-align: start;
    color: black;
    font-size: 14px;
    font-weight: 600;
}
.Product_row td:nth-child(4){
    text-align: end;
    color: black;
    font-size: 14px;
    font-weight: 600;
}
.Product_row th:nth-child(1){
    text-align: start;
    color: black;
    font-size: 14px;
    font-weight: 600;
}
.Product_row th:nth-child(4){
    text-align: end;
    color: black;
    font-size: 14px;
    font-weight: 600;
}
/* Style For Print end */


</style>