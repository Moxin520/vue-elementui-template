// const settings = {
const state = {
  menuOpen: true
};

const mutations = {
  SET_MENUOPEN: (state, menuOpen) => {
    state.menuOpen = menuOpen;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
