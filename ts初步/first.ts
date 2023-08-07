/* ------------------------------------------ */
let helloWorld = "Hello World"

/* ------------------------------------------ */
interface User {
  name: string
  id: number
}
const user: User = {
  name: "Hayes",
  id: 0,
}
// const person: User = {
//   userName: "boys", // 在编译的时候，就会警告对象与接口不匹配
//   id: 0,
// }

/* ------------------------------------------ */
interface User {
  name: string
  id: number
}

class UserAccount {
  // 类里面限定数据类型
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}
const newUser: User = new UserAccount("Murphy", 1)

/* ------------------------------------------ */
// 使用接口来注释参数并将值返回给函数
function deleteUser(user: User) {
  // ...
}
// function getAdminUser(): User {
//
// }

/* ------------------------------------------ */
// js的更多类型：any（允许任何内容）、unknown（确保使用此类型的人声明了该类型是什么）、never（这种类型不可能发生）以及（返回或不返回的void函数）undefined价值）

/* ------------------------------------------ */
// 创建类——联合|泛型
// 1. 联合：描述允许值的集合
type MyBool = true | false
type WindowStates = "open" | "closed" | "minimized"
type LockStates = "locked" | "unlocked"
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9
function getLength(obj: string | string[]) {
  return obj.length
}
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj]
  }
  return obj
}
// 2.泛型
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>
type BooleanArray = Array<boolean>
interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get()
// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23)
backpack.add("23")
declare const pack: Backpack<boolean>
const obj = backpack.get()
// pack.add(1)
pack.add(true)

/* ------------------------------------------ */
/* 结构类型系统 */
interface Point {
  x: number
  y: number
}
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}
// logs "12, 26"
const point = { x: 12, y: 26 }
logPoint(point)
const point2 = { x: 22, y: 44 }
logPoint(point2)
console.log(point, point2)
