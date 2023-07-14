function monolithic(nums){
    let n =nums.length-1
    let increase = true;
    let decrease = true
    for(let i=0;i<n;i++){
        if(nums[i]>nums[i+1]){
            increase = false
        }
        if (nums[i]>nums[i+1]){
            decrease =false
        }
    }
    return increase || decrease
}

let  nums = [1,2,2,3]
let result = monolithic(nums)
console.log(result);
