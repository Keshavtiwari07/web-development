// for pause - settimeout
// const hello = ( )=> {
//     console.log("hello world ");// arrow function
// }

// setTimeout(hello,3000);

function getdata(dataid,getnextdata){

    setTimeout(() => {
     console.log("data",dataid);
 
     if(getnextdata){
         getnextdata();
     }
 
    },3000);
 }
 getdata(1, () => {
    getdata(2 ,()=> {
        getdata (3);
    });
});