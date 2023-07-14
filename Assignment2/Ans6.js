function search(nums, l, r, target) {
    if (l <= r) {
      let mid = Math.round(l + (r - l) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (target < nums[mid]) {
        return search(nums, l, mid - 1, target);
      } else {
        return search(nums, mid + 1, r, target);
      }
    }
  
    return -1; 
  }
  
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 9;
  let l = 0;
  let r = nums.length - 1;
  let result = search(nums, l, r, target);
  console.log(result);
  