<template lang="">
    <div v-bind:class="{ red : true, container : true } ">
        Hello world
    </div>
</template>

<script lang="ts">

export default {
    name: "MyComponent",
    data: function() {
        return {
            container: 'container'
        }
    }
}

</script>