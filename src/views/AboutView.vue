<template>
  <div class="about">
    <div class="h-gradient">
      <h2 class="h-text">Want to know what the future holds for you?</h2>
    </div>
    <p class="p-text">At Nostal we help our customers be ahead.</p>
  </div>
</template>

<style>
.h-gradient {
  height: 20px;
  background: linear-gradient(to right, #489, #927, 0.4);
}

.h-text {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}

.p-text {
  font-size: 12px;
  font-style: italic;
  font-family: arial;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
