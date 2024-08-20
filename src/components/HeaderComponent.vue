<template>
  <header>
    <div class="banniere">
      <div class="left">
        <span class="title">APIPOST</span>
        <br />
        <div class="animated-text">
          <span></span>
        </div>
      </div>
      <div class="right">
        <div class="terminal1">
          <div class="header">
            <div class="bulle"></div>
            <div class="bulle"></div>
            <div class="bulle"></div>
          </div>
          <div class="script">
            <span class="command"
              >:~ <span style="color: royalblue">curl</span>
              <span style="margin: 0 3px 0 3px; color: white">-X</span>
              <span style="color: white">GET</span>
              <span style="color: rgb(255, 129, 39); margin-left: 3px"
                >"https://apipostserver.onrender.com/all_products"</span
              ></span
            >
            <span class="curl_response">
              [{"_id":0,"name":"MENA","price":"200","description":"Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque magni, eos assumenda dolore doloremque facilis
              libero iusto? Nobis, blanditiis
              doloribus?"},{"_id":1,"name":"chapeau","price":"29.99","description":"Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Neque magni, eos assumenda dolore
              doloremque facilis libero iusto? Nobis, blanditiis
              doloribus?"},{"_id":2,"name":"ceinture","price":"9.99","description":"Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Neque magni, eos assumenda dolore
              doloremque facilis libero iusto? Nobis, blanditiis
              doloribus?"}{"_id":3,"name":"chaussette","price":"15.99","description":"Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Neque magni, eos assumenda dolore
              doloremque facilis libero iusto? Nobis, blanditiis doloribus?"},
            </span>
          </div>
        </div>
        <div class="terminal2">
          <div class="header">
            <div class="bulle"></div>
            <div class="bulle"></div>
            <div class="bulle"></div>
          </div>
          <div class="script">
            <span class="command">:~ <span style="color: royalblue">node</span></span
            ><br />
            <span class="curl_response">
              <span style="font-size: 9px">Welcome to Node.js v20.16.0.</span><br />
              <span style="font-size: 9px">Type ".help" for more information.</span><br />
              <span
                >> <span style="color: yellow">fetch</span>(<span style="color: rgb(255, 129, 39)"
                  >'https://apipostserver.onrender.com/all_products'</span
                >).<br /><span style="color: yellow; margin-left: 25px">then</span>(
                <span style="color: royalblue">async</span> (response) => { <br /><span
                  style="color: royalblue; margin-left: 45px"
                  >console</span
                >.<span style="color: yellow">log</span>(
                <span style="color: pink">await</span> response.status,
                <span style="color: pink">await</span> response.statusText) <br />
                <span style="margin-left: 25px">})</span></span
              ><br />
              >
              <span style="font-size: 10px; color: yellow"
                >200 <span style="color: green; margin-left: 5px">OK</span></span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  components: {}
}
</script>

<style scoped>
header {
  width: 100%;
  height: 266px;
  background-image: url('../assets/images/background_image (3).jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: -1;
  box-shadow: 3px 3px 3px #33333378;
}

header::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #5d2417ed;
}

header div.banniere {
  position: relative;
  z-index: 1;
  padding: 100px 100px 0 100px;
  display: flex;
  max-width: 1350px;
  margin: auto;
}

header div.banniere div.left {
  width: 50%;
}

header div.banniere div.left span.title {
  font-size: 50px;
  color: white;
}

header div.banniere div.right {
  width: 50%;
  height: 256px;
  margin-top: -90px;
  position: relative;
  overflow: hidden;
  max-width: 600px;
}

header div.banniere div.right div.terminal1,
header div.banniere div.right div.terminal2 {
  width: 400px;
  height: 200px;
  background-color: #222;
  border-radius: 4px;
  overflow: hidden;
}

header div.banniere div.right div.terminal2 {
  position: absolute;
  right: 0px;
  top: 100px;
  box-shadow: 0px 20px 120px #000000;
}

header div.banniere div.right div.terminal1 div.script,
header div.banniere div.right div.terminal2 div.script {
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  color: rgb(152, 152, 152);
}

header div.banniere div.right div.terminal1 div.script span.curl_response {
  width: 100%;
  height: inherit;
  display: flex;
  text-align: justify;
}

header div.banniere div.right div.terminal1 div.header,
header div.banniere div.right div.terminal2 div.header {
  width: 100%;
  height: 25px;
  background-color: rgb(182, 182, 182);
  display: flex;
  align-items: center;
  justify-content: start;
}

header div.banniere div.right div.terminal1 div.header div.bulle,
header div.banniere div.right div.terminal2 div.header div.bulle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff0000;
  margin-left: 5px;
}

header div.banniere div.right div.terminal1 div.header div.bulle:nth-child(2),
header div.banniere div.right div.terminal2 div.header div.bulle:nth-child(2) {
  background-color: #ffff00;
}

header div.banniere div.right div.terminal1 div.header div.bulle:nth-child(3),
header div.banniere div.right div.terminal2 div.header div.bulle:nth-child(3) {
  background-color: #00ff00;
}

.animated-text {
  font-size: 20px;
  min-width: 280px;
}

.animated-text span {
  position: relative;
}

.animated-text span::before {
  content: '';
  color: yellow;
  animation: 20s infinite words;
}

.animated-text span::after {
  content: '';
  position: absolute;
  width: 0;
  height: 120%;
  background-color: #5d2417;
  border-left: 1px solid white;
  right: -8px;
  animation:
    cursor 0.9s infinite,
    typing 20s steps(14) infinite;
}

@keyframes cursor {
  to {
    border-left: 2px solid #ff7f5000;
  }
}

@keyframes words {
  0%,
  25% {
    content: 'est simple à utiliser';
  }
  36%,
  60% {
    content: 'vous donne un accès total à un serveur.';
  }
  76%,
  100% {
    content: 'vous offre des données structurées.';
  }
}

@keyframes typing {
  0%,
  3% {
    width: calc(100% + 8px);
  }

  5%,
  25% {
    width: 0;
  }

  27%,
  35% {
    width: calc(100% + 8px);
  }

  37%,
  60% {
    width: 0;
  }

  62%,
  78% {
    width: calc(100% + 8px);
  }

  80%,
  98% {
    width: 0;
  }

  100% {
    width: calc(100% + 8px);
  }
}

@media only screen and (max-width: 1100px) {
  header div.banniere {
    padding: 100px 50px 0 50px;
  }
}

@media only screen and (max-width: 960px) {
  header div.banniere {
    padding: 100px 20px 0 50px;
  }

  header div.banniere div.right div.terminal2 {
    display: none;
  }

  header div.banniere div.right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media only screen and (max-width: 850px) {
  header div.banniere div.right {
    transform: scale(0.9);
  }

  header div.banniere div.right div.terminal1 {
    transform: scale(0.9);
  }
}

@media only screen and (max-width: 800px) {
  header div.banniere div.left div.animated-text span {
    font-size: 15px;
  }
  header div.banniere div.left div.animated-text {
    display: flex;
  }
  header div.banniere div.left span.title {
    font-size: 40px;
  }
}

@media only screen and (max-width: 645px) {
  header div.banniere div.right div.terminal1 {
    display: none;
  }
}
</style>
