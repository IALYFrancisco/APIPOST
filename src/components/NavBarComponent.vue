<<<<<<< HEAD
<template>
=======
>>>>>>> 41290b10199cbefab922d9581f70e03ee7b69651
  <nav>
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
        <RouterLink to="/ressources">Ressources</RouterLink>
      </li>
      <li>
        <RouterLink to="/apropos">A propos</RouterLink>
      </li>
      <li>
<<<<<<< HEAD
        <a
          href="https://github.com/IALYFrancisco/APIPOST-CLIENT-VUE.JS.git"
          target="_blank"
          title="Lien github de APIPOST"
          ><img src="../assets/images/github.png" alt=""
        /></a>
      </li>
    </ul>
    <img src="../assets/images/menu.png" alt="" />
=======
        <a href="https://github.com" target="_blank" title="Lien github de APIPOST">
          <img src="../assets/images/github.png" alt="" />
        </a>
      </li>
    </ul>
>>>>>>> 41290b10199cbefab922d9581f70e03ee7b69651
  </nav>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarComponent',
  data: function () {
    return {}
  },
  components: {
    RouterLink
  }
}
</script>
<style scoped>
nav {
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
<<<<<<< HEAD
=======
  position: relative;
>>>>>>> 41290b10199cbefab922d9581f70e03ee7b69651
  z-index: 1;
  color: white;
}

nav::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #5d2417ed;
  margin-left: -20px;
  z-index: -1;
}

nav span#logo {
  display: flex;
  align-items: center;
}

nav span#logo p {
  margin-left: 8px;
}

nav span#logo img {
  width: 45px;
}

nav ul {
  display: flex;
  justify-content: space-around;
<<<<<<< HEAD
  align-items: center;
  width: 30%;
=======
  width: 40%;
  align-items: center;
>>>>>>> 41290b10199cbefab922d9581f70e03ee7b69651
}

nav > img {
  width: 25px;
  cursor: pointer;
  display: none;
}

nav ul li a img {
  width: 35px;
}

@media only screen and (max-width: 1140px) {
  nav img {
    display: block;
  }

  nav ul {
    display: none;
  }
}
<<<<<<< HEAD
</style>
=======

/*nav ul li a img {
  width: 35px;
}*/
</style>
>>>>>>> 41290b10199cbefab922d9581f70e03ee7b69651
