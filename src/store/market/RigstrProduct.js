export default {
  state: {
    products: {
      columns: ['global_name', 'name', 'id', 'dozirofka', 'note'],
      rows: [

      ],
    },
  },
  actions: {
    async fetchProduct(ctx) {
      const res = await fetch(ctx.rootState.hostname + '/PosProducts');
      const res_data = await res.json(); 
      console.log(ctx.rootState.hostname);
      ctx.commit('updateProduct', res_data);
    },
  },
  mutations: {
    DeleteProductRow(state, indexx) {
      state.products.rows.splice(indexx, 1)
    },
    AddProduct(state, newproduct) {
      state.products.rows.push(newproduct)
    },
    updateProduct(state, data) {
      state.products.rows = data
    }
  },
  getters: {
    products(state) {
      return state.products
    }
  },
  modules: {

  }
}