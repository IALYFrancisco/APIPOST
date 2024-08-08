<!-- eslint-disable vue/no-parsing-error -->
<template>
    <pre class="request">
      <span style="color:white;">response = requests.get(</span><span style="color: rgb(1, 104, 1);">"https://apipostserver.onrender.com/product/9"</span><span style="color:white;">)</span>
      <span style="color:rebeccapurple;">print</span><span style="color:white">(response)</span>
    </pre>

    <!-- <div class="resultats">
      <span v-if="requestStore.pythonData">
        <p class="result">
          <span style="display: block; color: white;">[</span>
              <span style="margin-left: 15px;">{</span>
                <span style="margin-left: 30px; display: block;"><span class="key">"_id":</span> {{ requestStore.pythonData[0]._id }},</span>
                <span style="margin-left: 30px; display: block;"><span class="key">"name":</span> {{ requestStore.pythonData[0].name }},</span>
                <span style="margin-left: 30px; display: block;"><span class="key">"price":</span> {{ requestStore.pythonData[0].price }},</span>
                <span style="margin-left: 30px; display: block;"><span class="key">"description":</span style="display:inline;"> {{ requestStore.pythonData[0].description }}</span>
              <span style="margin-left: 15px; display: block;">}</span>
          <span style="display: block; color: white;">]</span>
        </p>
      </span>
      <span v-else style="font-family: 'Courier New', Courier, monospace"> [] </span>
    </div> -->
  </template>
  
  <style scoped>
  span.key {
    color:rgb(0, 255, 255)
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
    color: rgb(232, 209, 209);
  }
/*   
  div.resultats {
    width: 100%;
    height: max-content;
    border-radius: 3px;
    background-color: #5d2417;
    padding: 12px 30px 12px 30px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    line-height: 25px;
  } */
  </style>
  
  <script lang="ts">
  
  export default {
    name: 'GetPyComponent',
  }
  </script>
