<template>
  <div id="app" class="application">

    <div id="nav" class="navigation">
      <div><router-link to="/">home</router-link></div>
      <div><router-link to="/svg-vectors">svg-vectors</router-link></div>
    </div>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
  }
  .application
  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    display: flex;
    min-height: 100vh;
  }
  .navigation
  {
    max-width: 180px;
    padding: 30px;
    border-right: solid 1px #42b983;
    a
    {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active
      {
        color: #42b983;
      }
    }
  }
  .content
  {
    padding: 30px;
  }
  table
  {
    border-collapse: collapse;
  }
  table, th, td
  {
    border: 1px solid #2c3e50;
    padding: 5px;
  }
  h1, h2 {
    margin: 0;
  }

  .page-svg {
    .row > * {
      margin-right: 10px;
    }
  }
</style>
