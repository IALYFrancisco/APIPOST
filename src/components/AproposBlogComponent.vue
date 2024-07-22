<template>
  <div class="aproposblog">
    <ul>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos">Qui l'a développée?</RouterLink>
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/avec quoiestelledeveloppee"
              >Avec quoi est-elle développée?</RouterLink
            >
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/etapesdedeveloppement">Etapes de développement</RouterLink>
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/github">Github</RouterLink>
          </p>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div.aproposblog {
  border-right: 0.1px solid #33333334;
  width: 225px;
  height: 50vh;
  margin-left: -200px;
  margin-top: 50px;
  margin-right: 70px;
  font-size: 14px;
  line-height: 38px;
}

div.aproposblog ul li span.title p.question a {
  color: #000;
}
</style>
