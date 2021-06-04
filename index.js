// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){

   cats.push(name)

}

function destructivelyPrependCat(name){

cats.unshift(name)

}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){

    cats.shift()

}

function appendCat(name){

   const newArray = [...cats, name]

    return newArray

}

function prependCat(name){

    const newArray2 = [name, ...cats]

    return newArray2


}


function removeLastCat(){

    const newArray3 = [...cats]

    newArray3.pop()

    return newArray3

}



function removeFirstCat(){
const removesFirst = [...cats]

    removesFirst.shift()

    return removesFirst

}