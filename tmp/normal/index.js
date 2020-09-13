const math = require('mathjs');

function box(mu, sigma, n) {
  let u1 = math.random([n]);
  let u2 = math.random([n]);

  let R_sq = math.multiply(-2, math.log(u1));
  let theta = math.multiply(2 * math.pi, u2);

  //console.log('R_sq', R_sq);
  //console.log('theta', theta);


  let z1 = math.dotMultiply(math.sqrt(R_sq), math.cos(theta));
  // let z2 = math.dotMultiply(math.sqrt(R_sq), math.sin(theta));

  // console.log(z1);
  // console.log(z2);
  // console.log(math.sqrt(R_sq));

  let sample = math.add(mu, math.multiply(z1, sigma));
  console.log('sample', sample)

  console.log('min sample', math.min(sample), 'max sample', math.max(sample));
  console.log('mean sample', math.mean(sample), 'stdev sample', math.std(sample));

}

box(0, 1, 10);

//console.log(math.mean(math.random([10], 0, 10)));
