export class Node {}

export class Container<Type extends Node> {
  add(obj: Type): void {}
  clipFunc! :(func:()=>this)=>void
}

export class Rect extends Container<Rect> {}

export class Rect2 extends Rect {}

export interface GetSet<Type, This> {
  (): Type;
  (v: Type): This;
}

const a = new Rect();
const b = new Rect2();
a.clipFunc = b.clipFunc
// a.aaa("123").
// const b  = new Rect2("2")
// b.

const c:Rect = b

class Animal {

}

class Dog extends Animal {
  
}

class Cat extends Animal {
  
}


declare let f1: (x: Animal) => void;
declare let f2: (x: Dog) => void;
declare let f3: (x: Cat) => void;
f1 = f2;  // 启用 --strictFunctionTypes 时错误
f2 = f1;  // 正确
f2 = f3;  // 错误

function name(params) {
  params
}