export default {
    state: {
      sklads: {
        columns: ['name'],
        rows: [

        ],
      },
    },
    actions: {
      async fetchSklad(ctx) {
        const res = await fetch(ctx.rootState.hostname +'/PosSklads');
        const res_data = await res.json();
        ctx.commit('updateSklad', res_data);
       
      },
    },
    mutations: {
        DeleteRowSklad(state, indexx) {
        state.sklads.rows.splice(indexx, 1)
        console.log(state.sklads)
      },
      AddSklad(state, newsklads) {
        state.sklads.rows.push(newsklads)
      },
      updateSklad(state, data) {
        state.sklads.rows = data
      }
    },
    getters: {
      sklads(state) {
        return state.sklads
      }
    },
    modules: {
  
    }
  }