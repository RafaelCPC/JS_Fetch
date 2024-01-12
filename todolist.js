/*Using async and await ,implement the necessary code to recover the 
Todos list present in the following URL through an 
http request: [link](https://jsonplaceholder.typicode.com/todos).*/

async function funcion () {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let jResponse= await response.json ()
    console.log(jResponse);
    return jResponse;
}
funcion();