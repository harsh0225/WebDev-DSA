function common(arr1,arr2)
{
    let commonarray = [];
    
    for(let i=0; i < arr1.length; i++)
    {
        if(arr2.includes(arr1[i]))
        {
            if(!commonarray.includes(arr1[i]))
            {
                commonarray.push(arr1[i]);
            }
        }
    }
    return commonarray;
}

let arr1 = [1,2,4,5,6];
let arr2 = [2,3,4,7,8,9];
let common1 = common(arr1,arr2)

console.log(common1);

