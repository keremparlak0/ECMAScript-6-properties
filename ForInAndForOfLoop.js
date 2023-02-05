const person = {
    name: "kerem",
    age: 22,
    salary: 45000
}

const langs = ["JS", "C", "Java"]

const name = "alietiyedi"

//////////////////FOR IN//////////////////
// - index numaralarını veriyor
//////////////////////////////////////////
// for(let prop in person){//property = özellik
//     console.log(prop, person[prop])
// }
// ----------Array----------
// for(let index in langs){
//     console.log(index, langs[index])
// }
// ----------String----------
// for(let index in name){
//     console.log(index, name[index])
// }
//////////////////////////////////////////

//////////////////FOR OF//////////////////
// - Objelerin üzerinde gezinemiyoruz.
// - Sadece Array'e benzeyen veri tipleri üzerinde gezinebiliriz
// - Direkt değeri çıktı veriyor
//////////////////////////////////////////
// ----------Object----------
// for(let value of person){console.log(value)}//Type Error
// ----------Array----------
// for(let value of langs){
//     console.log(value)
// }
// ----------String----------
// for(let char of name){
//     console.log(char)
// }
//////////////////////////////////////////