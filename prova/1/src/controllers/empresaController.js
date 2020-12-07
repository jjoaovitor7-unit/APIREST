exports.maiorSalario = function (req, res) {
  let maiorSalario = [];

  for (let i = 0; i < req.body.length; i++) {
    maiorSalario.push(req.body[i].salario);
  }

  let max = maiorSalario.reduce(function (a, b) {
    return Math.max(a, b);
  });

  let index = maiorSalario.indexOf(max);

  return res.status(200).json(req.body[index]);
};
