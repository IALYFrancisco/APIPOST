<template>
  <div class="bg_image">
    <footer>
      <nav class="for_navigation">
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
      </nav>
      <div class="message">
        <p class="title">Laissez-nous un message</p>
        <form action="" method="" id="inputs" v-on:submit.prevent="">
          <div class="element">
            <input
              required
              type="email"
              name="visitor_email"
              id="visitor_email"
              placeholder="Votre email"
            />
            <img src="../assets/images/enveloppe.png" alt="" />
          </div>
          <textarea
            required
            name="visitor_message"
            id="visitor_message"
            placeholder="Votre message"
          ></textarea>
          <button>envoyer</button>
        </form>
      </div>
      <div class="copyrighting">
        <p>
          developpée par <a href="https://portfolio-4n0j.onrender.com" target="_blank">IALY</a> pour
          <RouterLink to="/">APIPOST</RouterLink> | Juillet 2024 💖
        </p>
      </div>
    </footer>
  </div>
</template>
<style scoped>
div.bg_image {
  width: 100%;
  height: max-content;
  margin-top: 110px;
  background-image: url('../assets/images/background_image (3).jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

div.bg_image footer {
  width: inherit;
  height: inherit;
  background-color: #5d2417ed;
  padding-top: 20px;
}

div.bg_image footer nav.for_navigation {
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

div.bg_image footer nav.for_navigation ul {
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
}

div.bg_image footer nav.for_navigation ul li a img {
  width: 35px;
}

div.bg_image footer div.message form button {
  width: 200px;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: white;
  border-radius: 3px;
  box-shadow:
    1px 1px 3px #8c8c8c20,
    -1px -1px 3px #8c8c8c16;
  outline: none;
  margin: auto;
  height: 35px;
}

div.bg_image footer div.message form button:active {
  transform: scale(0.97);
}

footer div.message {
  width: max-content;
  height: max-content;
  margin: 35px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

footer div.message p.title {
  color: white;
  width: max-content;
  height: max-content;
  margin: 0px auto 20px auto;
  font-size: 18px;
  border-bottom: 2px solid yellow;
}

footer div.message form {
  width: max-content;
  height: max-content;
  margin: auto;
  display: flex;
  flex-direction: column;
}

footer div.message form input[type='email'] {
  outline: none;
  width: 325px;
  height: 35px;
  padding-left: 8px;
  margin-bottom: 10px;
  font-family: Poppins;
  font-size: 13px;
  border-radius: 3px;
  border: solid #3333336b 1px;
}

footer div.message form input[type='email']:focus {
  border: 2px solid yellow;
}

footer div.message form textarea {
  outline: none;
  width: 325px;
  height: 100px;
  padding: 8px;
  margin-bottom: 10px;
  font-family: Poppins;
  font-size: 13px;
  border-radius: 3px;
  border: solid #3333336b 1px;
  resize: none;
  transition: 0.4s;
}

footer div.message form textarea:focus {
  border: 2px solid yellow;
  transition: 0.4s;
}

div.bg_image footer div.copyrighting {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

div.bg_image footer div.copyrighting {
  color: white;
  font-size: 12px;
}
div.bg_image footer div.copyrighting p a:hover {
  text-decoration: underline;
  color: yellow;
}

div.bg_image footer div.message form div.element {
  position: relative;
  width: 325px;
  height: max-content;
  display: flex;
  align-items: center;
}

div.bg_image footer div.message form div.element img {
  position: absolute;
  width: 20px;
  right: 9px;
  top: 7px;
}

@media only screen and (max-width: 820px) {
  div.bg_image footer nav.for_navigation {
    width: 100%;
    height: max-content;
    flex-wrap: wrap;
    flex-direction: column;
  }

  div.bg_image footer nav.for_navigation ul {
    width: 100%;
    height: max-content;
    flex-wrap: wrap;
    flex-direction: column;
  }

  div.bg_image footer nav.for_navigation ul li {
    margin-top: 20px;
  }
}

@media only screen and (max-width: 350px) {
  div.bg_image footer div.message form div.element {
    width: 100%;
    margin: 0 auto 10px auto;
  }

  footer div.message form input[type='email'] {
    width: 100%;
  }

  footer div.message form textarea {
    width: 100%;
    margin: 0 auto 10px auto;
  }
}
</style>
