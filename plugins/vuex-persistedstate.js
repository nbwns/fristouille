import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  if (process.client) {
    window.onNuxtReady(() => {
      createPersistedState({
        key: "vuex", // this is the default, but being explicit doesn't hurt
        paths: ["dark"],
        storage: window.localStorage,
      })(store);
    });
  }
};
