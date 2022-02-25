function bounce(a) {
  for (let u = 0; u < a.length; u++) {
    let i = u,
      j = 0;

    let upSum = 0;
    // upwards
    while (a[i - 1] && a[i - 1][j + 1]) {
      upSum += a[i][j];
      i--;
      j++;
    }
    upSum +=a[i][j];
    i++;
    j++;

    let downSum = 0;
    // downwards
    while (a[i] && a[i][j]) {
      downSum += a[i][j];
      i++;
      j++;
    }

    console.log(upSum, downSum);
  }
}
