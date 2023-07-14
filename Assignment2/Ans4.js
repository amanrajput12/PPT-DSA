function Flowers(flowerbed, n) {
    let l = flowerbed.length;
    let count = 0;
  
    for (let i = 0; i < l; i++) {
      if (flowerbed[i] === 0) {
        if ((i === 0 || flowerbed[i - 1] === 0) && (i === l - 1 || flowerbed[i + 1] === 0)) {
          flowerbed[i] = 1;
          count++;
  
          if (count === n) {
            return true; 
          }
        }
      }
    }
   return count === n; 
  }
  
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const canPlant = Flowers(flowerbed, n);
  console.log(canPlant);
  