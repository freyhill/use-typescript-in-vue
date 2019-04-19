/**
 *
 * */
// 1.类型 + 方括号的数组 数组里的每一项必须为number类型，如果出现非number类型的项会报错
export const arr1: number[] = [1, 2, 3, 4];

// 2.数组泛型
export const arr2: Array<string> = ['a', 'b', 'c'];

// 3.多种类型的数组, 表示该数组中包含string类型和number类型，如果有其他类型则会报错
export const arrMoreType: (string | number)[] = [1, 2, 'se'];

// 4.任意类型的数组
export const anyArr: any = [1,2,3,null,'ok', false];

// 5.使用接口来声明对象数组
interface IpersonInfo {
    name: string,
    age: number,
    address: string
}
export const arrObject: IpersonInfo[] = [
    {
        name: "leinov",
        age: 16,
        address: 'beijing'
    }
]
// 6.对象数组的另一种表示
interface IpersonInfo2 {
    name: string,
    age: number,
    address: string
}
interface IpersonInfos extends Array<IpersonInfo2>{}

export const arrObject2: IpersonInfos =[
    {
        name: "jod",
        age: 16,
        address: 'beijing'
    }  
]