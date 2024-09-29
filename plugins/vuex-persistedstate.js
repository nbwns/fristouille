import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  if (process.client) {
    createPersistedState({
      paths: ["dark"],
      storage: window.localStorage,
    })(store);
  }
};
