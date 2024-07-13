// callback synchronous programming

function sum( a,b){
    console.log(a+b);
}


function calculator (a,b,sumcallback){
    sumcallback(a,b);
}
calculator(2,4,sum);
// or
calculator(2,4,(a,b)=> {
    console.log(a+b);
}

)