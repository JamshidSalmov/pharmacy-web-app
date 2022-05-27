export default {
    state: {
      companys: {
        columns: ["name"],
        rows: [
  
        ],
      },
    },
    actions: {
      async fetchCompany(ctx) {
        const res = await fetch(ctx.rootState.hostname +'/PosCompanies');
        const res_data = await res.json();
        ctx.commit('updateCompany', res_data);
      },
    },
    mutations: {
      DeleteRowCompany(state, indexx) {
        state.companys.rows.splice(indexx, 1)
      },
      AddCompany(state, newMeasure) {
        state.companys.rows.push(newMeasure)
      },
      updateCompany(state, data) {
        state.companys.rows = data
      }
    },
    getters: {
      companys(state) {
        return state.companys
      }
    },
    modules: {
  
    }
  }