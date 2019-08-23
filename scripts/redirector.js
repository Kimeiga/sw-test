
// var getTimeout = (function() { // IIFE
// 	var _setTimeout = setTimeout, // Reference to the original setTimeout
// 		map = {}; // Map of all timeouts with their start date and delay
//
// 	setTimeout = function(callback, delay) { // Modify setTimeout
// 		var id = _setTimeout(callback, delay); // Run the original, and store the id
//
// 		map[id] = [Date.now(), delay]; // Store the start date and delay
//
// 		return id; // Return the id
// 	};
//
// 	return function(id) { // The actual getTimeLeft function
// 		var m = map[id]; // Find the timeout in map
//
// 		// If there was no timeout with that id, return NaN, otherwise, return the time left clamped to 0
// 		return m ? Math.max(m[1] - Date.now() + m[0], 0) : NaN;
// 	}
// })();


let getTimeout = (() => { // IIFE
	let _setTimeout = setTimeout, // Reference to the original setTimeout
		map = {}; // Map of all timeouts with their end times

	setTimeout = (callback, delay) => { // Modify setTimeout
		let id = _setTimeout(callback, delay); // Run the original, and store the id
		map[id] = Date.now() + delay; // Store the end time
		return id; // Return the id
	};

	return (id) => { // The actual getTimeout function
		// If there was no timeout with that id, return NaN, otherwise, return the time left clamped to 0
		return map[id] ? Math.max(map[id] - Date.now(), 0) : NaN;
	}
})();

const REDIRECT_DELAY = 4000;

// go home
let redirectTimeout = setTimeout(() => {
	window.location.href = "/index.html";
}, REDIRECT_DELAY);

setInterval(() => {
	document.querySelector("#redirectCountdown").innerHTML = `Time left until redirect ${getTimeout(redirectTimeout)}`;
},1);

