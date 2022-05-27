export default {
    state: {
      users: {
        columns: ['fio','phone_number','address'],
        rows: [

        ],
      },
    },
    actions: {
      async fetchUser(ctx) {
        const res = await fetch(ctx.rootState.hostname+'/PosUsers');
        const res_data = await res.json();
        ctx.commit('updateUser', res_data);
       
      },
    },
    mutations: {
      deleteUsers(state, indexx) {
        state.users.rows.splice(indexx, 1)
      },
      AddUser(state, newusers) {
        state.users.rows.push(newusers)
      },
      updateUser(state, data) {
        console.log('salom bolalar',data)
        state.users.rows = data
      }
    },
    getters: {
      users(state) {
        return state.users
      }
    },
    modules: {
  
    }
  }