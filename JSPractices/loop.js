// var x = 3;
// var i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i < x);

// console.log(i);

// top: for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 3; j++){
//         if (i === 1 && j === 1){
//             break top;
//         }
//         console.log('i = ' + i + ', j = ' + j);
//     }
// }

top:
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i === 1 && j === 1) continue top;
    console.log("i=" + i + ", j=" + j);
  }
}
