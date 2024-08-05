<template>
  <ul>
    <li>
      <span class="title">
        <p class="numero">4.</p>
        <p class="question">Github:</p>
      </span>
      <p class="text">
        Devenez collaborateur du projet
        <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> en proposant votre idée
        innovante, amélioratrice et constructive envers le projet.
        <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> est ouvert à toutes
        propositions de la part de qui que ce soit. Vous pouvez directement faire proposition de
        votre perception en créeant votre branche sur
        <span class="keyword"
          ><a href="https://github.com/IALYFrancisco/APIPOST-CLIENT-VUE.JS" target="_blank"
            >github</a
          ></span
        >
        avec le dêpot github de APIPOST.
        <br />
        Lien github de APIPOST:
        <span class="keyword"
          ><a
            id="remote"
            href="https://github.com/IALYFrancisco/APIPOST-CLIENT-VUE.JS.git"
            target="_blank"
            title="dépôt github de APIPOST 🔗"
            >https://github.com/IALYFrancisco/APIPOST-CLIENT-VUE.JS</a
          ></span
        >
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'QuiladeveloppeeComponent'
}
</script>

<style scoped>
ul {
  width: 100%;
  height: inherit;
  padding: 80px 30px 0px 30px;
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

@media only screen and (max-width: 750px) {
  a#remote {
    font-size: 75%;
  }
}
</style>
