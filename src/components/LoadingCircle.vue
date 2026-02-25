<!-- @format -->

<template>
  <div class="loading-circle-container">
    <div class="loading-circle">
      <svg viewBox="0 0 60 60" class="loading-spinner">
        <defs>
          <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #00bde0; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #0a3366; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="24" class="loading-track" />
        <circle cx="30" cy="30" r="24" class="loading-progress" />
      </svg>
      <div class="loading-text">Loading...</div>
    </div>
  </div>
</template>

<style scoped>
.loading-circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
}

.loading-circle {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 100%;
  height: 100%;
  animation: spin 2s linear infinite;
  filter: drop-shadow(0 4px 10px rgba(0, 189, 224, 0.15));
}

.loading-track {
  fill: none;
  stroke: rgba(0, 189, 224, 0.1);
  stroke-width: 3;
  stroke-linecap: round;
}

.loading-progress {
  fill: none;
  stroke: url(#loadingGradient);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 150;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  transform-origin: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 40;
    stroke-dashoffset: 110;
  }
  100% {
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
  }
}

.loading-text {
  font-size: 13px;
  font-weight: 500;
  color: #0a3366;
  letter-spacing: 1px;
  animation: pulse-text 1.5s ease-in-out infinite;
}

@keyframes pulse-text {
  0%,
  100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}
</style>
