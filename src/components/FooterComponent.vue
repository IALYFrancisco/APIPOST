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
              v-model="emailUserSender"
            />
            <img src="../assets/images/enveloppe.png" alt="" />
          </div>
          <textarea
            required
            name="visitor_message"
            id="visitor_message"
            placeholder="Votre message"
            v-model="textToSend"
          ></textarea>
          <button @click="sendDataToServer">envoyer</button>
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
<script lang="ts">
import axios from 'axios'

export default {
  name: 'FooterComponent',
  data() {
    return {
      emailUserSender: "",
      textToSend: "",
      
    }
  },
  methods: {
    async sendDataToServer() {

      let formatTemplateHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <style>
        .poppins-regular {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        }
    </style>
    <title>Document</title>
</head>
<body style="width: 100%; display: flex; justify-content: center;">
    <section style="width: 100%; max-width: 700px; margin: 50px auto 50px auto;">
        <header style="background-image: url('https://apipost-4jyv.onrender.com/assets/background_image%20(3)-Dk_cZ68r.jpg'); width: 100%; height: 50px; border-top-left-radius: 10px; border-top-right-radius: 10px; background-position: center; background-repeat: no-repeat; background-size: cover;">
        </header>
        <main style="padding-left: 30px;">
            <a href="https://apipost-4jyv.onrender.com/" target="_blank" style="text-decoration: none;">
                <header style="padding-top: 30px; display: flex; align-items: center;">
                    <img style="width: 50px;" src="https://apipost-4jyv.onrender.com/assets/logo_apipost-DpmZ7gMa.png" alt="Logo de apipost">
                    <p class="poppins-regular" style="margin-left: 10px; color: #333; display: flex; align-items: center;">APIPOST</p>
                </header>
            </a>
            <main style=" color: #333;">
                <h3 class="poppins-regular" style="">Email user sender: ${this.emailUserSender}</h3>
                <p class="poppins-regular" style="font-size: 14px;">${this.textToSend}</p>
            </main>
            <footer>
                <p class="poppins-regular" style="font-size: 12px; margin-top: 20px;">Email sent from <a href="https://apipost-4jyv.onrender.com/" target="_blank" style="color: crimson; text-decoration: none;">APIPOST</a> platform</p>
            </footer>
        </main>
        <footer style="background-image: url('https://apipost-4jyv.onrender.com/assets/background_image%20(3)-Dk_cZ68r.jpg'); width: 100%; height: 50px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; background-position: center; background-repeat: no-repeat; background-size: cover; margin-top: 50px;">

        </footer>
    </section>
</body>
</html>`

      var EMAIL = {
        name: 'Email from APIPOST platform',
        subject: 'User email from APIPOST platform',
        sender: {
          name: this.emailUserSender,
          email: 'franciscoialy43@gmail.com'
        },
        to: [
          {
            name: 'IALY Francisco Raymond',
            email: 'ialyfrancisco7@gmail.com'
          }
        ],
        htmlContent: formatTemplateHtml 
      }

      await axios({
        method: 'POST',
        url: `${import.meta.env.VITE_APP_SERVER_DOMAIN}/email/send`,
        data: EMAIL
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
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
