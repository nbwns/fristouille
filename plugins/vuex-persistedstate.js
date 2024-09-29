import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  console.log("vuex-persistedstate plugin running");
  if (process.client) {
    console.log("Initializing vuex-persistedstate");
    createPersistedState({
      paths: ["dark"],
      storage: window.localStorage,
    })(store);
    console.log("vuex-persistedstate initialized");
  }
};
