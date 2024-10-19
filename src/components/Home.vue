<script setup>

</script>

<template>
  <div class="container">
    <div class="left-container">
      <span class="badge">Software Developer</span>
      <div class="dev-name">
        <h1>Noname ZZ</h1>
      </div>
      <p>“The best way to predict the future is to invent it.”.</p>
      <p>The function of good software is to make the complex appear to be simple</p>
      <div class="info-section">
        <button class="primary-button">Download CV</button>
        <button class="secondary-button">Hire Me Now</button>
      </div>
    </div>
    <div class="right-container">
      <img src="../assets/znoname.png" height="819" width="824" alt="image"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;

  .left-container {
    margin-right: 150px;
  }

  .badge {
    display: inline-block;
    background-color: lightgray; /* Adjust the color as needed */
    color: black;
    border-radius: 12px;
    padding: 4px 8px;
    font-size: 0.8em; /* Adjust the font size as needed */
  }

  .dev-name {
    h1 {
      margin: 0;
    }
    font-size: 50px;
  }

  .info-section {
    margin-top: 25px;

    button {
      border-radius: 4px;
      cursor: pointer;
      padding: 8px;
      font-size: 14px;
      margin-right: 16px;
      width: 120px;
    }

    .primary-button {
      border: 1px solid lightgray;
      color: black;
      background-color: lightgray;
    }

    .secondary-button {
      border: 1px solid lightgray;
      color: black;
      background-color: white;
    }

    button:hover {
      background: lightgray /* Highlight on hover */
    }
  }

}

</style>