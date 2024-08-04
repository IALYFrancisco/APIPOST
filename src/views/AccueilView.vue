<template>
  <HeaderComponent />
  <ul>
    <li>
      <span class="title">
        <p class="question">Faire un test:</p>
      </span>
      <p class="text">
        Choisissez parmi les langages de programmations suivants et faîtes votre premier test de
        l'API <span class="keyword"><RouterLink to="/">APIPOST</RouterLink></span> en appuyant sur
        le bouton lancer le script. Voyez en dessous les résultats. Vous pouvez aussi copier ces
        scripts et les coller dans votre codes afin de faire votre premier test 😉.
      </p>
    </li>
  </ul>
  <AccueilTestComponent />
</template>
<script lang="ts">
import AccueilTestComponent from '@/components/AccueilTestComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'AccueilView',
  components: {
    HeaderComponent,
    AccueilTestComponent
  }
}
</script>

<style scoped>
ul {
  width: 67%;
  margin: 10px auto;
  height: inherit;
  padding: 80px 30px 30px 30px;
}

ul li span.title {
  font-size: 30px;
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