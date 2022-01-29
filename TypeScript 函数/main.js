// 函数定义
function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用 greet() 函数 
    console.log(msg);
}
// 调用函数
caller();
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
// 可选参数
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
// 默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
// 剩余参数
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//  无参数匿名函数
var msg = function () {
    return "hello world";
};
console.log(msg());
// 带参数匿名函数
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
// 匿名函数自调用
(function () {
    var x = "Hello!!";
    console.log(x);
})();
//  构造函数
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
// Lambda 函数
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
foo(100);
// var disp =()=> { 
//     console.log("Function invoked"); 
// } 
// disp();
// 函数重载
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
