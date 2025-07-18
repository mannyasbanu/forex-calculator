<template>
  <header>
    <div id="logo-container" class="logo">
      <img src="../assets/candlesticks.png" alt="">
      <h1>Forex Calculator</h1>
    </div>
    <div id="nav-bar-container">
      <div>Pip Value Calculator</div>
      <div>Position Size Calculator</div>
    </div>
    <div id="settings">
      <div>Settings</div>
    </div>
  </header>
</template>

<script></script>

<style>
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    flex-shrink: 0;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    padding: 0 20px 0 20px;
  }
  #logo-container{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  #logo-container img{
    height: 50px;
  }
  #logo-container h1{
    font-size: 1.5rem;
    margin: 0;
  }
  #nav-bar-container{
    display: flex;
    gap: 50px;
    align-items: center;
  }
  #logo-container, #nav-bar-container div, #settings div{
    cursor: pointer;
    font-weight: bold;
    will-change: filter;
    transition: filter 300ms;
  }
  #logo-container:hover, #nav-bar-container div:hover, #settings div:hover{
    filter: drop-shadow(0 0 2em #7a7a7a);
  }
  #settings{
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .logo{
    font-family: "Special Gothic Expanded One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
