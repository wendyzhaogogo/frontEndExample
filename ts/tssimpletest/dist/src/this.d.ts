declare type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>;
};
declare function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M;
declare let obj: {
    x: number;
    y: number;
} & {
    moveBy(dx: number, dy: number): void;
};
