<template>
  <ul>
    <li>
      <span class="title">
        <p class="numero">1.</p>
        <p class="question">Qui l'a développée?</p>
      </span>
      <p class="text">
        <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> est une plateforme open
        source développée par
        <span class="keyword" title="Qui est-ce 🤔?"
          ><a href="https://portfolio-4n0j.onrender.com" target="_blank"
            >IALY Francisco Raymond</a
          ></span
        >, jeune homme étudiant en informatique dans le domaine du génie logiciel, suite à sa
        passion et son avide de connaissance dans le monde de développement web. Elle a été créée
        dans le cadre de simplifier l'apprentissage de langage de programmation côté serveur.
        <br />
        Lien de son portfolio:
        <span class="keyword"
          ><a
            href="https://portfolio-4n0j.onrender.com/"
            target="_blank"
            title="Portfolio de IALY 🔗"
            >https://portfolio-4n0j.onrender.com</a
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
