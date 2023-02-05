////// Maps -> Key - Value //////
// Map anahtar ve değer ikilisini tutan ve değerlerin eklenme sırasını hatırlayan bir JavaScript nesnesidir. 
// Normal bir nesneden farklı olarak anahtar için herhangi bir veri tipi kullanılabilir.
/////////////////////////////////
// let myMap = new Map() //Create map
/////////////////////////////////
// const key1 = "Kerem"
// const key2 = {a:10, b:"Twenty"}
// const key3 = () => 2
// const key4 = 3.14
/////////////////////////////////
////////////// Set //////////////
// myMap.set(key1, "String Value")
// myMap.set(key2, "Object Literal Value")
// myMap.set(key3, "Function Value")
// myMap.set(key4, "Float Value")
/////////////////////////////////
////////////// Get //////////////
// console.log(myMap.get(key1)) // String Value
// console.log(myMap.get(key2)) // Object Literal Value
// console.log(myMap.get(key3)) // Function Value
// console.log(myMap.get(key4)) // Float Value
/////////////////////////////////
///////////// Map Size///////////
// console.log(myMap.size) // 4
/////////////////////////////////

/////////////////////////////////
// const cities = new Map()
// cities.set("Ankara", 5)
// cities.set("İstanbul", 16+4)
// cities.set("İzmir", 4)
/////////////////////////////////
// ----------For Each----------
// cities.forEach((value, key) => {
//     console.log(key, value)
// })
/////////////////////////////////
// ----------For Of----------
// for(let [key, value] of cities) { //Destructing
//     console.log(key, value)
// }
/////////////////////////////////
// ----------For Of(Only Keys)----------
// for (const key of cities.keys()) {
//     console.log(key)
// }
/////////////////////////////////
// ----------For Of(Only Values)----------
// for (const value of cities.values()) {
//     console.log(value)
// }
/////////////////////////////////
// ----------Array->Map----------
// const array = [["key1", "value1"],["key2", "value2"]]
// const lastMap = new Map(array)
// console.log(lastMap) //Map(2) {'key1' => 'value1', 'key2' => 'value2'}
/////////////////////////////////
// ----------Map->Array----------
// const cities = new Map()
// cities.set("Ankara", 5)
// cities.set("İstanbul", 16+4)
// cities.set("İzmir", 4)
// const array = Array.from(cities)
// console.log(array) //[['Ankara', 5],['İstanbul', 20],['İzmir', 4]]
/////////////////////////////////