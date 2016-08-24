function returningTwoValuesObj(str) {
  const strLength = str.length;
  // if string has no space, it will return -1
  const hasSpaces = str.indexOf(' ') !== -1;

  return {
    strLength,
    hasSpaces
  };
}

// same Idea but a tuple
function tuple(str) {
  const strLength = str.length;
  const hasSpaces = str.indexOf(' ') !== -1;

  return [strLength, hasSpaces];
}


// what the hell of the use case
function withObj() {
  const helloStr = 'fuck .. what the hell I am doing';
  // key have to same where function defined
  const {
    strLength: len,
    hasSpaces: space
  } = returningTwoValuesObj(helloStr);

  console.log(helloStr, len, space);
}

withObj()

function withTuple() {
  const helloStr = 'fuck .. what the hell I am doing';

  // key have to same where function defined
  const [len, space] = tuple(helloStr);

  console.log(helloStr, len, space);
}

withTuple()

// tuple is winner here for returning multiple values in JS
