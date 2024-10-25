function fetchData(url,callback)
{
    let xdata = fetch(url);

    xdata.then(response => {response.json()});
    xdata.then(data => {callback(null,data)});
    xdata.catch(error => {callback(error,null)})
}

fetchData('https://jsonplaceholder.typicode.com/todos/1',(error,data) => {
    if(error !== null)
    {
        console.log(error);
    }
    else
    {
        console.log(data);
    }
})