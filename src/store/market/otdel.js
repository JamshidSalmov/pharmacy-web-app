export default {
    state: {
      otdels: {
        columns: ['name'],
        rows: [

        ],
      },
    },
    actions: {
      async fetchOtdel(ctx) {
        const res = await fetch(ctx.rootState.hostname+ '/PosDepartments');
        const res_data = await res.json();
        ctx.commit('updateOtdel', res_data);
      },
    },
    mutations: {
        DeleteRowOtdel(state, indexx) {
        state.otdels.rows.splice(indexx, 1)
      },
      AddOtdel(state, newotdels) {
        state.otdels.rows.push(newotdels)
      },
      updateOtdel(state, data) {
        state.otdels.rows = data
      }
    },
    getters: {
      otdels(state) {
        return state.otdels
      }
    },
    modules: {
  
    }
  }