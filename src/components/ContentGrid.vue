<script setup lang="ts"></script>
<template>
      <div class="grid-container">
            <div class="main-grid">
                  <div class="grid-item">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sint,
                        ea odit porro laborum delectus expedita? Quaerat recusandae id ratione
                        voluptas excepturi nemo minus quidem sapiente aperiam ea? Eius, pariatur!
                  </div>
                  <!-- HMER-whiteboard -->
                  <div class="grid-item tall hmer-whiteboard">
                        <p><b>HMER-Whiteboard</b></p>
                        <p>
                              HMER-whiteboard is a digital whiteboard that leverages mathematical
                              handwriting recognition to input expressions.
                        </p>
                        <a href="https://henryhell0.github.io/HMER-whiteboard" target="_blank">
                              <div style="font-size: small">try me!</div>
                              <img src="@/assets/whiteboard.png" draggable="false" />
                        </a>
                  </div>
                  <div class="grid-item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni sit
                        expedita inventore ipsam nisi vel consequuntur quasi distinctio voluptates
                        cum, est dignissimos? Quis neque, reprehenderit culpa consequatur reiciendis
                        aspernatur?
                  </div>
                  <div class="grid-item long">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolor
                        velit, ullam enim in sed praesentium tempore nostrum natus necessitatibus,
                        sequi incidunt eligendi pariatur nesciunt quos? Cupiditate amet nam
                        distinctio!
                  </div>
            </div>
      </div>
</template>
<style scoped lang="css">
/* ======= GRID STYLES ======= */

.grid-container {
      display: flex;
      justify-content: center;
}

.main-grid {
      margin: 10px;

      display: grid;
      grid-template-columns: repeat(2, min(400px, 46vw));
      /* change to 1fr for same sizing */
      grid-auto-rows: auto;

      gap: 10px;
}

.grid-item {
      background-color: rgb(247, 247, 247);
      border: 2px solid rgb(252, 252, 252);
      border-radius: 5px;
      backdrop-filter: blur(10px);
      box-shadow: 5px 5px 10px rgb(204, 204, 204);

      padding: 20px;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;

      text-align: center;

      transition:
            background 0.1s linear,
            transform 0.1s ease-in-out;
}

.grid-item:hover {
      transform: scale(1.02);
      /* background-color: rgb(223, 223, 223);
      color: rgb(49, 49, 49); */
}

.tall {
      grid-row: span 2;
}

.long {
      grid-column: span 2;
}

/* ============================== */

/* ====== GRID CONTENT STYLES ==== */
.hmer-whiteboard p {
      text-align: center;
}

.hmer-whiteboard b {
      font-size: 1.5em;
      line-height: 0px;
      margin: 1px;
}

.hmer-whiteboard a {
      text-align: center;
      color: rgb(155, 155, 155);

      transition: transform 0.3s ease-in-out;
}

.hmer-whiteboard a:hover {
      transform: scale(1.05) rotate(1deg);
}

.hmer-whiteboard img {
      user-select: none;
      width: 100%;
      aspect-ratio: 1/1;

      box-sizing: border-box;
      padding: 10px;
      object-fit: cover;
      border: 2px solid black;
      border-radius: 20px;
      background: white;
}

/* =============== */
</style>
