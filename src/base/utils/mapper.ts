export abstract class Mapper<T,V> {
    abstract mapFrom(param: T): V;
    abstract mapTo(param:V): T;
}