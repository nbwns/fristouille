import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  console.log("vuex-persistedstate plugin running");
  if (process.client) {
    console.log("Initializing vuex-persistedstate");
    try {
      createPersistedState({
        paths: ["dark"],
        storage: window.localStorage,
      })(store);
      console.log("vuex-persistedstate initialized successfully");
      console.log("Current dark mode state:", store.state.dark);
    } catch (error) {
      console.error("Error initializing vuex-persistedstate:", error);
    }
  } else {
    console.log("Not initializing vuex-persistedstate (server-side)");
  }
};
