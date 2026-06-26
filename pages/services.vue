<template>
<!-- PAGE SERVICES FRISTOUILLE — à intégrer dans le slot de contenu Nuxt/Prismic -->
<!-- Utilise uniquement les classes Tailwind + conventions du site existant -->

<div class="container mx-auto px-4 py-8 space-y-12">

  <!-- HERO -->
  <div class="space-y-3">
    <h1 class="text-foreground text-3xl font-demi ligatures-none lowercase leading-tight">
      animations & ateliers en alimentation durable
    </h1>
    <p class="text-foreground/70 text-base font-light leading-relaxed">
      J'interviens auprès d'associations, communes, écoles et entreprises à Bruxelles pour sensibiliser leurs publics à une alimentation plus durable — de manière ludique, pratique et conviviale.
    </p>
    <a
      href="mailto:nicolas@fristouille.org"
      class="inline-flex h-9 px-4 items-center justify-center bg-secondary hover:bg-primary text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:focus-visible:ring-purple-300 focus-visible:ring-offset-2"
    >
      Me contacter pour un projet
    </a>
  </div>

  <!-- CHIFFRES CLÉS -->
  <div class="grid grid-cols-3 gap-3">
    <div class="flex flex-col rounded-md bg-secondary border border-primary-foreground/10 px-4 py-4">
      <span class="text-2xl font-demi text-foreground">900+</span>
      <span class="text-xs text-foreground/60 font-light leading-tight mt-1">élèves sensibilisés en écoles bruxelloises</span>
    </div>
    <div class="flex flex-col rounded-md bg-secondary border border-primary-foreground/10 px-4 py-4">
      <span class="text-2xl font-demi text-foreground">250+</span>
      <span class="text-xs text-foreground/60 font-light leading-tight mt-1">animateurs de mouvements de jeunesse formés</span>
    </div>
    <div class="flex flex-col rounded-md bg-secondary border border-primary-foreground/10 px-4 py-4">
      <span class="text-2xl font-demi text-foreground">10+</span>
      <span class="text-xs text-foreground/60 font-light leading-tight mt-1">ans d'expérience en alimentation durable</span>
    </div>
  </div>

  <!-- POUR QUI -->
  <div class="space-y-4">
    <h2 class="text-foreground text-lg font-demi ligatures-none lowercase">pour qui ?</h2>
    <div class="space-y-3">

      <div class="flex gap-4 rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4">
        <div class="text-xl mt-0.5">🏛️</div>
        <div>
          <p class="text-sm font-medium text-foreground">Communes, associations & services publics</p>
          <p class="text-sm text-foreground/60 font-light mt-0.5">Sensibilisation des habitants, animations dans le cadre de projets alimentaires ou environnementaux, formations d'équipes.</p>
        </div>
      </div>

      <div class="flex gap-4 rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4">
        <div class="text-xl mt-0.5">🏫</div>
        <div>
          <p class="text-sm font-medium text-foreground">Écoles & mouvements de jeunesse</p>
          <p class="text-sm text-foreground/60 font-light mt-0.5">Animations adaptées aux enfants et ados pour découvrir les légumes, comprendre les saisons et cuisiner ensemble.</p>
        </div>
      </div>

      <div class="flex gap-4 rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4">
        <div class="text-xl mt-0.5">🏢</div>
        <div>
          <p class="text-sm font-medium text-foreground">Entreprises</p>
          <p class="text-sm text-foreground/60 font-light mt-0.5">Ateliers cuisine durable pour sensibiliser le personnel dans le cadre d'une démarche RSE ou environnementale.</p>
        </div>
      </div>

      <div class="flex gap-4 rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4">
        <div class="text-xl mt-0.5">🥕</div>
        <div>
          <p class="text-sm font-medium text-foreground">Producteurs durables</p>
          <p class="text-sm text-foreground/60 font-light mt-0.5">Ateliers cuisine ou recettes sur mesure pour valoriser vos produits auprès de vos clients.</p>
        </div>
      </div>

    </div>
  </div>

  <!-- CE QUE JE PROPOSE -->
  <div class="space-y-4">
    <h2 class="text-foreground text-lg font-demi ligatures-none lowercase">ce que je propose</h2>
    <div class="space-y-2">
      <div class="flex items-start gap-3 py-2 border-b border-primary-foreground/10">
        <span class="text-foreground/30 text-sm font-mono mt-0.5">01</span>
        <div>
          <p class="text-sm font-medium text-foreground">Animations & formations</p>
          <p class="text-sm text-foreground/60 font-light">Théoriques et pratiques, pour enfants, ados et adultes. Formats adaptés au public et à la durée souhaitée.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 py-2 border-b border-primary-foreground/10">
        <span class="text-foreground/30 text-sm font-mono mt-0.5">02</span>
        <div>
          <p class="text-sm font-medium text-foreground">Création de contenu pédagogique</p>
          <p class="text-sm text-foreground/60 font-light">Livrets, fiches recettes, outils de sensibilisation pour faciliter la mise en pratique de l'alimentation durable.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 py-2 border-b border-primary-foreground/10">
        <span class="text-foreground/30 text-sm font-mono mt-0.5">03</span>
        <div>
          <p class="text-sm font-medium text-foreground">Conception de recettes durables</p>
          <p class="text-sm text-foreground/60 font-light">Recettes végétariennes avec des ingrédients locaux et de saison, adaptées à votre public cible et à votre budget.</p>
        </div>
      </div>
      <div class="flex items-start gap-3 py-2">
        <span class="text-foreground/30 text-sm font-mono mt-0.5">04</span>
        <div>
          <p class="text-sm font-medium text-foreground">Outils numériques sur mesure</p>
          <p class="text-sm text-foreground/60 font-light">Générateurs de menu, bases de données de recettes et autres outils pour faciliter votre démarche alimentaire.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- TÉMOIGNAGES -->
  <div class="space-y-4">
    <h2 class="text-foreground text-lg font-demi ligatures-none lowercase">ils et elles témoignent</h2>
    <div class="space-y-3">

      <figure class="rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4 space-y-2">
        <blockquote class="text-sm text-foreground/80 font-light leading-relaxed italic">
          "Fristouille c'est une vraie maîtrise du sujet de l'alimentation durable associée à une approche adaptée au public. Les ateliers ont toujours été organisés à la perfection avec, en prime, une dégustation colorée et gustativement inoubliable !"
        </blockquote>
        <figcaption class="text-xs text-foreground/50 font-mono">Pauline Talbot — Zero Waste Belgium</figcaption>
      </figure>

      <figure class="rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4 space-y-2">
        <blockquote class="text-sm text-foreground/80 font-light leading-relaxed italic">
          "Nous avons passé un super moment à cuisiner puis déguster entre collègues un repas entièrement végétarien. Les recettes proposées étaient à la fois très simples et délicieuses. Tout le monde était ravi."
        </blockquote>
        <figcaption class="text-xs text-foreground/50 font-mono">Céline — Commune de Watermael-Boitsfort</figcaption>
      </figure>

      <figure class="rounded-md bg-secondary border border-primary-foreground/10 px-5 py-4 space-y-2">
        <blockquote class="text-sm text-foreground/80 font-light leading-relaxed italic">
          "C'était super chouette d'avoir autre chose à la place des cours, et en plus de faire des recettes qui respectent l'environnement."
        </blockquote>
        <figcaption class="text-xs text-foreground/50 font-mono">Élève — Centre Scolaire Saint-Adrien Val Duchesse</figcaption>
      </figure>

    </div>
  </div>

  <!-- RÉALISATIONS -->
  <div class="space-y-4">
    <h2 class="text-foreground text-lg font-demi ligatures-none lowercase">quelques réalisations</h2>
    <ul class="space-y-1.5 text-sm text-foreground/70 font-light">
      <li class="flex items-start gap-2"><span class="text-foreground/30 mt-1">—</span>Animations en alimentation durable dans des écoles maternelles, primaires et secondaires bruxelloises</li>
      <li class="flex items-start gap-2"><span class="text-foreground/30 mt-1">—</span>Formation de 250+ animateurs de mouvements de jeunesse à la cuisine durable</li>
      <li class="flex items-start gap-2"><span class="text-foreground/30 mt-1">—</span>Démos culinaires au Brussels Food Festival, journée Good Food, Oxfam Cooking Fair</li>
      <li class="flex items-start gap-2"><span class="text-foreground/30 mt-1">—</span>Livrets et fiches cuisine pour Bruxelles Environnement</li>
    </ul>
    <a
      href="http://b2b.fristouille.org/"
      target="_blank"
      rel="noopener"
      class="inline-flex h-8 px-3.5 items-center justify-center bg-secondary hover:bg-primary text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:focus-visible:ring-purple-300 focus-visible:ring-offset-2"
    >
      Toutes nos réalisations →
    </a>
  </div>

  <!-- CTA CONTACT -->
  <div class="rounded-md bg-secondary border border-primary-foreground/10 px-6 py-6 space-y-3">
    <h2 class="text-foreground text-lg font-demi ligatures-none lowercase">on travaille ensemble ?</h2>
    <p class="text-sm text-foreground/70 font-light leading-relaxed">
      Tu as un projet de sensibilisation, un atelier à organiser ou une idée à creuser ? Dis-moi ce que tu as en tête, on voit ensemble ce qui est faisable.
    </p>
    <a
      href="mailto:nicolas@fristouille.org"
      class="inline-flex h-9 px-4 items-center justify-center bg-secondary hover:bg-primary text-primary-foreground border border-primary-foreground/10 hover:border-primary-foreground/60 rounded whitespace-nowrap text-sm font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:focus-visible:ring-purple-300 focus-visible:ring-offset-2"
    >
      nicolas@fristouille.org
    </a>
  </div>

</div>
</template>