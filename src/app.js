function supportsIntersectionObserver() {

  console.log("Checking for IntersectionObserver support...");

  return (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}

function buildThresholdList(steps = 100) {
  const thresholds = [];

  for (let i = 1; i <= steps; i += 1) {
    thresholds.push(i / steps);
  }

  thresholds.push(0);
  return thresholds;
}

function observePushTargets() {
  const pushTargets = document.querySelectorAll(".io-push");

  if (pushTargets.length === 0) {
    return;
  }

  const pushObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.style.marginTop = `${entry.intersectionRatio * 5}em`;
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    },
  );

  pushTargets.forEach((target) => {
    pushObserver.observe(target);
  });
}

/*------------------------------------*/

function observeParallaxTargets() {
  const parallaxTargets = document.querySelectorAll(".io-parallax");

  if (parallaxTargets.length === 0) {
    return;
  }

  const parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const translateValue = `translateY(-${entry.intersectionRatio * 10}em)`;

        // Apply the effect to nested renderable nodes first.
        const nestedTargets = entry.target.querySelectorAll("img");

        if (nestedTargets.length > 0) {
          nestedTargets.forEach((nestedTarget) => {
            nestedTarget.style.transform = translateValue;
            nestedTarget.style.webkitTransform = translateValue;
          });
          return;
        }

        // Fallback to the container itself when no nested targets are found.
        entry.target.style.transform = translateValue;
        entry.target.style.webkitTransform = translateValue;
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    },
  );

  parallaxTargets.forEach((target) => {
    parallaxObserver.observe(target);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  if (!supportsIntersectionObserver()) {
    return;
  }

  observePushTargets();
  observeParallaxTargets();
});