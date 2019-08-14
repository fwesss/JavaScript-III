/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - this refers to the window or console object when in global scope.
* 2. Implicit - this refers to the object it is inside of.
* 3. New - this refers to the new object being created by a constructor function.
* 4. Explicit - this is overridden when bind, call, or apply is used.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function logThis() {
  console.log(this);
}

logThis();


// Principle 2
// code example for Implicit Binding
const person = {
  color: 'red',
  favoriteColor() {
    console.log(this.color);
  },
};

person.favoriteColor();


// Principle 3
// code example for New Binding
function Person(animal) {
  this.favoriteAnimal = animal;

  function sayFavoriteAnimal() {
    console.log(`My favorite animal is a ${this.favoriteAnimal}.`);
  }
  this.sayFavoriteAnimal = sayFavoriteAnimal;
}

const wes = new Person('Marmot');
const liz = new Person('Deer');

wes.sayFavoriteAnimal();
liz.sayFavoriteAnimal();


// Principle 4
// code example for Explicit Binding
wes.sayFavoriteAnimal.call(liz);
liz.sayFavoriteAnimal.apply(wes);
