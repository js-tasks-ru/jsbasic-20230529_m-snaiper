function factorial(n) {
  let a = 1;
  for (let i = 2; i < n+1; i++) {
    a *= i;
  }
  return (a);
}
