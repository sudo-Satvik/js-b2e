// break and continue

// break keyword

for(let i = 0 ; i < 11 ; i++){
    if(i == 5){
        console.log("Detected 5 now break");
        break;
    }
    console.log(i);
}


for(let i = 0 ; i < 11 ; i++){
    if(i == 5){
        console.log("5 detected now continue");
        continue;
    }
    console.log(i);
}