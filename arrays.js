function getRandomList(arrayLength, rangeMin, rangeMax) {
    var newList = []
    
    if(rangeMin >= 0 && rangeMax >= 0){
        for (let x = 0; x < arrayLength; x++) {
            newList.push(Math.floor(Math.random() * rangeMax) + rangeMin)
        }
    }
    if(rangeMin < 0 && rangeMax < 0){
        for (let x = 0; x < arrayLength; x++) {
            newList.push(Math.floor(Math.random() * (rangeMin * -1) + rangeMax))
        }
    }
    if(rangeMin < 0 && rangeMax >=0){
        for (let x = 0; x < arrayLength; x++) {
            newList.push(Math.floor(Math.random() * ((rangeMin * -1) + rangeMax)) + rangeMin)
        }
    }
    return newList
}

const lineSeperator = `•·················•·················•`

function pushFront(arr, val) {
    for(var n=arr.length;n>0;n--) {
        arr[n] = arr[n - 1] 
    }
    arr[0] = val
}

function popFront(arr) {
    for(var n=0;n<arr.length;n++) {
        arr[n] = arr[n+1]
    }
    arr.length = arr.length - 1
}

function insertAt(arr, index, val) {
    for(var n=arr.length;n>index;n--) {
        arr[n] = arr[n - 1] 
    }
    arr[index] = val
}

function removeAt(arr, index) {
    for(var n=index;n<arr.length;n++) {
        arr[n] = arr[n+1]
    }
    arr.length = arr.length - 1
}

function swapPairs(arr) {
    for(var a=0;a<arr.length;a+=2) {
        [arr[a], arr[a+1]] = [arr[a+1], arr[a]]
    }
}

const removeDupes = (arr) => {
    var a = 1
    while(a<arr.length) {
        if(arr[a] === arr[a-1]) {
            removeAt(arr, a)
        } else {
            a++
        }
    }
}

var output = ""
var arr = getRandomList(10, 1, 100)
console.log(arr)

output += lineSeperator + " Push Front " + lineSeperator + "\n\n"
output += "Starting Array = [" + arr + "]\n\n"
pushFront(arr, 8)
output += "pushFront(Array, 8) \n\n"
output += "Ending Array = [" + arr + "]\n\n"

output += "Starting Array = [" + arr + "]\n\n"
pushFront(arr, 7)
output += "pushFront(Array, 7)\n\n"
output += "Ending Array = [" + arr + "]\n\n"

output += lineSeperator + " Pop Front " + lineSeperator + "\n\n"
output += "Starting Array = [" + arr + "]\n\n"
popFront(arr)
output += "popFront(Array) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

output += "Starting Array = [" + arr + "]\n\n"
popFront(arr)
output += "popFront(Array) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

output += lineSeperator + " Insert At " + lineSeperator + "\n\n"
output += "Starting Array = [" + arr + "]\n\n"
insertAt(arr, 2, 311)
output += "insertAt(Array, 2, 311) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

output += "Starting Array = [" + arr + "]\n\n"
insertAt(arr, 1, 42)
output += "insertAt(Array, 1, 42) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

output += lineSeperator + " Remove At " + lineSeperator + "\n\n"
output += "Starting Array = [" + arr + "]\n\n"
removeAt(arr, 1)
output += "removeAt(Array, 1) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

output += "Starting Array = [" + arr + "]\n\n"
removeAt(arr, 3)
output += "removeAt(Array, 3) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

output += lineSeperator + " Swap Pairs " + lineSeperator + "\n\n"
output += "Starting Array = [" + arr + "]\n\n"
swapPairs(arr)
output += "swapPairs(Array) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

arr = getRandomList(10, 1, 50)
output += "Starting Array = [" + arr + "]\n\n"
swapPairs(arr)
output += "swapPairs(Array) " + '\n\n'
output += "Ending Array = [" + arr + "]\n\n"

arr = getRandomList(10, 1, 5) //to guaranty some duplicate numbers
output += lineSeperator + " Remove Duplicates " + lineSeperator + "\n\n"
output += "Starting Array = [" + arr.sort() + "]\n\n" //build in method is outside the function so I'm not counting it
removeDupes(arr)
output += "removeDupes(Array) " + '\n\n'
output += "Ending Array = [" + arr.sort() + "]\n\n"

arr = getRandomList(20, 1, 10)
output += "Starting Array = [" + arr.sort() + "]\n\n"  
removeDupes(arr)
output += "removeDupes(Array) " + '\n\n'
output += "Ending Array = [" + arr.sort() + "]\n\n"

console.log(output)