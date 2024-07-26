<template>
  <ul>
    <li>
      <span class="title">
        <p class="numero">3.</p>
        <p class="question">Etapes de développement:</p>
      </span>
      <p class="text">
        Le serveur de <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> était
        développée en premier. Puis ses APIs ont été testés avec
        <span class="keyword"><a href="https://www.postman.com" target="_blank">postman</a></span
        >. Ensuite la création de son l'interface utilisateur. Les outils
        <span class="keyword"><a href="https://git-scm.com" target="_blank">git</a></span> et
        <span class="keyword"><a href="https://github.com" target="_blank">github</a></span> ont été
        utilisés pour la versionning de codes.
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
  width: inherit;
  height: inherit;
  padding: 80px 30px 30px 30px;
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
</style>
