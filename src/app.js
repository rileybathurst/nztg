// biome-ignore assist/source/organizeImports: <theres one I dont know what you want biome>
import data from "../data.json";
// console.log(data.testimonials[0]);

/*------------------------------------*/

// fill testimonials with JSON data
for (let j = 0; j < data.testimonials.length; j++) {

  const myTestimonal = document.createElement('article');
  myTestimonal.setAttribute("class", "testimonial io-push");

  const myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");

  const myPara1 = document.createElement('p');

  const schemaReview = document.createElement('span');
  schemaReview.setAttribute("itemprop", "review"); // metatag

  const myH3 = document.createElement('blockquote'); // why is my H3 a blockquote

  schemaReview.textContent = data.testimonials[j].test; // add this to the span
  myH3.textContent = data.testimonials[j].author;

  myTestimonal.appendChild(myPara1); // p after the empty div
  myPara1.appendChild(schemaReview); // puts the span inside the p
  myTestimonal.appendChild(myH3); // author after the p
  myTestimonal.appendChild(myBackground); // empty div for styling

  document.getElementById('testimonials').appendChild(myTestimonal); // article in the section
}

// Large margins when IO comes into play
if ('IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  let pusher; // naming choice is too close to push
  const mT = "ratioem";

  // Set things up.

  window.addEventListener("load", () => {
    pusher = document.querySelectorAll(".io-push");

    createObserver();
  }, false);

  function createObserver() {
    var observer;

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);

    pusher.forEach(pushers => {
      observer.observe(pushers);
    });
  }

  function buildThresholdList() {
    const thresholds = [];
    const numSteps = 100;

    for (let i = 1.0; i <= numSteps; i++) {
      const ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      entry.target.style.marginTop = mT.replace("ratio", (entry.intersectionRatio * 5));
      prevRatio = entry.intersectionRatio;
    });
  }
}

// Parallax images to add to the drop down effects
if ('IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  let para; // naming choice is too close to push
  const pT = "translateY(pRatioem)";

  // Set things up.

  window.addEventListener("load", () => {
    para = document.querySelectorAll(".io-parallax");

    paraObserver();
  }, false);

  function paraObserver() {
    var pObserver;

    var pOptions = {
      root: null,
      rootMargin: "0px",
      threshold: paraThresholdList()
    };

    pObserver = new IntersectionObserver(pHandleIntersect, pOptions);

    para.forEach(paras => {
      pObserver.observe(paras);
    });
  }

  function paraThresholdList() {
    const paraThresholds = [];
    const paraSteps = 100;

    for (let i = 1.0; i <= paraSteps; i++) {
      const ratio = i / paraSteps;
      paraThresholds.push(ratio);
    }

    paraThresholds.push(0);
    return paraThresholds;
  }

  function pHandleIntersect(pEntries) {
    pEntries.forEach((entry) => {
      entry.target.style.webkitTransform = pT.replace("pRatio", (entry.intersectionRatio * 5));
      paraRatio = entry.intersectionRatio;
    });
  }
}