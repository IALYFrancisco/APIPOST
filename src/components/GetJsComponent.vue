<template>
  <pre class="request">
     <span style="color:rgb(0, 255, 255);">axios</span>.<span style="color: yellow;">get</span>('https://apipostserver.onrender.com/product/9')
             .<span style="color: yellow;">then</span>(<span style="color:rgb(0, 255, 255);">response</span> => <span style="color:rgb(0, 255, 255);">console</span>.<span style="color: yellow;">log</span>(<span style="color:rgb(0, 255, 255);">response</span>))
    </pre>
</template>

<script lang="ts">
export default {
  name: 'JSComponent'
}
</script>

<style scoped>
span.key {
  color: rgb(0, 255, 255);
}

pre.request {
  background-color: #5d2417;
  height: 100%;
  padding: 35px 20px 0px 0px;
  line-height: 30px;
  font-family: Consolas, 'Courier New', monospace;
  color: rgb(255, 129, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

p.result {
  color: rgb(255, 129, 39);
}
</style>
