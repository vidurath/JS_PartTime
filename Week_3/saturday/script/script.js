
// di learning 
// Day 5 learning loops - loops 


// exercise 1
// let max_num = 100;
// for (let i = 0; i <= max_num; i++ ){
//     if (i%2 == 0){
//         console.log(`${i} is even`);
//     }else
//     {
//         console.log(`${i} is odd`);
//     }
// }

let names = ["john", "sarah", 23 ,"Rudolf",34];

// exercise 2

for (i=0; i<names.length;i++){
    // console.log(names[i]);
    if (typeof names[i] == 'string'){
        names[i] = names[i].replace(names[i].charAt(0), names[i].charAt(0).toUpperCase());
        console.log(names[i]); 
    }

// excercise 3

for (i=0; i<names.length;i++){
    // console.log(names[i]);
    if (typeof names[i] == 'string'){
        // names[i] = names[i].replace(names[i].charAt(0), names[i].charAt(0).toUpperCase());
        console.log(names[i]); 
    }else{
        break;
    }
    
}