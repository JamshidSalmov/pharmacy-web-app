export default {
  state: {
    catigory: {
      columns: ["name"],
      rows: [

      ],
    },
  },
  actions: {
    async fetchCatigory(ctx) {
      const res = await fetch(ctx.rootState.hostname +'/PosCategories');
      const res_data = await res.json();
      ctx.commit('updateCatigory', res_data);
    },
  },
  mutations: {
    deleteCategory(state, indexx) {
      state.catigory.rows.splice(indexx, 1)
    },
    addCatigory(state, newCatigory) {
      state.catigory.rows.push(newCatigory)
    },
    updateCatigory(state, data) {
      console.log(data)
      state.catigory.rows = data
    }
  },
  getters: {
    catigory(state) {
      return state.catigory
    }
  },
  modules: {

  }
}