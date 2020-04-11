// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   return {
//     fly(){

//     },
//     swim(){

//     },
//     layEggs(){

//     }
//   }
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay



type PPP<T> =   {
  [P in keyof T]?: T[P]
}

// interface Map<T> {
//   [key: "1"|"2"]: T;
// }

interface test {
  a:string
}

import { Rect } from "./Rect";
class LabelRectUnit extends Rect {
  beginEdit() {
    
  }
}
export default {
  LabelRectUnit
}
