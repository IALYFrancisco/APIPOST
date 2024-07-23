<template>
  <pre>
  <span style="color:white;">response = requests.get(</span><span style="color: rgb(1, 104, 1);">"https://apipostserver.onrender.com/product/9"</span><span style="color:white;">)</span>
  <span style="color:rebeccapurple;">print</span><span style="color:white">(response)</span>
  </pre>
  <button>lancer ce script</button>
</template>

<style scoped>
pre {
  height: 100%;
  padding: 40px 0px 0px 0px;
  line-height: 30px;
  font-family: Consolas, 'Courier New', monospace;
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
