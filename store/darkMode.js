import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkMode", {
  state: () => ({
    dark: false,
  }),
  actions: {
    toggleDarkMode() {
      this.dark = !this.dark;
      this.applyDarkMode();
    },
    initDarkMode() {
      if (process.client) {
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode !== null) {
          this.dark = JSON.parse(savedDarkMode);
        } else if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          this.dark = true;
        }
        this.applyDarkMode();
      }
    },
    applyDarkMode() {
      if (process.client) {
        if (this.dark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", JSON.stringify(this.dark));
      }
    },
  },
});
