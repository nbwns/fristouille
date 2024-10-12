<template>
  <section class="hidden md:flex mx-10 md:mx-0">
    <div class="flex flex-col w-full items-start bg-background space-y-0 layer__xl mx-auto">
      <h2 class="text-primary-foreground">
        des recettes...
      </h2>
      <div class="flex flex-col justify-center">
        <div class="flex flex-row justify-between items-center my-3 space-x-6">
          <div class="flex flex-row space-x-2 items-center">
            <!-- seasons tags -->
            <nuxt-link v-for="s in currentSeasons" :key="s" :to="`/Recettes?${getSeasonQuery(s)}`">
              <quick-filter>
                {{ s }}
              </quick-filter>
            </nuxt-link>
            <!-- quick search tags -->
            <nuxt-link v-for="(t, index) in quickSearchTags" :key="index" :to="`/Recettes${t.tag_query}`">
              <quick-filter>
                {{ t.tag_title }}
              </quick-filter>
            </nuxt-link>
          </div>
          <!-- filters -->
          <span>
            <hyper-link path="/Recettes"
              class="font-sans text-base font-medium text-primary-foreground hover:text-underline">
              voir tout les filtres
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
        seasons.push("hiver");
      }
      if (month in this.seasonsAndMonths.spring) {
        seasons.push("printemps");
      }
      if (month in this.seasonsAndMonths.summer) {
        seasons.push("été");
      }
      if (month in this.seasonsAndMonths.autumn) {
        seasons.push("automne");
      }

      return seasons;
    }
  },
  methods: {
    getSeasonQuery(s) {
      let months;
      switch (s) {
        case "hiver":
          months = Object.values(this.seasonsAndMonths.winter);
          break;
        case "printemps":
          months = Object.values(this.seasonsAndMonths.spring);
          break;
        case "été":
          months = Object.values(this.seasonsAndMonths.summer);
          break;
        case "automne":
          months = Object.values(this.seasonsAndMonths.autumn);
          break;
      }

      return months.map((m) => `months=${m}`).join('&');
    }
  }
}
</script>
