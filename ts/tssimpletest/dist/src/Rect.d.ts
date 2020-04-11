export declare class Node {
}
export declare class Container<Type extends Node> {
    add(obj: Type): void;
    clipFunc: (func: () => this) => void;
}
export declare class Rect extends Container<Rect> {
}
export declare class Rect2 extends Rect {
}
export interface GetSet<Type, This> {
    (): Type;
    (v: Type): This;
}
