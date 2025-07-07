<template>
  <section class="hidden md:flex w-full">
    <div class="flex flex-col w-full items-start bg-background">
      <h2 class="text-primary-foreground text-xl lg:text-2xl">
        découvre des recettes
      </h2>
      <div class="flex flex-col justify-center">
        <div class="flex flex-row justify-between items-center my-3 space-x-6">
          <div class="flex flex-row space-x-2 items-center">
            <!-- seasons tags -->
            <nuxt-link v-for="s in currentSeasons" :key="s" :to="`/recettes/?${getSeasonQuery(s)}`">
              <quick-filter>
                {{ s }}
              </quick-filter>
            </nuxt-link>
            <!-- quick search tags -->
            <nuxt-link v-for="(t, index) in quickSearchTags" :key="index" :to="`/recettes/${t.tag_query}`">
              <quick-filter>
                {{ t.tag_title }}
              </quick-filter>
            </nuxt-link>
          </div>
          <!-- filters -->
          <span>
            <hyper-link path="/recettes/"
              class="font-mono font-medium text-sm underline hover:underline-offset-2 text-primary-foreground hover:text-underline">
              ou farfouille dans toutes les recettes
            </hyper-link>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import QuickFilter from '~/molecules/Filter.vue'
import HyperLink from '~/molecules/HyperLink.vue'

export default {
  components: {
    QuickFilter,
    HyperLink
  },
  props: {
    quickSearchTags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      seasonsAndMonths: {
        winter: { 11: "Décembre", 0: "Janvier", 1: "Février", 2: "Mars" },
        spring: { 2: "Mars", 3: "Avril", 4: "Mai", 5: "Juin" },
        summer: { 5: "Juin", 6: "Juillet", 7: "Août", 8: "Septembre" },
        autumn: { 8: "Septembre", 9: "Octobre", 10: "Novembre", 11: "Décembre" }
      }
    }
  },
  computed: {
    currentSeasons() {
      let month = new Date().getMonth();

      let seasons = [];
      if (month in this.seasonsAndMonths.winter) {
        seasons.push("d'hiver");
      }
      if (month in this.seasonsAndMonths.spring) {
        seasons.push("de printemps");
      }
      if (month in this.seasonsAndMonths.summer) {
        seasons.push("d'été");
      }
      if (month in this.seasonsAndMonths.autumn) {
        seasons.push("d'automne");
      }

      return seasons;
    }
  },
  methods: {
    getSeasonQuery(s) {
      let months;
      switch (s) {
        case "d'hiver":
          months = Object.values(this.seasonsAndMonths.winter);
          break;
        case "de printemps":
          months = Object.values(this.seasonsAndMonths.spring);
          break;
        case "d'été":
          months = Object.values(this.seasonsAndMonths.summer);
          break;
        case "d'automne":
          months = Object.values(this.seasonsAndMonths.autumn);
          break;
      }

      return months.map((m) => `months=${m}`).join('&');
    }
  }
}
</script>
