function sumSalary(salaries) {
  
  let a = Object.values(salaries); b = 0;
    for (const key in a) {
     if (typeof(a[key]) === 'number' && a[key] >= 0 && a[key] != Infinity) {
       b += a[key];
      }
    }
    return(b)
  }

