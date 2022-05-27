export default {
    state: {
        AllRows:[[]],
        selectIndex:0,
        Summa:0,
    },
    actions: {
     
    },
    mutations: {
      getObj(state, data) {
          console.log("Jamshid Qara",data)

            if(state.AllRows[state.selectIndex].length==0){

                state.AllRows[state.selectIndex].push(data)
                if(data.qty_in_pack>data.contains_number_in_pack){
                    let donalar=parseFloat(state.AllRows[state.selectIndex][0].qty_in_pack)
                    let pachkalar=parseFloat(state.AllRows[state.selectIndex][0].real_qty)
                    if(donalar>data.contains_number_in_pack){
                        let quti=parseInt(donalar/data.contains_number_in_pack) 
                        let donacha=donalar-(quti*data.contains_number_in_pack)
                        pachkalar=pachkalar+quti
                        state.AllRows[state.selectIndex][0].real_qty=pachkalar
                        state.AllRows[state.selectIndex][0].qty_in_pack=donacha
                    }  
                }
            }
            else{
                let s=0
                for(let i=0; i<state.AllRows[state.selectIndex].length; i++){
                    if(state.AllRows[state.selectIndex][i].invoice_id == data.invoice_id){
                        s++;
                        let donalar=parseFloat(state.AllRows[state.selectIndex][i].qty_in_pack)+ parseFloat(data.qty_in_pack)
                        let pachkalar=parseFloat(state.AllRows[state.selectIndex][i].real_qty)+parseFloat(data.real_qty)
                        if(donalar>data.contains_number_in_pack){
                            let quti=parseInt(donalar/data.contains_number_in_pack) 
                            let donacha=donalar-(quti*data.contains_number_in_pack)
                            pachkalar=pachkalar+quti
                            state.AllRows[state.selectIndex][i].real_qty=pachkalar
                            state.AllRows[state.selectIndex][i].qty_in_pack=donacha
                        }
                        else{
                        state.AllRows[state.selectIndex][i].real_qty=parseFloat(state.AllRows[state.selectIndex][i].real_qty)+parseFloat(data.real_qty) 
                        state.AllRows[state.selectIndex][i].qty_in_pack=parseFloat(state.AllRows[state.selectIndex][i].qty_in_pack)+ parseFloat(data.qty_in_pack)
                        }
                        state.AllRows[state.selectIndex][i].summ=parseFloat(state.AllRows[state.selectIndex][i].summ)+ parseFloat(data.summ)
                        return;
                    }
                }
                if(s == 0){
                    state.AllRows[state.selectIndex].push(data)
                }
            } 
            // let Summa=0;
            // for(let i=0; i<state.AllRows[state.selectIndex].length; i++){
            //    state.Summa=state.Summa+state.AllRows.selectIndex[i].summ
            // }
            // console.log('Summa',state.Summa)

      },
      CountSumma(state, data){
        console.log(" Qara",data)
        let a=0;
          for(let i=0; i<state.AllRows[state.selectIndex].length; i++){
              console.log('state.AllRows[state.selectIndex]')
              console.log(state.AllRows[state.selectIndex])
              a = a + parseFloat(state.AllRows[state.selectIndex][i].summ)
              console.log("a",a)

              state.Summa=a;
              console.log("Summaaa",state.Summa)
          }
      },
      addNewRows(state,data){
          state.AllRows.push(data)
          state.selectIndex = state.AllRows.length - 1;

      },
      passRow(state,index){
          state.selectIndex=index;
          let b=0;
          for(let i=0; i<state.AllRows[index].length; i++){
              console.log('state.AllRows[state.selectIndex]')
              console.log(state.AllRows[state.selectIndex])
              b = b + parseFloat(state.AllRows[index][i].summ)
              console.log("b",b)
              state.Summa=0;
              state.Summa=b;
              console.log("B Summaaa",state.Summa)
          }
      },
    },
    getters: {
    rowwsss(state) {
        return state.AllRows[state.selectIndex]
      },
    allRowsSavat(state) {
        return state.AllRows
    },
    ClentSumma(state){
        return state.Summa
    }
    },
    modules: {
  
    }
  }