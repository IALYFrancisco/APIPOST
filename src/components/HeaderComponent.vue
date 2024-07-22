<template>
    <header>
        <div class="banniere">
            <div class="left">
                <span class="title">APIPOST</span>
                <br>
                <span class="text">est une plateforme qui vous donne un accès total à un <p class="keyword">serveur</p>.</span>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    export default {
        name: "HeaderComponent",
        components: {
        }
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

header div.banniere div.left{
    width: 50%;
}

header div.banniere div.left span.title {
    font-size: 50px;
    color: white;
}

header div.banniere div.left span.text {
    color: white;
    font-size: 20px;
}

header div.banniere div.left span.text p.keyword {
    color: yellow;
    display: inline;
}

</style>