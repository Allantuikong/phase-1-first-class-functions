// Recieves a Function
function receivesAFunction (callback) {
    callback();
}

// Returns a named Function

function returnsANamedFunction () {
    return function AKT () {
        // BODY
    };
}

// Returns an annonymous Function

function returnsAnAnonymousFunction () {
    return function () {
        // BODY
    };
}