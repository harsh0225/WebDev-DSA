function countletters(str)
{
    let counts = {};

    for(let i=0; i < str.length; i++)
    {
        let char = str[i];
        
        if(counts[char])
        {
            counts[char]++;
        }
        else
        {
            counts[char] = 1;
        }
    }
    return counts;
}

//constructor function

// function rectangle(len,bre)
// {
//     this.lent = 1;
//     this.breadth = 4;

//     this.draw = function(){
//         console.log('drawing');
//     }
// }

// let rectangle1 = new rectangle(10,20);

// console.log(rectangle1.lent);

// console.log(rectangle.lent);
// console.log(rectangle.breadth);

// let s = 'harsh';

// console.log(s.startsWith('h'));

// let myDiv = document.createElement('div');

// function print(event)
// {
//     console.log( event);
// }   

// myDiv.addEventListener('click',print);

// for(let i=0;i<100;i++)
// {
//     let para = document.createElement('p');
//     para.textContent = 'this is para';
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// let promise1 = new Promise(function(resolve,reject)
// {
//     console.log("ho gaya");
//     resolve(1234344);
//     reject(12345);
//     let a = document.querySelector('body');
//     a.addEventListener('click',function(event){
//         console.log(event)
//     })
// })

// promise1.then(value => console.log(value));
// console.log(promise1);

// async function utility()
// {
//     let delhimausam = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log('thik hai')
//         },2000)
//         resolve(5000);
//     });

//     let hydrabadmausam = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("kharab hai")
//         },5000)
//         resolve(200);
//     });

//     let dm = await delhimausam;
//     let mm = await hydrabadmausam;
//     return [dm,mm];
// }

// let dmm = utility();
// dmm.then(value => console.log(value));

// console.log(dmm);