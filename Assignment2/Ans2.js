function Candies(candyType) {
    const uniqueCandies = new Set(candyType);
    return Math.min(uniqueCandies.size, candyType.length / 2);
  }
  
  const candyType = [1, 1, 2, 2, 3, 3];
  const result = Candies(candyType);
  console.log(result);
  