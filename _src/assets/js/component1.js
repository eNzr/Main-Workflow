console.warn("I'm from the component file");

module.exports = {
    Component1: Component_1,
};

function Component_1( name, callback) {

    callback = callback || function() {}; // or put a test if exist and typeof === function


    // Call our callback, but using our own instance as the context
    callback(this, aParameter);
    //callback.call( newValueForThis);



    //
}

function foo() {
    alert ('I call you back');
}


// var myComponent = new Component_1('name', foo);


/*
// SAMPLE
function doSomething(callback) {
    // ...

    // Call the callback
    callback('stuff', 'goes', 'here');
}

function foo(a, b, c) {
    // I'm the callback
    alert(a + " " + b + " " + c);
}

doSomething(foo);



------


callback(argument_1, argument_2);
callback.call(some_object, argument_1, argument_2);
callback.apply(some_object, [argument_1, argument_2]);
*/