// for pause - settimeout
// const hello = ( )=> {
//     console.log("hello world ");
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