<!-- eslint-disable vue/no-parsing-error -->
<template>
  <ul class="all">
    <li>
      <span class="title">
        <p class="question">Toutes les ressources:</p>
      </span>
      <p class="text">
        <span class="subtitle">
            <p class="numero">.</p>
            <p class="question">Tout les éléments:</p>
        </span>
        <p class="subtext">
          On peut récupérer la totalité des éléments d'une <span class="keyword" style="margin: 0 5px;"><RouterLink to="/guides">ressource</RouterLink></span> à l'aide de la méthode GET, prenons en exemple la <span class="keyword" style="margin: 0 5px;"><RouterLink to="/guides">ressource</RouterLink></span> <span class="keyword" style="margin: 0 5px;"><RouterLink to="/guides">products</RouterLink></span>.
        </p>
        <p class="subtext" style="margin-bottom: 20px;">
          <table>
              <tr>
                  <td>GET</td>
                  <td><span class="url">https://apipostserver.onrender.com/all_products</span></td>
              </tr>
          </table>
          <span class="keyword"><RouterLink to="#"></RouterLink></span>
        </p>
        <div class="all_element">
    <div class="container">
      <div class="terminale">
        <div class="langages">
          <ul>
            <li>
              <RouterLink to="/guides/get" title="javascript">javascript</RouterLink>
            </li>
            <li>
              <RouterLink to="/guides/get/getpython">python</RouterLink>
            </li>
          </ul>
          <span @click="copyScript()">
            <p v-if="scriptCopied">copié</p>
            <img src="../assets/images/copy_code.png" alt="" title="copier ces codes" />
          </span>
        </div>
      </div>
    </div>
    <div class="scripts">
      <RouterView />
    </div>
  </div>
      <p class="subtext">
        Après avoir exécuté une requête GET à l'adresse ci-dessus, il vous sera retourné en réponse plusieurs données du ressource choisie (50 produits dans le cas du <span class="keyword" style="margin: 0 3px;"><RouterLink to="/guides">ressource</RouterLink></span><span class="keyword" style="margin: 0 3px;"><RouterLink to="/guides">products</RouterLink></span>).
      </p>
      <div class="result">
        <div class="result_title">
          données de la réponse
        </div>
        <div class="result_data">
          <p>
            [<br>
            {
                "_id": 0,
                "name": "Tee-Shirt",
                "price": "99.99",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, eos assumenda dolore doloremque facilis libero iusto? Nobis, blanditiis doloribus?"
            },
            {
                "_id": 1,
                "name": "chapeau",
                "price": "29.99",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, eos assumenda dolore doloremque facilis libero iusto? Nobis, blanditiis doloribus?"
            },
            {
                "_id": 2,
                "name": "ceinture",
                "price": "9.99",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni, eos assumenda dolore doloremque facilis? ... } ...
                <br> ]
          </p>
        </div>
      </div>
    </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'GetComponent',
  data: function () {
    return {
      scriptCopied: false,
    }
  },
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    copyScript: function () {
      var el: any = document.querySelector('.scripts pre')
      window.navigator.clipboard.writeText(el.innerText)
      this.scriptCopied = true
      window.setTimeout(() => {
        this.scriptCopied = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
ul.all {
  width: 100%;
  height: inherit;
  padding: 80px 30px 0px 30px;
}

ul.all li {
  width: 100%;
}

ul.all li span.title {
  font-size: 30px;
}

ul.all li span.title p.numero {
  display: inline;
  color: #5d2417;
}

ul.all li span.title p.question {
  display: inline;
  margin-left: 10px;
  position: relative;
  padding-bottom: 5px;
}

ul.all li span.title p.question::before {
  position: absolute;
  content: '';
  background-color: #5d2417;
  width: 94%;
  height: 2px;
  bottom: 0;
  margin: auto;
}

ul.all li p.text {
  width: 100%;
  margin: 20px auto;
  text-align: justify;
  line-height: 30px;
  font-size: 16px;
}

.keyword {
  color: royalblue;
  font-weight: 500;
}

ul.all li p.text span.keyword a {
  color: royalblue;
}

ul.all li p.text span.subtitle {
  display: flex;
  margin-left: 65px;
  margin-top: 15px;
}

ul.all li p.text span.subtitle p.question {
  margin-left: 5px;
  border-bottom: solid #5d2417 2px;
}

ul.all li p.text p.subtext {
  margin-left: 95px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

ul.all li p.text div.result {
  width: 69%;
  height: 180px;
  margin: 30px auto;
}

ul.all li p.text div.result div.result_title {
  height:40px;
  width: 100%;
  background-color: #5d2417;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 12px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border-bottom: 0.1px solid #893623;
}

ul.all li p.text div.result div.result_data {
  width: 100%;
  height: calc(100% - 40px);
  background-color: #5d2417;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

ul.all li p.text div.result div.result_data p {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 12px;
  color: rgb(255, 129, 39);
  line-height: 15px;
  padding: 12px;
}

ul.all li p.text p.subtext span.url {
  width: 100%;
  background-color: #5d2417;
  padding: 5px 20px;
  margin-left: 20px;
  border-radius: 3px;
  color: white;
  font-size: 15px;
}

ul.all li p.text span.ressource_title {
  font-size: 20px;
  border-bottom: 2px #5d2417 solid;
  margin-left: 40px;
}

table {
  width: 20%;
  height: max-content;
}

table tr {
  height: 40px;
}

table tr:hover {
  background-color: #cdcdcd44;
  cursor: pointer;
}

@media only screen and (max-width: 1350px) {

ul.all {
  padding: 80px 8px 30px 8px;
}

}

div.resultats {
width: 40%;
height: max-content;
border-radius: 3px;
background-color: #5d2417;
padding: 12px 30px 12px 30px;
color: white;
font-family: 'Courier New', Courier, monospace;
font-size: 15px;
line-height: 25px;
margin: 0 auto;
}

p.result {
color: rgb(255, 129, 39);
}

span.key {
color:rgb(0, 255, 255)
}

div.all_element {
  width: 575px;
  margin: auto;
}

div.container {
  width: 575px;  
  height: max-content;
  margin: 0px auto 0px auto;
}

div.container div.terminale {
  background-color: #5d2417;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

div.container.active {
  margin: 0px auto 480px auto;
}

div.container div.terminale div.langages {
  width: inherit;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1px solid #893623;
}

div.container div.langages ul {
  width: 60%;
  height: inherit;
  display: flex;
}

div.container div.langages ul li {
  width: max-content;
  padding: 0 15px 0 15px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 0.1px solid #893623;
  border-right: 0.1px solid #893623;
  font-size: 12px;
}

div.container div.langages ul li:nth-child(1) {
  border-top-left-radius: 5px;
}

div.container div.scripts {
  width: 100%;
  height: 140px;
  margin: auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #5d2417;
}

div.container div.langages span {
  width: max-content;
  padding: 0 10px 0 15px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.container div.langages span img {
  width: 20px;
  cursor: pointer;
}

div.container div.langages span img:active {
  transform: scale(0.9);
}

div.container div.langages span p {
  color: white;
  font-size: 11px;
  margin-right: 5px;
}

</style>