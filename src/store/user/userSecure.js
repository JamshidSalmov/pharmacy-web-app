export default {
    state: {
    },
    actions: {
      async fetchUserSecure(ctx) {
        const res = await fetch(ctx.rootState.hostname+'/PosUsePosAuthorizationsrs');
        const res_data = await res.json();
        ctx.commit('updateUser', res_data);
       
      },
    },
    mutations: {

    },
    modules: {
  
    }
  }