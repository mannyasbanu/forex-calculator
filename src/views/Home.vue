<template>
  <div id="landing-section">
    <div id="title">
      <h1>Trading Calculations Made Easy</h1>
      <h3>Supporting effective risk management and trade execution.</h3>
    </div>
    <hr>
    <div id="nav">
      <h2>Available Calculators:</h2>
      <ul>
        <li><button>Pip Value Calculator</button></li>
        <li><button>Position Size Calculator</button></li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style>
  #landing-section{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10rem;
    background: #f4f4f4;
  }
  #title h1{
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }
  #title h3{
    margin-top: 0;
    font-weight: normal;
    color: #555;
  }
  #nav ul{
    list-style: none;
    padding: 0;
  }
  #nav li{
    margin: 1rem 0;
  }
  button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>