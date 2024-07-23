<template>
  <pre>
     <span style="color:rgb(0, 255, 255);">axios</span>.<span style="color: yellow;">get</span>('https://apipost.server.onrender.com')
        .<span style="color: yellow;">then</span>(<span style="color:rgb(0, 255, 255);;">response</span> => <span style="color:rgb(0, 255, 255);">console</span>.<span style="color: yellow;">log</span>(<span style="color:rgb(0, 255, 255);">response</span>))
  </pre>
  <button>lancer ce script</button>
</template>

<style scoped>
pre {
  height: 100%;
  padding: 40px 20px 0px 20px;
  line-height: 30px;
  font-family: Consolas, 'Courier New', monospace;
  color: rgb(255, 129, 39);
  margin-bottom: -20px;
}

button {
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: white;
  border-radius: 3px;
  box-shadow:
    1px 1px 5px #8c8c8c4a,
    -1px -1px 5px #8c8c8c4a;
  margin-bottom: 100px;
  outline: none;
}

button:active {
  transform: scale(0.97);
}
</style>

<script lang="ts">
export default {
  name: 'PythonComponent'
}
</script>
