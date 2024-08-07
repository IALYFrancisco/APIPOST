<template>
  <nav class="principal">
    <span id="logo">
      <img src="../assets/images/logo_apipost.png" alt="logo de APIPOST" title="logo de APIPOST" />
      <p>APIPOST</p>
    </span>
    <ul>
      <li>
        <RouterLink to="/">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/guides">Guides</RouterLink>
      </li>
      <li>
        <RouterLink to="/apropos">A propos</RouterLink>
      </li>
      <li>
        <a
          href="https://github.com/IALYFrancisco/APIPOST-CLIENT-VUE.JS.git"
          target="_blank"
          title="Lien github de APIPOST"
          ><img src="../assets/images/github.png" alt=""
        /></a>
      </li>
    </ul>
    <img src="../assets/images/menu.png" alt="" v-on:click="toogleMenu" />
  </nav>
  <nav class="for_responsive" v-if="menuToggle">
    <ul>
      <li>
        <RouterLink to="/" v-on:click="toogleMenu">Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/guides">Guides</RouterLink>
      </li>
      <li class="apropos" v-on:click="openAproposLi" v-bind:class="{ opened: openLiApropos }">
        A propos
        <ul>
          <li>
            <RouterLink to="/apropos" v-on:click="toogleMenu">- Par qui?</RouterLink>
          </li>
          <li>
            <RouterLink to="/apropos/avec quoiestelledeveloppee" v-on:click="toogleMenu"
              >- Avec quoi?</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/apropos/etapesdedeveloppement" v-on:click="toogleMenu"
              >- Les étapes?</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/apropos/github" v-on:click="toogleMenu">- Github</RouterLink>
          </li>
        </ul>
      </li>
      <li>
        <a
          v-on:click="toogleMenu"
          href="https://github.com/IALYFrancisco/APIPOST-CLIENT-VUE.JS.git"
          target="_blank"
          title="Lien github de APIPOST"
          ><img src="../assets/images/github.png" alt=""
        /></a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarComponent',
  data: function () {
    return {
      menuToggle: false,
      openLiApropos: false
    }
  },
  components: {
    RouterLink
  },
  methods: {
    toogleMenu() {
      this.menuToggle = !this.menuToggle
    },
    openAproposLi() {
      this.openLiApropos = !this.openLiApropos
    }
  }
}
</script>
<style scoped>
nav.principal {
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  background-image: url('../assets/images/background_image (3).jpg');
  background-size: cover;
  background-position: 30px 0 0 0;
  background-repeat: no-repeat;
  z-index: 1;
  color: white;
}

nav.principal::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #5d2417ed;
  margin-left: -20px;
  z-index: -1;
}

nav.principal span#logo {
  display: flex;
  align-items: center;
}

nav.principal span#logo p {
  margin-left: 8px;
}

nav.principal span#logo img {
  width: 45px;
}

nav.principal ul {
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
}

nav.principal > img {
  width: 25px;
  cursor: pointer;
  display: none;
}

nav.principal ul li a img {
  width: 35px;
}

nav.for_responsive {
  background-color: #5d2417ed;
  width: 150px;
  height: max-content;
  padding: 15px;
  line-height: 30px;
  position: absolute;
  right: 45px;
  top: 45px;
  z-index: 9;
  border-radius: 5px;
  border: 2px yellow solid;
}

nav.for_responsive ul li ul {
  line-height: 17px;
}

nav.for_responsive ul li ul li a {
  font-size: 12px;
  margin-left: 20px;
}

nav.for_responsive ul li a img {
  width: 35px;
  margin-top: 10px;
  margin-bottom: -10px;
}

nav.for_responsive ul li.apropos {
  height: 25px;
  overflow: hidden;
  transition: 0.3s;
  color: white;
}

nav.for_responsive ul li.apropos.opened {
  height: 105px;
  transition: 0.3s;
}

@media only screen and (max-width: 880px) {
  nav.principal img {
    display: block;
  }

  nav.principal ul {
    display: none;
  }
}

@media only screen and (min-width: 880px) {
  nav.for_responsive {
    display: none;
  }
}

nav.principal ul li a img {
  width: 35px;
}
</style>
