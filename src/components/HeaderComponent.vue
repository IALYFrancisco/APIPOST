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
}

header div.banniere div.left {
  width: 50%;
}

header div.banniere div.left span.title {
  font-size: 50px;
  color: white;
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
  animation: 35s infinite words;
}

.animated-text span::after {
  content: '';
  position: absolute;
  width: 0;
  height: 120%;
  background-color: #5d2417ed;
  border-left: 1px solid white;
  right: -8px;
  animation:
    cursor 0.8s infinite,
    typing 50s steps(35) infinite;
}

@keyframes cursor {
  to {
    border-left: 2px solid #ff7f5000;
  }
}

@keyframes words {
  0%,
  33.33% {
    content: 'est simple à utiliser';
  }
  34.33%,
  66.66% {
    content: 'vous donne un accès total à un serveur.';
  }
  67.66%,
  100% {
    content: 'vous offre des données structurées.';
  }
}

@keyframes typing {
  10%,
  15%,
  30%,
  35%,
  50%,
  55%,
  70%,
  75%,
  90%,
  95% {
    width: 0;
  }

  5%,
  20%,
  25%,
  40%,
  45%,
  60%,
  65%,
  80%,
  85% {
    width: calc(100% + 8px);
  }
}
</style>
