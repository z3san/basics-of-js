
// let number = 30
// if(number==30){
// if(typeof number == "string"){
//     console.log("all ok");
// }
// else{
//     console.log("Number is 30 but not string");
// }
// }
// else{
//     console.log("Kichui naa, Wrong");
// }
 

// let num = 103;
// if ( num % 2 != 0 ){
// console.log("This is a odd number");
// }
// else{
//     console.log("This is a even number");
// }

// 33-49=0
//50-59=c
//60-69=B
// 70-79=A
// 80-100= A+

let result= 80
;
if(result>100){
    console.log("Vai, Result 100 er besi kemne hoy?");
}
else if(result<=100 && result>= 0){

    if(result >= 0 && result <33){
        console.log("F Grade");
    }
    else if(result>32 && result<50){
        console.log("D Grade");
    }
    else if(result >= 50 && result<59){
        console.log("C Grade");
    }
    else if(result>=60 && result<69){
        console.log("B Grade");
    }
    else if(result >=70 && result < 79){
        console.log("A Grade");
    }
    else if(result>=80 && result <=100 ){
       console.log(" A+");
    }


}
else{
    console.log("Result cant be less than zero!");
}