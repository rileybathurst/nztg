// TODO: I think this is either react and and runs on state
// or css and works with scroll driven animations which could be interesting to look at

console.log("observers.js loaded");

// Large margins when IO comes into play
if (
	"IntersectionObserver" in window &&
	"IntersectionObserverEntry" in window &&
	"intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
	let pusher; // naming choice is too close to push
	const mT = "ratioem";

	// Set things up.

	window.addEventListener(
		"load",
		() => {
			pusher = document.querySelectorAll(".io-push");

			createObserver();
		},
		false,
	);

	function createObserver() {
		var observer;

		var options = {
			root: null,
			rootMargin: "0px",
			threshold: buildThresholdList(),
		};

		observer = new IntersectionObserver(handleIntersect, options);

		pusher.forEach((pushers) => {
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
			entry.target.style.marginTop = mT.replace(
				"ratio",
				entry.intersectionRatio * 5,
			);
			prevRatio = entry.intersectionRatio;
		});
	}
}

// Parallax images to add to the drop down effects
if (
	"IntersectionObserver" in window &&
	"IntersectionObserverEntry" in window &&
	"intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
	let para; // naming choice is too close to push
	const pT = "translateY(pRatioem)";

	// Set things up.

	window.addEventListener(
		"load",
		() => {
			para = document.querySelectorAll(".io-parallax");

			paraObserver();
		},
		false,
	);

	function paraObserver() {
		var pObserver;

		var pOptions = {
			root: null,
			rootMargin: "0px",
			threshold: paraThresholdList(),
		};

		pObserver = new IntersectionObserver(pHandleIntersect, pOptions);

		para.forEach((paras) => {
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
			entry.target.style.webkitTransform = pT.replace(
				"pRatio",
				entry.intersectionRatio * 5,
			);
			paraRatio = entry.intersectionRatio;
		});
	}
}
