'use strict';

class First {
   constructor() {

   }
   helloOne() {
      console.log('Привет я метод родителя!');
   };
}

class Second extends First {
   helloTwo() {
      super.helloOne()
      console.log('А я наследуемый метод!');
   }
}

const login2 = new Second();
console.log(login2);

login2.helloTwo();