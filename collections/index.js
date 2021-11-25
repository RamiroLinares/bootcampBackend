//Basic array operations

let programmers = ['Junior', 'Senior'] //create
const last = programmers[programmers.length - 1] //accces
const posLast = programmers.indexOf('Senior') //find index
const programmers2 = programmers.slice() //copy all elements, difference with assign =

//iterations
for (const programmer of programmers) {
    console.log(programmer);
  } //iterate array


for (const programmerLetter of programmers[0]) {
    console.log(programmerLetter);
  } //iterate string


//Multidimensional Arrays
const programmersWithData=[['Junior', 'Production'],
                           ['Senior', 'Production and Management']]

console.log(programmersWithData[0][0]+' does '+programmersWithData[0][1])
console.log(programmersWithData[1][0]+' does '+programmersWithData[1][1])

programmersWithData.unshift(['Trainee','Learn']) //same functions as normal arrays
console.log(programmersWithData[0][0]+' does '+programmersWithData[0][1]) //look to index pos

//Add and remove elements

programmers2.unshift('Trainee') //add item to the beginning
programmers2.push('Trainer') //add item to the last
console.log(programmers2)
console.log(programmers)

programmers.shift() //remove first element
programmers.pop() //remove last element
console.log(programmers)

programmers=programmers2.slice() //copy again
programmers.splice(1,1) //remove by index pos
console.log(programmers)

programmers.splice(1,2) //remove items from index pos
console.log(programmers)

//Find
const foundTrainer = programmers2.find(element => element === 'Trainer');
console.log(foundTrainer)
const foundName = programmers2.find(element => element === 'Ramiro');
console.log(foundName);


//Map

const map1 = programmers2.map(x => x+2);
console.log(map1);

//Filter
const programmersFiltered = programmers2.filter(firstLetter => firstLetter[0] === 'T');
console.log(programmersFiltered)

//every
const startsWithT = programmersFiltered.every(firstLetter => firstLetter[0] === 'T');
console.log(startsWithT) //test if all elements starts with T

//concat
const concated=map1.concat(programmersFiltered)
console.log(concated)

//flat map
const arr1 = ["it's Sunny in", "", "California"];
console.log(arr1.map(x => x.split(" ")));
console.log(arr1.flatMap(x => x.split(" ")));


//sort
console.log(programmers2.sort())

//more methods 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Typed Arrays
const typedArray1 = new Int32Array(5);
typedArray1.fill(5)
console.log(typedArray1)
typedArray1[1]='TEST'
console.log(typedArray1)
  //iterate TypedArray
  for (const value of typedArray1) {
    console.log(value);
  }

//Map
const map2 = new Map();
map2.set('Trainee', 'Learn',0);
map2.set('Junior', 'Production',1);
map2.set('Senior', 'Production and management',2);
console.log(map2)
console.log(map2.get('Trainee'))
console.log(map2.size)
console.log(map2.delete('Trainee'))
console.log(map2)

//iterate Map
for (const [key, value] of map2) {
   console.log(value);
 }

 //weakmap
const wmap1 = new WeakMap();
const w1 = {}
const w2 = function() {}
//const w3='';
wmap1.set(w1,37)
wmap1.set(w2,'asda')
//wmap1.set(w3,'asda')
console.log(wmap1.get(w2))

//Set
const egSet = new Set()
egSet.add('Ramiro')
egSet.add('Linares')
egSet.add('Ramiro')
console.log(egSet)

//iterate set
for (const value of egSet) {
    console.log(value);
  }

//weakSet
const ws = new WeakSet();
ws.add(programmersFiltered)
ws.add(programmersFiltered)
console.log(ws.has(programmersFiltered))
ws.delete(programmersFiltered)
console.log(ws.has(programmersFiltered))

const a=['a']
const b=['a']
ws.add(a)
ws.add(b)
ws.delete(a)
console.log(ws.has(b))


// a generator
function* someOddNumbers() {
    yield 1;
    yield 3;
    return 9;
}

// we invoke it
const gen = someOddNumbers();
const gen2 = someOddNumbers();
console.log(gen.next())
gen.next()
console.log(gen2.next())
console.log(gen.next())
