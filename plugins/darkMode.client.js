export default ({ store }) => {
  // Function to apply dark mode
  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Apply dark mode based on stored state
  const savedState = JSON.parse(localStorage.getItem("vuex") || "{}");
  if (savedState.dark !== undefined) {
    store.commit("toggleDarkMode", savedState.dark);
    applyDarkMode(savedState.dark);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    store.commit("toggleDarkMode", true);
    applyDarkMode(true);
  }

  // Watch for changes in the dark mode state
  store.watch(
    (state) => state.dark,
    (newValue) => {
      applyDarkMode(newValue);
    }
  );
};
