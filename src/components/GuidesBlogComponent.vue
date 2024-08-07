<template>
  <div class="aproposblog">
    <ul>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos" exact-active-class="router-link-active"
              >Ressources</RouterLink
            >
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/avec quoiestelledeveloppee"
              >GET</RouterLink
            >
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/etapesdedeveloppement">PUT</RouterLink>
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/github">PATCH</RouterLink>
          </p>
        </span>
      </li>
      <li>
        <span class="title">
          <p class="question">
            <RouterLink to="/apropos/github">DELETE</RouterLink>
          </p>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div.aproposblog {
  border-right: 0.1px solid #33333334;
  width: 225px;
  height: 35vh;
  margin-left: -200px;
  margin-top: 50px;
  margin-right: 70px;
  font-size: 14px;
  line-height: 38px;
}

div.aproposblog ul li span.title p.question a {
  color: #000;
  width: 100%;
  height: 100%;
  transition: 0.2s;
}

div.aproposblog ul li span.title p.question a.router-link-active {
  border-left: 2px solid #5d2417;
  padding-left: 10px;
}

@media only screen and (max-width: 1350px) {
  div.aproposblog {
    margin-left: -100px;
  }

  @media only screen and (max-width: 830px) {
    div.aproposblog {
      width: 215px;
      margin-left: -130px;
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 750px) {
    div.aproposblog {
      display: none;
    }
  }
}
</style>
