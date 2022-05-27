export default {
    state: {
      buying: {
        columns: ['created_date_time_str',  'credit_sum','summ'],
        rows: [
  
        ],
      },
    },
    actions: {
      async fetchBuy(ctx) {
        const res = await fetch(ctx.rootState.hostname + '/PosInvoices/getPagination?page=0&size=100');
        const res_data = await res.json(); 
        console.log(ctx.rootState.hostname);
        ctx.commit('updateBuy', res_data);
        console.log('salom',res_data)
      },
    },
    mutations: {
        DeleteRowBuy(state, indexx) {
        state.buying.rows.splice(indexx, 1)
      },
      updateBuy(state, data) {
        console.log(data)
        state.buying.rows = data.items_list
      }
    },
    getters: {
      buying(state) {
        return state.buying
      }
    },
    modules: {
  
    }
  }