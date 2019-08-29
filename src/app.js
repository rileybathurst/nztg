import _ from 'lodash';

// this does just load the whole file instead of specific images which kinda defeats the point
// tree shaking could probably fix this
var req = require.context("./images/", false, /.*\.(png|jpe?g|svg)$/);
req.keys().forEach(function(key){
  req(key);
});

const data = require('./data.json');

// fill testimonials with JSON data
for (var j = 0; j < data.testimonials.length; j++) {

  var myTestimonal = document.createElement('article');
  var myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");
  myTestimonal.setAttribute("class", "testimonial io-push");
  var myPara1 = document.createElement('p');
  var schemaReview = document.createElement('span');
  schemaReview.setAttribute("itemprop", "review");
  var myH3 = document.createElement('quote');

  schemaReview.textContent = data.testimonials[j].test;
  myH3.textContent = data.testimonials[j].author;

  myTestimonal.appendChild(myBackground);
  myTestimonal.appendChild(myPara1);
  myPara1.appendChild(schemaReview);
  myTestimonal.appendChild(myH3);

  document.getElementById('testimonials').appendChild(myTestimonal);
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
