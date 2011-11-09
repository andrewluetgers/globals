// globals.js 
// andrew luetgers
// copyright CC by SA

(function(){
	// compile a list of all globals at eval time
	// best to load this script before any other code
	var global,
		now = new Date().getTime(),
		root = this,
		auto = window && window.location.search.match("global"),
		timeout = 100,
		timeoutId = null,
		markedCount = 0,
		markedGlobals = {};

	var mark = function() {
		markedCount = 0;
		for(global in root) {
			markedCount++;
			markedGlobals[global] = true;
		}

		clearTimeout(timeoutId);
		timeoutId = setTimeout(globals, timeout);

		return "marked " + markedCount + " globals"
	};

	var check = function(id, verbose) {

		console.log("check");

		var globals = 0,
			globalObjs = {};

		for(global in root) {
			if(!markedGlobals[global]) {
				globals++;
				globalObjs[global] = root[global];
			}
		}

		if (verbose) {
			console.log("==== globals check"+(": "+id||"")+" ====");
			console.log("------- "+ globals +" new globals-------");
			console.log(globalObjs);
			console.log("------- previously marked globals-------");
			console.log(markedGlobals);
		} else if (globals) {
			console.log((new Date().getTime() - now)+"ms", globalObjs);
		}
	};

	var globals = function(id) {
		if(markedCount) {
			check(id);
			mark();
		} else {
			mark();
		}
	};

	globals.mark = mark;
	globals.check = check;

	if(auto) {
		globals("auto check");
	} else {
		window.globals = globals;
	}

}());