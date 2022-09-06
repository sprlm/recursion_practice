let fibs = (length) => {
  if (length < 1) return "Please enter a length greater than 0.";

  let output = [0, 1, 1];

  for (let i = 3; i < num; i++) {
    output.push(output[i-1] + output[i-2]);
  }

  return output.splice(0, length);
};

