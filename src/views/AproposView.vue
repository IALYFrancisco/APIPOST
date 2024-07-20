<template>
    <div class="container">
        <div class="left">
            <AproposBlogComponent />
        </div>
        <div class="right">
            <QuiladeveloppeeComponent />
        </div>
    </div>
</template>

<script lang="ts">
import AproposBlogComponent from '@/components/AproposBlogComponent.vue';
import QuiladeveloppeeComponent from '@/components/QuiladeveloppeeComponent.vue';

    export default {
        name: 'AproposView',
        components: {
            AproposBlogComponent,
            QuiladeveloppeeComponent
        }
    }

</script>

<style scoped>

    div.container {
        width: 900px;
        height: max-content;
        margin: 20px auto;
        display: flex;
    }

</style>