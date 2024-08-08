<!-- eslint-disable vue/no-parsing-error -->
<template>
    <ul>
      <li>
        <span class="title">
          <p class="question">Toutes les ressources:</p>
        </span>
        <p class="text">
          <span class="ressource_title">Products</span><span class="keyword">: [50 produits]</span>
          <span class="subtitle">
              <p class="numero">.</p>
              <p class="question">Structure:</p>
          </span>
          <p class="subtext">
            <div class="resultats">
                <span>
                    <p class="result">
                        <span style="margin-left: 15px;">{</span>
                            <span style="margin-left: 30px; display: block;"><span class="key">"_id":</span> "int",</span>
                            <span style="margin-left: 30px; display: block;"><span class="key">"name":</span> "string",</span>
                            <span style="margin-left: 30px; display: block;"><span class="key">"price":</span> "string",</span>
                            <span style="margin-left: 30px; display: block;"><span class="key">"description":</span> "string"</span>
                        <span style="margin-left: 15px; display: block;">}</span>
                    </p>
                </span>
            </div>
          </p>
          <span class="subtitle">
              <p class="numero">.</p>
              <p class="question">Routes:</p>
          </span>
          <p class="subtext" style="margin-bottom: 20px;">
            <table>
                <tr>
                    <td>GET</td>
                    <td><span class="url">https://apipostserver.onrender.com/all_products</span></td>
                </tr>
                <tr>
                    <td>GET, POST, PUT, PATCH, DELETE</td>
                    <td><span class="url">https://apipostserver.onrender.com/product/_id</span></td>
                </tr>
            </table>
            <span class="keyword"><RouterLink to="#"></RouterLink></span>
          </p>
      </p>
      </li>
    </ul>
  </template>
  
  <script lang="ts">
  export default {
    name: 'RessourcesComponent'
  }
  </script>
  
  <style scoped>
  ul {
    width: 100%;
    height: inherit;
    padding: 80px 30px 0px 30px;
  }
  
  ul li {
    width: 100%;
  }
  
  ul li span.title {
    font-size: 30px;
  }
  
  ul li span.title p.numero {
    display: inline;
    color: #5d2417;
  }
  
  ul li span.title p.question {
    display: inline;
    margin-left: 10px;
    position: relative;
    padding-bottom: 5px;
  }
  
  ul li span.title p.question::before {
    position: absolute;
    content: '';
    background-color: #5d2417;
    width: 94%;
    height: 2px;
    bottom: 0;
    margin: auto;
  }
  
  ul li p.text {
    width: 135%;
    margin: 20px auto;
    text-align: justify;
    line-height: 30px;
    font-size: 16px;
  }
  
  .keyword {
    color: royalblue;
    font-weight: 500;
  }
  
  ul li p.text span.keyword a {
    color: royalblue;
  }
  
  ul li p.text span.subtitle {
    display: flex;
    margin-left: 65px;
    margin-top: 15px;
  }
  
  ul li p.text span.subtitle p.question {
    margin-left: 5px;
    border-bottom: solid #5d2417 2px;
  }
  
  ul li p.text p.subtext {
    margin-left: 95px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }

  ul li p.text p.subtext span.url {
    width: 100%;
    background-color: #5d2417;
    padding: 5px 20px;
    margin-left: 20px;
    border-radius: 3px;
    color: white;
    font-size: 15px;
  }

  ul li p.text span.ressource_title {
    font-size: 20px;
    border-bottom: 2px #5d2417 solid;
    margin-left: 40px;
  }

  table {
    width: 90%;
    height: max-content;
    /* background-color: red; */
  }

  table tr {
    height: 40px;
  }

  table tr:hover {
    background-color: #cdcdcd44;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 1350px) {
  
  ul {
    padding: 80px 8px 30px 8px;
  }
  
  }

div.resultats {
  width: 40%;
  height: max-content;
  border-radius: 3px;
  background-color: #5d2417;
  padding: 12px 30px 12px 30px;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  line-height: 25px;
  margin: 0 auto;
}

p.result {
  color: rgb(255, 129, 39);
}

span.key {
  color:rgb(0, 255, 255)
}
</style>