/* 

function create(){
    this.length;
    this.breadth;
    this.draw= function(){
        console.log('hello');
    }
}

function create(){
    this.length = 10;
    this.breadth = 2;
}
let ob = new create();
console.log(ob.length);
console.log(create.length);

console.log(ob.length);




console.log('lets start'); 

function createobject(length,breadth){
    return rectangle = {
        length,
        breadth,
    
        draw: function(){
            console.log(length);
        }
    };
}
 

let rectangleob1 = createobject(1,20);

console.log(rectangleob1.draw());

function Square(){
    this.side=5;
    this.draw=function(){
        console.log(this.side*2);
    }
}


let squareobj = new Square();
squareobj.color = 'yellow';
console.log(squareobj);

delete squareobj.color;

console.log(squareobj);
 */



/*

loops



let rectangle = {
    length:10,
    breadth:20,
};


//for-in loop

for(let key in rectangle)
{
    console.log(key,rectangle[key]);
}

//for-of loop

for(let key of Object.keys(rectangle))
{
    console.log(key);
}

 */



/* object cloning

let src = {
    length : 10,
    breadth : 20
};

let dest = {};

using iteration

for(let key in src)
{
    dest[key] = src[key];
}


using assign

dest = Object.assign({},src);


using spread

dest = {...src};
console.log(dest.length); */


//Date

// let date1 = new Date('november 25 2003 07:15');
// console.log(date1);

//arrays

/* let arr=[1,2,3,4,5];

console.log(arr);

//push at the end
arr.push(9);
console.log(arr);

//push at the front
arr.unshift(8);
console.log(arr);

//push at the middle
arr.splice(2,0,'a');
console.log(arr); */


// searching of object

/* let courses = [
    {name:'harsh' },
    {name1:'bharitkar' }
];

let course = courses.find(function(course1 e){
    return course1.name === 'harsh';
});

console.log(course); */


// emptying array

/* let array = [1,2,3,4,5,6,7];

let array2 = array;

array=[];

console.log(array);

console.log(array2); */

/* 
let array = [1,2,3,4,5];

let array2= array;

array.length=0;

console.log(array);

console.log(array2); */



//combining and splice array

//using concat function

/* let arr1 = [1,2,3,4];

let arr2 = [5,6,7,8];

let combine = arr1.concat(arr2);

console.log(combine); */

//iterating an array using for-of loop

/* let arr = [1,2,3,4,5,7,8,9,10];

//using for-of loop
for(let ele of arr)
{
    console.log(ele);
}

//using for each loop
arr.forEach(number =>  console.log(number)); 

arr.reverse();

arr.sort();

console.log(arr);
 */

// let arr=[1,2,-10,-6];

// let items = arr.filter(value => value >= 0).map(num => {value1 : num}); 
// console.log(items);

// function sum(...v)
// {
//     for(let ele of v)
//     {
//         console.log(ele);
//     }
// }

// sum(1,2,3,4)


// getter setter and exception handling

/*  let person = {
    fname : 'harsh',
    lname : 'harsh',

    get fName()
    {
        return `${this.fname} ${this.lname}`;
    },

    set fName2(value)
    {
        if(value != String)
        {
            throw new Error('you have send a non string')
        }
        let splits = value.split(' ');
        this.fname = splits[0];
        this.lname = splits[1];
        
    }
}


console.log(person.fName);
try{
    person.fName2 = 1;
}
catch(e){
    alert(e);
}

console.log(person.fName);
 */
 
// if(true){
//     let abb = 'kkk';
// }

// console.log(abb);

 
// let link = document.querySelectorAll('a');
// let secondlink = link[1];
// secondlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('ho gaya');
// });

// let myDiv = document.createElement('div');

// function print(event){
//     console.log('click ho gaya hai'+ event.target.textContent);
// }

// myDiv.addEventListener('click',print);

// for(let i=0;i<100;i++)
// {
//     let para = document.createElement('p');
//     para.textContent = 'this is para ' + i;
//     myDiv.append(para);
// }

// document.body.append(myDiv);

/* 
let para = document.querySelector('article');

function print(event){
    if(event.target.nodeName == 'SPAN')
    {
        console.log('clicked' + event.target.textContent);
    }
}
para.addEventListener('click',print); */

///performance

/* 

let t1 = performance.now();
for(let i=0;i<100;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = 'para no '+i;
    document.body.appendChild(newElement);
}

let t2 = performance.now();
console.log(t2-t1);


let t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=0;i<100;i++)
{
    let newpara = document.createElement('p');
    newpara.textContent = 'para no '+i;
    myDiv.appendChild(newpara);
}

document.body.appendChild(myDiv);
let t4 = performance.now();

console.log(t4-t3);


let t5 = performance.now();
let fragement = document.createDocumentFragment();

for(let i=0;i<100;i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para no ' + i ;
    fragement.appendChild(newElement);
}

document.body.appendChild(fragement);

let t6 = performance.now();

console.log(t6-t5);  */

// let x= 10;
// const obj = {
//     x:20,
//     greet(){
//         x = 20;
//         console.log(this.x);
//     }
// }

// const person = obj.greet;
// person();

////// promise
/* 
let mypromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('settimeout')
    },2000);

    //resolve(123);
    reject(new Error('error caught'));
})

mypromise.then((value) => console.log(value));

mypromise.catch((value) => console.log(value)); */


/* let waadaa1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('settimeout - 1');
    },2000);
    resolve(true);
});

let flag = waadaa1.then((value) => {
    if(value == true){
        var waadaa2 = new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log('setTimeout - 2');
            },5000)
            resolve(true);
        });
    }
    return waadaa2;
})

flag.then((value) => {
    if(value == true){
        console.log('ho gaya');
    }
})

 */

//// async await 

/* async function utility(){
    
    let delhimausam = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('delhi me bahot garmi hai');
        },5000);
    });

    let hydramausam = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('hydarbad is cool');
        },10000);
    })  

    let dm = await delhimausam;
    let hm = await hydramausam;

    return [dm,hm];

}

console.log(utility()); */


