// 一、函数接口 定义该函数的接口要求为一个string类型的参数 返回一个布尔型的返回值
interface Ifunc{
    (p: string): boolean;
}
let myFunc: Ifunc  = function(p: string) {
    return typeof p === 'string';
}
myFunc('name');

// 定义没有返回值的接口函数
interface Ifunc2{
    (data: Array<any>): void;
}
let myFunc2: Ifunc2  = function(data: any) {
    data.forEach((item: any) => {
        item*2;
    });
}

myFunc2([11,2]);

// 二、可索引的类型
// 1.规定索引签名是字符串类型，返回值是字符串类型或数字类型。
interface IindexStringType {
    [index: string]: string | number
}
let obj: IindexStringType = {name:'1', age:10};

console.log(obj['name']);
// 2.规定索引签名是数字类型，返回值数字类型。
interface IindexNumberType {
   readonly [index: number]: number
}

let arr: IindexNumberType = [1,2,3,4];
// arr[1] = 10; error readonly
console.log(arr[1]);

// 三、类类型