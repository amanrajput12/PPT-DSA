function product(nums){
    nums.sort((a,b)=>a-b)
    let n =nums.length;
   if(n>0){
    let value = nums[n-1]*nums[n-2]*nums[n-3]
    return value
   }
}

let nums =[1,2,3]
let result = product(nums)
console.log(result);