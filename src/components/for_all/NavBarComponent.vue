<template>
    <nav>
        <span id="logo">
            <img src="../../assets/images/logo_apipost.png" alt="logo de APIPOST" title="logo de APIPOST">
            <p>APIPOST</p>
        </span>
        <ul>
            <li>Guides</li>
            <li>Ressources</li>
            <li>A propos</li>
            <li>Github</li>
        </ul>
    </nav>
</template>

<script lang="ts">

export default {
    name: "NavbarComponent",
    data: function() {
        return {}
    }
}

</script>
<style scoped>

header nav {
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    color: white;
    z-index: 1;
}

header nav span#logo {
    display: flex;
    align-items: center;
}

header nav span#logo p {
    margin-left: 8px;
}

header nav span#logo img{
    width: 45px;
}

header nav ul {
    display: flex;
    justify-content: space-around;
    width: 30%;
}

</style>