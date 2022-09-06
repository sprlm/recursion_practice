let fibs = (length) => {
  if (length < 1) return "Please enter a length greater than 0.";

  let output = [0, 1];

  for (let i = 2; i < length; i++) {
    output.push(output[i-1] + output[i-2]);
  }

   console.log(output.splice(0, length));
};

let fibsRec = (length, output = [0, 1]) => {
  if (length < 1) return "Please enter a length greater than 0.";

  if (output.length !== length && length > 2) {
    output.push(output[output.length-1] + output[output.length-2])
    fibsRec(length, output);
  } else {
    console.log(output.splice(0, length));
  }
};

fibs(8);
fibsRec(8);

fibs(1);
fibsRec(1);

fibs(20);
fibsRec(20);
