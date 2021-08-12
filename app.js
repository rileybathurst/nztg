import data from "./data.json";
// console.log(data.testimonials[0]);

// fill testimonials with JSON data
for (var j = 0; j < data.testimonials.length; j++) {

  var myTestimonal = document.createElement('article');
  myTestimonal.setAttribute("class", "testimonial io-push");

  var myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");
  
  var myPara1 = document.createElement('p');
  
  var schemaReview = document.createElement('span');
  schemaReview.setAttribute("itemprop", "review"); // metatag
  
  var myH3 = document.createElement('blockquote'); // why is my H3 a blockquote

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

  let iopush = document.querySelectorAll('.io-push');

  var numSteps = 20.0;

  var pusher; // naming choice is too close to push
  var prevRatio = 0.0;
  var mT = "ratioem";

  // Set things up.

  window.addEventListener("load", function(event) {
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
  var thresholds = [];
  var numSteps = 100;

  for (var i=1.0; i<=numSteps; i++) {
  var ratio = i/numSteps;
  thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
  }

  function handleIntersect(entries, observer) {
  entries.forEach(function(entry) {
    entry.target.style.marginTop = mT.replace("ratio", (entry.intersectionRatio*5));
  prevRatio = entry.intersectionRatio;
  });
  }
}

// Parallax images to add to the drop down effects
if ('IntersectionObserver' in window &&
'IntersectionObserverEntry' in window &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  let ioparallax = document.querySelectorAll('.io-parallax'); // doesnt seem used can I skip it

  var paraSteps = 20.0;

  var para; // naming choice is too close to push
  var paraRatio = 0.0;
  var pT = "translateY(pRatioem)";

  // Set things up.

  window.addEventListener("load", function(event) {
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
    var paraThresholds = [];
    var paraSteps = 100;

    for (var i=1.0; i<=paraSteps; i++) {
    var ratio = i/paraSteps;
    paraThresholds.push(ratio);
    }

    paraThresholds.push(0);
    return paraThresholds;
  }

  function pHandleIntersect(pEntries, pObserver) {
    pEntries.forEach(function(entry) {
      entry.target.style.webkitTransform = pT.replace("pRatio", (entry.intersectionRatio*5));
    paraRatio = entry.intersectionRatio;
    });
  }
}

// Lazy load
import lozad from 'lozad';
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
