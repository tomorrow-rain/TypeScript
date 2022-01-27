//元组
let x: [string, number];
x = ['Runoob', 1];    // 赋值
console.log(x[0]);    // 输出 Runoob

//枚举
enum Color {Red=3, Green=2, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 3,默认枚举中的第一个数等于0，以此类推，如果有赋值，按照赋值来计算

//any
//任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型

let y: any = 1;    // 数字类型
y = 'I am who I am';    // 字符串类型
y = false;    // 布尔类型

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

// 启用 --strictNullChecks
let z: number;
z = 1; // 运行正确
z = undefined;    // 运行错误
z = null;    // 运行错误