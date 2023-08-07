/* ------------------------------------------ */
var helloWorld = "Hello World";
var user = {
    name: "Hayes",
    id: 0,
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var newUser = new UserAccount("Murphy", 1);
/* ------------------------------------------ */
// 使用接口来注释参数并将值返回给函数
function deleteUser(user) {
    // ...
}
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23)
backpack.add("23");
var obj = backpack.get();
// pack.add(1)
pack.add(true);
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
var point2 = { x: 22, y: 44 };
logPoint(point2);
console.log(point, point2);
