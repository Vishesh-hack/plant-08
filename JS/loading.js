// ===== Loading UI - Thinking Nine Animation =====

const LoadingUI = (() => {
  const config = {
    name: "Loading",
    tag: "Plant-08 Data",
    rotate: true,
    particleCount: 40,  // Reduced from 88 for better performance
    trailSpan: 0.39,
    durationMs: 4700,
    rotationDurationMs: 30000,
    pulseDurationMs: 4200,
    strokeWidth: 5.5,
    baseRadius: 7,
    detailAmplitude: 3,
    petalCount: 10,
    curveScale: 3.9,
    point(progress, detailScale, config) {
      const t = progress * Math.PI * 2;
      const petals = Math.round(config.petalCount);
      const x = config.baseRadius * Math.cos(t) - config.detailAmplitude * detailScale * Math.cos(petals * t);
      const y = config.baseRadius * Math.sin(t) - config.detailAmplitude * detailScale * Math.sin(petals * t);
      return {
        x: 50 + x * config.curveScale,
        y: 50 + y * config.curveScale,
      };
    },
  };

  const SVG_NS = 'http://www.w3.org/2000/svg';
  let loadingOverlay = null;
  let animationFrameId = null;
  let startedAt = null;
  let lastFrameTime = 0;
  const FRAME_RATE_MS = 1000 / 30;  // Reduce to 30fps instead of 60fps

  function normalizeProgress(progress) {
    return ((progress % 1) + 1) % 1;
  }

  function getDetailScale(time) {
    const pulseProgress = (time % config.pulseDurationMs) / config.pulseDurationMs;
    const pulseAngle = pulseProgress * Math.PI * 2;
    return 0.52 + ((Math.sin(pulseAngle + 0.55) + 1) / 2) * 0.48;
  }

  function getRotation(time) {
    if (!config.rotate) return 0;
    return -((time % config.rotationDurationMs) / config.rotationDurationMs) * 360;
  }

  function buildPath(detailScale, steps = 240) {  // Reduced from 480 steps
    return Array.from({ length: steps + 1 }, (_, index) => {
      const point = config.point(index / steps, detailScale, config);
      return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;  // Reduced precision
    }).join(' ');
  }

  function getParticle(index, progress, detailScale) {
    const tailOffset = index / (config.particleCount - 1);
    const point = config.point(normalizeProgress(progress - tailOffset * config.trailSpan), detailScale, config);
    const fade = Math.pow(1 - tailOffset, 0.56);
    return {
      x: point.x,
      y: point.y,
      radius: 0.9 + fade * 2.7,
      opacity: 0.04 + fade * 0.96,
    };
  }

  function render(now) {
    if (!loadingOverlay || loadingOverlay.classList.contains('hidden')) {
      return;
    }

    // Throttle frame rate for better performance
    if (now - lastFrameTime < FRAME_RATE_MS) {
      animationFrameId = requestAnimationFrame(render);
      return;
    }
    lastFrameTime = now;

    const group = loadingOverlay.querySelector('#group');
    const path = loadingOverlay.querySelector('#path');
    const particles = loadingOverlay.querySelectorAll('#group circle');

    if (!group || !path || particles.length === 0) return;

    const time = now - startedAt;
    const progress = (time % config.durationMs) / config.durationMs;
    const detailScale = getDetailScale(time);

    group.setAttribute('transform', `rotate(${getRotation(time)} 50 50)`);
    path.setAttribute('d', buildPath(detailScale));

    particles.forEach((node, index) => {
      const particle = getParticle(index, progress, detailScale);
      node.setAttribute('cx', particle.x.toFixed(1));
      node.setAttribute('cy', particle.y.toFixed(1));
      node.setAttribute('r', particle.radius.toFixed(1));
      node.setAttribute('opacity', particle.opacity.toFixed(2));
    });

    animationFrameId = requestAnimationFrame(render);
  }

  function initializeLoadingUI() {
    if (loadingOverlay) return;

    // Create overlay
    loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay hidden';
    loadingOverlay.innerHTML = `
      <div class="loading-container">
        <div class="loading-frame">
          <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <g id="group">
              <path id="path" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" opacity="0.1"></path>
            </g>
          </svg>
        </div>
        <div class="loading-meta">
          <div class="loading-title">Loading Plant Data</div>
          <div class="loading-tag">Thinking Nine</div>
        </div>
      </div>
    `;

    document.body.appendChild(loadingOverlay);

    // Set stroke width
    const path = loadingOverlay.querySelector('#path');
    path.setAttribute('stroke-width', String(config.strokeWidth));

    // Create particles
    const group = loadingOverlay.querySelector('#group');
    for (let i = 0; i < config.particleCount; i++) {
      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('fill', 'currentColor');
      group.appendChild(circle);
    }
  }

  function show() {
    if (!loadingOverlay) {
      initializeLoadingUI();
    }

    loadingOverlay.classList.remove('hidden');
    loadingOverlay.classList.add('show');

    if (startedAt === null) {
      startedAt = performance.now();
    }

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  function hide() {
    if (!loadingOverlay) return;

    loadingOverlay.classList.add('hide');

    setTimeout(() => {
      if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
        loadingOverlay.classList.remove('show', 'hide');
      }
    }, 300);

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  return {
    show,
    hide,
    init: initializeLoadingUI,
  };
})();

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  LoadingUI.init();
});
