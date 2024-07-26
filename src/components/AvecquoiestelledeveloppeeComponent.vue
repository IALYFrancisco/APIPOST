<!-- eslint-disable vue/no-parsing-error -->
<template>
  <ul>
    <li>
      <span class="title">
        <p class="numero">2.</p>
        <p class="question">Avec quoi est-elle développée?</p>
      </span>
      <p class="text">
        <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> est divisée en deux
        grandes parties: la partie front et la partie back. <br />
        <span class="subtitle">
            <p class="numero">2.1</p>
            <p class="question">La partie front:</p>
        </span>
        <p class="subtext">
          L'interface utilisateur de <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> est développée avec le framework javascript <span class="keyword"><a href="https://vuejs.org/" target="_blank">vue.js</a></span> en
          profitant de toutes ses performances. La bibliothèque <span class="keyword"><a href="https://axios-http.com/" target="_blank">axios</a></span> y est ajouter avec pour la
          gestion d'APIs. <br />
        </p>
        <span class="subtitle">
            <p class="numero">2.2</p>
            <p class="question">La partie back:</p>
        </span>
        <p class="subtext" style="margin-bottom: 20px;">
          Le côté seveur de <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> est développée avec <span class="keyword"><a href="https://nodejs.org/fr/" target="_blank">node.js</a></span> et <span class="keyword"><a href="https://expressjs.com/" target="_blank">express.js</a></span>. La base de données
          utilisées avec est <span class="keyword"><a href="https://www.mongodb.com/" target="_blank">mongodb</a></span>.
        </p>
        Ces deux parties sont hébergées indépendement avec la plateforme <span class="keyword"><a href="https://render.com" target="_blank">render</a></span>.
    </p>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'AvecquoiestelledeveloppeeComponent'
}
</script>

<style scoped>
ul {
  width: 100%;
  height: inherit;
  padding: 80px 30px 30px 30px;
}

ul li {
  width: 100%;
}

ul li span.title {
  font-size: 30px;
}

ul li span.title p.numero {
  display: inline;
  color: #5d2417;
}

ul li span.title p.question {
  display: inline;
  margin-left: 10px;
  position: relative;
  padding-bottom: 5px;
}

ul li span.title p.question::before {
  position: absolute;
  content: '';
  background-color: #5d2417;
  width: 94%;
  height: 2px;
  bottom: 0;
  margin: auto;
}

ul li p.text {
  width: 95%;
  margin: 20px auto;
  text-align: justify;
  line-height: 30px;
  font-size: 16px;
}

ul li p.text span.keyword:hover {
  cursor: pointer;
  text-decoration: underline;
}

ul li p.text span.keyword {
  color: royalblue;
  font-weight: 500;
}

ul li p.text span.keyword a {
  color: royalblue;
}

@media only screen and (max-width: 1350px) {

ul {
  padding: 80px 8px 30px 8px;
}

}
</style>