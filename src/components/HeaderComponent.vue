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
          <span class="command">
            # CURL -X GET "http://127.0.0.1:3000/all_products"
          </span>
        </div>
        <div class="terminal2"></div>
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
  height: 40vh;
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
  background-color: rebeccapurple;
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
</style>
