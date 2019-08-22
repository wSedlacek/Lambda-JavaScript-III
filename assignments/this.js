/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding - Bound to the Window, Console or wherever JavaScript is run.
 * 2. Implicit Binding - Bound to the object a method is called on.
 * 3. New Binding - Bound the instance of a object created using the new keyword.
 * 4. Explicit binding - Bound to the object specificaly used in .bind(), .call(), or .apply().
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  name: 'myObj',
  whatIsThis: function() {
    console.log(this);
  },
};
myObj.whatIsThis();

// Principle 3

// code example for New Binding
function newObj(name) {
  this.name = name;
  this.whatIsThis = function() {
    console.log(this);
  };
}

const myNewObj = new newObj('New Obj');
myNewObj.whatIsThis();

// Principle 4

// code example for Explicit Binding
const anotherNewObj = new newObj('Another New Obj');
myNewObj.whatIsThis.call(anotherNewObj);
