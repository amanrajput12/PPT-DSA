// Ans 1
function arrindex(nums,target){
    for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
          if((target==nums[i]+nums[j])){
              return {i,j}
          }
      }
     
    }
   
    
  }
  
  let nums =[2,7,11,15] 
  let target =9
  let result = arrindex(nums,target)
  console.log(`index values are ${result.i} ${result.j}`);
  
  // Ans 2
  
  
  
  
  // Ans 3
  function binarySearch(arrval1, targetval1) {
      let left = 0;
      let right = arrval1.length - 1;
    
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
    
        if (arrval1[mid] === targetval1) {
          return mid;
        } else if (arrval1[mid] < targetval1) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    
      return -1; 
    }
    
    let arrval1 = [1, 3, 5, 6];
    let targetval1 = 4;
    let getval = binarySearch(arrval1, targetval1);
    
    if (getval !== -1) {
      console.log(`Index of the target value is ${getval}`);
    } else {
      console.log("Target value not found in the array.");
    }
  
  
    
  //   Ans 4
  
   function arrIncrement(digit){
      let sum =0;
      let incrementArr =[]
      for(let i=0;i<digit.length;i++)
      if(i!==digit.length-1){
          incrementArr.push(digit[i])
      }
      else if (i==digit.length-1) {
         value = digit[i]
          incrementArr.push(digit[i]+1) 
          console.log(incrementArr);
      }
  
      
  
   }
  let digit =[1,2,3]
  let incrementval = arrIncrement(digit)
  console.log(`${incrementval}`);
  
    
  // Ans 5
  
  function fillZeros(arr1, arr2) {
      let index = 0;
    
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 0 && index < arr2.length) {
          arr1[i] = arr2[index];
          index++;
        }
      } 
    
      return arr1.sort((a,b)=>a-b);
    }
    
    
    const array1 = [ 1, 2, 3,0,0,0];
    const array2 = [2, 5, 6];
    const resultvalue = fillZeros(array1, array2);
    console.log(resultvalue); 
    
  // Ans 6
  
  function arrTwice(arrdigit){
      for(let i=0;i<arrdigit.length;i++){
          for(let j=i+1;j<arrdigit.length;j++){
              if(arrdigit[i]==arrdigit[j]){
                  return true;
              }
              else {
                  return false
              }
          }
      }
  }
  let arrdigit = [1,2,3,1]
  console.log(arrTwice(arrdigit));
  
  
  // Ans 7
  function arrIndexReplace(arrvalues){
      let fillvalue =0;
      for(let i=0;i<arrvalues.length;i++){
          if(arrvalues[i]!==0){
              arrvalues[fillvalue]= arrvalues[i]
              fillvalue++;
          }
          
      }
       while(fillvalue<arrvalues.length){
          arrvalues[fillvalue] = 0;
          fillvalue++;
      }
      return arrvalues
      
  }
  
  let arrvalues =  [0,1,0,3,12]
  console.log(arrIndexReplace(arrvalues));