/////////Sets - Kümeler//////////
//      - Bir değeri 1 defa ekler
const mySet = new Set()

mySet.add(100)
mySet.add(100)
mySet.add(3.14)
mySet.add("Kerem")
mySet.add(false)
mySet.add([1,2,3])
mySet.add({a: 1, b: 2})
/////////////////////////////////
// ----------Array->Set----------
const mySet2 =  new Set([100, 3.14, "Kerem"])
// console.log(mySet)// {100, 3.14, 'Kerem', false, Array(3), …}
// console.log(mySet2)// {100, 3.14, 'Kerem'}
/////////////////////////////////
// ----------Size----------
// console.log(mySet.size)
/////////////////////////////////
// ----------Delete Method----------
// mySet.delete("Kerem")
// console.log(mySet)// {100, 3.14, false, Array(3), {…}}
/////////////////////////////////
// ----------Has Method----------
// console.log(mySet.has("Kerem"))// true
// console.log(mySet.has(200))// false
// console.log(mySet.has([1,2,3]))// false(reference type)
/////////////////////////////////
// ----------For Each----------
// mySet.forEach((value)=>{
//     console.log(value)
// })
/////////////////////////////////
// ----------For of----------
// for (const value of mySet) {
//     console.log(value)
// }
/////////////////////////////////
// ----------Set->Array----------
// const array = Array.from(mySet)
// console.log(array)
