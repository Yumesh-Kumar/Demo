// Find an array of unique numbers from the given array     

let arr1 = [5, 7, 4, 1, 0, 0, 4, 8, 0, 5];
let arr2 = []
const FindUnique = () => {
    for(let x in arr1){
      console.log(arr1[x+1]);
    }
    
    console.log(arr2);
    console.log("finish");
 };

FindUnique();
