<template>
    <div>
        <span id="logo">
            <img src="../../assets/images/logo_apipost.png" alt="logo de APIPOST" title="logo de APIPOST">
            <p>APIPOST</p>
        </span>
        <ul>
            <li>Guides</li>
            <li>Ressources</li>
        </ul>
    </div>
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

div {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
}

div span#logo {
    display: flex;
    align-items: center;
}

div span#logo p {
    margin-left: 8px;
}

div span#logo img{
    width: 45px;
}

div ul {
    display: flex;
    justify-content: space-around;
    width: 200px;
}

</style>