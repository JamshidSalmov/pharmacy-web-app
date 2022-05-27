export default {
  state: {
    measures: {
      columns: ["name",  "created_date_time"],
      rows: [

      ],
    },
  },
  actions: {
    async fetchMeasurment(ctx) {
      const res = await fetch(ctx.rootState.hostname + '/PosProductUnitMeasurments');
      const res_data = await res.json();
      ctx.commit('updateMeasurment', res_data);
    },
  },
  mutations: {
    DeleteRowMeasure(state, indexx) {
      state.measures.rows.splice(indexx, 1)
    },
    addMeasure(state, newMeasure) {
      state.measures.rows.push(newMeasure)
    },
    updateMeasurment(state, data) {
      state.measures.rows = data
    }
  },
  getters: {
    measures(state) {
      return state.measures
    }
  },
  modules: {

  }
}