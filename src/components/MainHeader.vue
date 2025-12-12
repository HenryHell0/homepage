<template>
      <header>
            <h1>Henry Holton</h1>
      </header>
</template>
<style scoped lang="css">
:root {
      --header-height: 100px;
}

header {
      position: sticky;
      top: 0px;
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      width: 100%;
      height: var(--header-height);

      background-color: var(--dark-background-color);
      color: var(--light-text-color);
}

h1 {
      margin: 10px;
      overflow: hidden;
      text-align: center;
      font-size: 72px;
      font-weight: bold;
      font-family: sans-serif;

      /* text gradient */
      background-image: linear-gradient(to right, #86bdd8, #0b6ebe); /* Example: Orange to Peach */
      background-clip: text;
      -webkit-text-fill-color: transparent;
      /* color fallback */
      color: #2fa3e6;
}
</style>
